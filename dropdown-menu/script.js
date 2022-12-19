const dropdownArrow = document.getElementById("dropdown-arrow");
const dropdownSection = document.getElementById("dropdown-section");
const dropdownButtonDiv = document.getElementById("dropdown-btn-div");

function toggleDropdownDisplay() {
  if (dropdownSection.classList.contains("hidden")) {
    dropdownSection.classList.remove("hidden");
    dropdownButtonDiv.classList.add("dropdown-btn-div-js");
  } else {
    dropdownSection.classList.add("hidden");
    dropdownButtonDiv.classList.remove("dropdown-btn-div-js");
  }
}

dropdownArrow.addEventListener("click", () => {
  toggleDropdownDisplay();
});

document.body.addEventListener("click", (e) => {
  if (
    !dropdownSection.classList.contains("hidden") &&
    e.target.id != "dropdown-section" &&
    e.target.id != "dropdown-item" &&
    e.target.id != "dropdown-btn-div" &&
    e.target.id != "dropdown-btn" &&
    e.target.id != "dropdown-arrow"
  ) {
    toggleDropdownDisplay();
  }
});
