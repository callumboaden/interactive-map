
// Wait for the SVG object to load
document;
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
    svg path {  transition: fill 0.2s ease; cursor: pointer; }
  `;
  // Insert the style element at the beginning of the SVG document
  svgDoc.documentElement.insertBefore(
    styleEl,
    svgDoc.documentElement.firstChild
  );

  // Modal elements
  const modalOverlay = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body");
  const modalClose = document.getElementById("modal-close");

  // Info icon element
  const infoIcon = document.getElementById("info-icon");

  // Close modal function
  function closeModal() {
    modalOverlay.style.display = "none";
  }

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    // Close if click outside modal content
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Select the tooltip element
  const tooltip = document.getElementById("tooltip");
  // Select the country name span element
  const countryName = document.getElementById("country-name");
  const countryMessage = document.getElementById("country-message");

  // Select all paths with the "country" class
  const allCountries = svgDoc.querySelectorAll("path");

  // Add interactivity to each country path
  allCountries.forEach((country) => {
    const id = country.id;

    if (countryData[id]) {
      const { name, category } = countryData[id];
      const { label, color, message, detailedMessage } =
        categories[category] || categories["unknown"];

      // Replace placeholder with actual country name
      const formattedMessage = message.replace("[country name]", name);
      //const color = categoryColors[category];

      country.classList.add("hover-highlight");

      country.addEventListener("mouseenter", () => {
        country.style.fill = color;
        countryName.innerText = `${name}`;
        countryMessage.innerHTML = `
        ${formattedMessage}
          <p><strong>Click for more information</strong></p>`;

        tooltip.innerText = label;
        tooltip.style.opacity = "1";
        tooltip.style.display = "block";
      });

      country.addEventListener("mousemove", (e) => {
        tooltip.style.left = `${e.pageX - 50}px`;
        tooltip.style.top = `${e.pageY + 150}px`;
      });

      country.addEventListener("mouseleave", () => {
        country.style.fill = ""; // Reset to original

        tooltip.style.opacity = "0";
        tooltip.style.display = "none";
      });

      // New click event for modal pop-up with further information
      country.addEventListener("click", () => {
        // Populate modal content
        modalBody.classList = "";
        modalBody.classList.add(category);
        modalBody.innerHTML = `
          <h2>${name}</h2>
          <h3>${label}</h3>
          ${detailedMessage}
        `;
        // Display the modal (using flex here as defined in CSS)
        modalOverlay.style.display = "flex";
      });

      // New functionality: When the info icon is clicked, show extended disclaimer in the modal
      infoIcon.addEventListener("click", () => {
        // Load the extended disclaimer from data.js
        modalBody.innerHTML = `
      ${extendedDisclaimer}
    `;
        modalOverlay.style.display = "flex";
      });
    }
  });
});
