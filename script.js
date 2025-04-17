document.addEventListener("DOMContentLoaded", () => {
  const isMobileOrTablet =
    window.innerWidth <= 1024 || "ontouchstart" in window;

  if (isMobileOrTablet) {
    const msgEl = document.getElementById("country-message");
    if (msgEl) {
      msgEl.textContent =
        "To find out if you can drink the tap water in a specific country, tap it on the map or use the search box.";
    }
  }
});

/*******************************
 *  GLOBAL STATE + HELPERS     *
 *******************************/
let mapDocument = null; // set after SVG <object> loads
/* Keep one array of the currently highlighted paths */
let activePaths = [];

/** Highlight all segments of a country. Pass null to clear. */
function highlight(id) {
  /* 1. always clear previous highlight */
  activePaths.forEach((el) => {
    el.classList.remove("active");
    el.style.fill = "";
  });
  activePaths = [];

  /* 2. if id is null/undefined, we’re done (just cleared) */
  if (!id || !mapDocument) return;

  /* 3. colour the new country */
  const nodes = mapDocument.querySelectorAll(`[id="${CSS.escape(id)}"]`);
  if (!nodes.length) return;

  const cat = countryData[id]?.category;
  const fill = categories[cat]?.color || "#4f46e5";

  nodes.forEach((el) => {
    el.style.fill = fill;
    el.classList.add("active");
    activePaths.push(el);
  });
}

/** Mirror hover / search behaviour in the page header */
function updateHeader(id) {
  const data = countryData[id];
  if (!data) return;

  const { name, category } = data;
  const { message } = categories[category] || categories.unknown;

  document.getElementById("country-name").innerText = name;
  document.getElementById("country-message").innerHTML =
    message.replace("[country name]", name) +
    `<br><strong id="more-info-link" data-id="${id}" style="cursor:pointer;">Click for more information</strong>`;
}

/*******************************
 *  ORIGINAL MAP INTERACTIONS  *
 *******************************/
document.getElementById("world-map").addEventListener("load", function () {
  mapDocument = this.contentDocument;
  if (!mapDocument) {
    console.error("SVG contentDocument missing");
    return;
  }

  /* --- Inject stroke style for .active (no fill so inline wins) --- */
  const styleEl = mapDocument.createElementNS(
    "http://www.w3.org/2000/svg",
    "style"
  );
  styleEl.textContent = `  path            { cursor: pointer; }    /* 👈 new rule */ .active{stroke:#1e1b4b;stroke-width:.8}`;
  mapDocument.documentElement.insertBefore(
    styleEl,
    mapDocument.documentElement.firstChild
  );

  /* --- Modal, tooltip, and header elements --- */
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const infoIcon = document.getElementById("info-icon");
  const tooltip = document.getElementById("tooltip");
  const countryNameEl = document.getElementById("country-name");
  const countryMsgEl = document.getElementById("country-message");
  const defaultMsgHTML = countryMsgEl.innerHTML;

  let modalOpen = false;

  /* Open modal with detailed info for a given country id */
  const openCountryModal = (id) => {
    const data = countryData[id];
    if (!data) return;

    const { name, category } = data;
    const { label, detailedMessage } =
      categories[category] || categories.unknown;

    modalOpen = true;
    modalBody.className = category;
    modalBody.innerHTML = `<h2>${name}</h2><h3>${label}</h3>${detailedMessage}`;
    modalOverlay.style.display = "flex";
    highlight(id); // keep it highlighted while modal is open
  };

  const resetHeader = () => {
    countryNameEl.innerText = "";
    countryMsgEl.innerHTML = defaultMsgHTML;
  };
  const closeModal = () => {
    modalOverlay.style.display = "none";
    modalOpen = false;
    resetHeader();
    highlight(null);
  };
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  /* Delegate clicks on the “more‑info‑link” (from hover OR search) */
  document.addEventListener("click", (e) => {
    if (e.target.id === "more-info-link") {
      const id = e.target.dataset.id;
      if (id) openCountryModal(id);
    }
  });

  /* --- Hover & click listeners for each country path --- */
  const allCountries = mapDocument.querySelectorAll("path");
  allCountries.forEach((country) => {
    const id = country.id;
    if (!countryData[id]) return;

    const { name, category } = countryData[id];
    const { label, message } = categories[category] || categories.unknown;
    const formatted = message.replace("[country name]", name);

    country.addEventListener("mouseenter", () => {
      highlight(id);
      countryNameEl.innerText = name;
      countryMsgEl.innerHTML = `${formatted}<br><strong id="more-info-link" data-id="${id}" style="cursor:pointer;">Click for more information</strong>`;
      tooltip.innerText = label;
      tooltip.style.opacity = "1";
      tooltip.style.display = "block";
    });

    country.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.pageX - 20}px`;
      tooltip.style.top = `${e.pageY + 150}px`;
    });

    country.addEventListener("mouseleave", () => {
      if (!modalOpen) {
        highlight(null);
        resetHeader();
      }
      tooltip.style.opacity = "0";
      tooltip.style.display = "none";
    });

    country.addEventListener("click", () => openCountryModal(id));
  });

  /* Info‑icon modal */
  infoIcon.addEventListener("click", () => {
    modalOpen = true;
    modalBody.innerHTML = extendedDisclaimer;
    modalOverlay.style.display = "flex";
  });

  /*******************************
   *  SEARCH BAR FUNCTIONALITY   *
   *******************************/
  const searchInput = document.getElementById("countrySearch");
  const suggestionsEl = document.getElementById("searchSuggestions");

  /* Build name → id lookup */
  const nameToId = {};
  Object.entries(countryData).forEach(([id, obj]) => {
    nameToId[obj.name.toLowerCase()] = id;
  });

  /* Show autocomplete suggestions */
  const showSuggestions = (term) => {
    const val = term.trim().toLowerCase();
    if (!val) {
      suggestionsEl.style.display = "none";
      return;
    }

    const results = Object.entries(countryData)
      .filter(([, c]) => c.name.toLowerCase().startsWith(val))
      .sort((a, b) => a[1].name.localeCompare(b[1].name))
      .slice(0, 10);

    suggestionsEl.innerHTML = results
      .map(
        ([id, c], idx) =>
          `<li data-id="${id}" ${idx === 0 ? 'class="active"' : ""}>${
            c.name
          }</li>`
      )
      .join("");

    suggestionsEl.style.display = results.length ? "block" : "none";
  };

  /* Input typing */
  searchInput.addEventListener("input", (e) => showSuggestions(e.target.value));

  /* Mouse click on a suggestion */
  suggestionsEl.addEventListener("click", (e) => {
    const li = e.target.closest("li[data-id]");
    if (!li) return;
    selectCountry(li.dataset.id, li.innerText);
  });

  /* Keyboard navigation (↑ ↓ Enter) */
  searchInput.addEventListener("keydown", (e) => {
    const items = [...suggestionsEl.querySelectorAll("li")];
    if (!items.length) return;

    let idx = items.findIndex((li) => li.classList.contains("active"));
    if (e.key === "ArrowDown") {
      idx = (idx + 1) % items.length;
      setActive(idx);
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      idx = (idx - 1 + items.length) % items.length;
      setActive(idx);
      e.preventDefault();
    } else if (e.key === "Enter") {
      const el = items[idx >= 0 ? idx : 0];
      selectCountry(el.dataset.id, el.innerText);
      e.preventDefault();
    }

    function setActive(i) {
      items.forEach((li) => li.classList.remove("active"));
      items[i].classList.add("active");
    }
  });

  /* Apply hover‑style update for chosen id */
  function selectCountry(id, nameShown) {
    suggestionsEl.style.display = "none";
    searchInput.value = nameShown;
    highlight(id);
    updateHeader(id); // header now includes data-id and modal click works
  }
});
