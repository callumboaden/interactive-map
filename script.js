// Wait for the SVG object to load
document.getElementById("world-map").addEventListener("load", function () {
  // Access the embedded SVG document
  const svgDoc = this.contentDocument;
  if (!svgDoc) {
    console.error("SVG contentDocument is not available.");
    return;
  }

  // Create a <style> element in the SVG namespace
  const styleEl = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
  styleEl.textContent = `
    .highlight { fill: blue; cursor: pointer; }
    svg path { transition: fill 0.2s ease; cursor: pointer; }
  `;
  svgDoc.documentElement.insertBefore(
    styleEl,
    svgDoc.documentElement.firstChild
  );

  // Modal elements
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");
  const infoIcon = document.getElementById("info-icon");

  // Tooltip + header elements
  const tooltip = document.getElementById("tooltip");
  const countryName = document.getElementById("country-name");
  const countryMessage = document.getElementById("country-message");

  // Store the initial header message so we can restore it later
  const defaultMessageHTML = countryMessage.innerHTML;

  // 👇 ADDED: track whether modal is open
  let modalOpen = false;

  // Helper to reset header
  function resetHeader() {
    countryName.innerText = "";
    countryMessage.innerHTML = defaultMessageHTML;
  }

  // Close modal function
  function closeModal() {
    modalOverlay.style.display = "none";
    modalOpen = false; // 👈 ADDED: mark modal closed
    resetHeader();
  }
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Select all paths in the SVG
  const allCountries = svgDoc.querySelectorAll("path");

  allCountries.forEach((country) => {
    const id = country.id;
    if (!countryData[id]) return;

    const { name, category } = countryData[id];
    const { label, color, message, detailedMessage } =
      categories[category] || categories["unknown"];

    // Format the message with the country name
    const formattedMessage = message.replace("[country name]", name);

    country.classList.add("hover-highlight");

    country.addEventListener("mouseenter", () => {
      country.style.fill = color;
      countryName.innerText = name;
      countryMessage.innerHTML = `
        ${formattedMessage}
        <br><strong>Click for more information</strong>`;
      tooltip.innerText = label;
      tooltip.style.opacity = "1";
      tooltip.style.display = "block";
    });

    country.addEventListener("mousemove", (e) => {
      tooltip.style.left = `${e.pageX - 50}px`;
      tooltip.style.top = `${e.pageY + 100}px`;
    });

    country.addEventListener("mouseleave", () => {
      country.style.fill = ""; // Reset to original

      // 👇 ADDED: only reset header if modal is not open
      if (!modalOpen) {
        resetHeader();
      }

      tooltip.style.opacity = "0";
      tooltip.style.display = "none";
    });

    country.addEventListener("click", () => {
      modalOpen = true; // 👈 ADDED: mark modal open
      modalBody.className = category;
      modalBody.innerHTML = `
        <h2>${name}</h2>
        <h3>${label}</h3>
        ${detailedMessage}
      `;
      modalOverlay.style.display = "flex";
    });

    infoIcon.addEventListener("click", () => {
      modalOpen = true; // 👈 ADDED: mark modal open
      modalBody.innerHTML = `${extendedDisclaimer}`;
      modalOverlay.style.display = "flex";
    });
  });
});
