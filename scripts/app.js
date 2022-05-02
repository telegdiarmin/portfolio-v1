const dropdownContentElement = document.getElementById("app-dropdown-cont");
const dropdownTabElement = document.getElementById("app-dropdown");
const scrollmark = document.getElementById("scrollmark")
const aboutSection = document.getElementById("about")

function toggleDropdown() {
  dropdownContentElement.classList.toggle("dropdown-show");
}

function closeDropdown(event){
    if (dropdownTabElement.contains(event.target)) return;
    dropdownContentElement.classList.remove("dropdown-show")
    console.log("Dropdown is hidden!")
}

function jumpToAboutSection(event){
  aboutSection.scrollIntoView();
}

dropdownTabElement.addEventListener("click", toggleDropdown);
document.addEventListener("click", closeDropdown);
scrollmark.addEventListener("click", jumpToAboutSection)

