const body = document.getElementById("body");

const mobileMenuBtn = document.getElementById("mobile-menu-btn");

const exitIcon = document.createElement("i");
exitIcon.classList.add("fa-regular");
exitIcon.classList.add("fa-circle-xmark");
exitIcon.setAttribute("id", "exit-btn");

const dropdownSection = document.querySelector(".mobile-menu-section");

function dropDownToggle(e) {
  if (e === "border-line" || e === "mobile-menu-btn") {
    dropdownSection.classList.remove("hidden");
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");

    header.insertBefore(exitIcon, logo);
    mobileMenuBtn.classList.add("hide-dropdown-btn");
  } else if (e === "exit-btn") {
    // const dropdownSection = document.querySelector(".mobile-menu-section");
    dropdownSection.classList.add("hidden");
    mobileMenuBtn.classList.remove("hide-dropdown-btn");
    exitIcon.remove();
  }
}

document.body.addEventListener("click", (e) => {
  if (
    e.target.id === "border-line" ||
    e.target.id === "exit-btn" ||
    e.target.id === "mobile-menu-btn"
  ) {
    dropDownToggle(e.target.id);
  }
});

// function createExitBtn() {
//   const header = document.getElementById("header");
//   const logo = document.getElementById("logo");

//   header.insertBefore(exitIcon, logo);
// }
