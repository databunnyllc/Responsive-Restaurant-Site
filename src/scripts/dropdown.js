
/** Getting the Elements */
const main_navigation_list = document.querySelector("#main-navigation ul");
const menuOption = document.querySelectorAll("#main-navigation li")[0];
const get_dropdown = document.querySelector(".dropdown-container");
/** Getting the mobile icon element */
const get_mobile_hamburger = document.querySelector("#hamburger-dropdown-icon");
// Created a new element that will replace the current menu 'li'
const newMenuEl = document.createElement("li");
newMenuEl.innerHTML = "Menu <i class='fas fa-chevron-up'>";
//Function for displaying the dropdown menu on click of first menu li
const display_dropdown = () => {
    get_dropdown.style.display = "block";
    get_dropdown.style.display = "flex";

    menuOption.parentNode.replaceChild(newMenuEl, menuOption);  // Replaced the current menu li with the newMenuEl li
}
menuOption.addEventListener("click", display_dropdown,false);
//Function for hiding the dropdown menu when the new li element is clicked
const hide_dropdown = () => {

    newMenuEl.parentNode.replaceChild(menuOption, newMenuEl);   // re-replaced the new li with the old one
    get_dropdown.style.display = "none";
}
newMenuEl.addEventListener("click", hide_dropdown, false);


/*** DISPLAYING AND CLOSING THE MOBILE DROPDOWN FROM MOBILE ICON *****************/
const newMobileEl = document.createElement("span");
newMobileEl.innerHTML = "<i class='fas fa-times' style='font-size: 70px;'></i>";

const display_mobile_dropdown = () => {
    get_dropdown.style.display = "block";
    get_dropdown.style.display = "flex";
    get_dropdown.style.flexWrap = "wrap";

    get_mobile_hamburger.parentNode.replaceChild(newMobileEl, get_mobile_hamburger);
}
get_mobile_hamburger.addEventListener("click", display_mobile_dropdown, false);

const hide_mobile_dropdown = () => {
    get_dropdown.style.display = "none";

    newMobileEl.parentNode.replaceChild(get_mobile_hamburger, newMobileEl);
}
newMobileEl.addEventListener("click", hide_mobile_dropdown, false);