const dropdownContentElement = document.getElementById("app-dropdown-cont");
const dropdownTabElement = document.getElementById("app-dropdown");

function toggleDropdown() {
  dropdownContentElement.classList.toggle("dropdown-show");
}

function closeDropdown(event){
    if (dropdownTabElement.contains(event.target)) return;
    dropdownContentElement.classList.remove("dropdown-show")
    console.log("Dropdown is hidden!")
}

dropdownTabElement.addEventListener("click", toggleDropdown);
document.addEventListener("click", closeDropdown)
