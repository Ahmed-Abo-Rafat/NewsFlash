// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) {
        return element;
    }else {
        return `Error In your Selector(${selector}) Please Check your Slector`;
    }
}

//Nav styles on scroll

// Open menu & search pop-up
const menuToggleIcon = selectElement("#menue-toggle-icon");
const mobileMenu = selectElement("#menu");

menuToggleIcon.onclick = function(){
    menuToggleIcon.classList.toggle("activated");
    mobileMenu.classList.toggle("activated");
}

// Open/Close search form popup
const openSearchIcon = selectElement("#search-icon");
const closeSearchIcon = selectElement("#form-close-btn");
const searchContainer = selectElement("#search-form-container");

openSearchIcon.onclick = function() {
    searchContainer.classList.add("activated");
}

closeSearchIcon.onclick = function() {
    searchContainer.classList.remove("activated");
}

// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key == 'Escape'){
        searchContainer.classList.remove("activated");
    }
})

// Switch theme/add to local storage
const bodyElement = document.body;
const themToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = window.localStorage.getItem('currentTheme');

if(currentTheme) {
    bodyElement.classList.add('light-theme');
}

themToggleBtn.onclick = function () {
    bodyElement.classList.toggle("light-theme");

    if(bodyElement.classList.contains('light-theme')){
        window.localStorage.setItem('currentTheme', 'themeActive');
        console.log("Yes");
    }else {
        window.localStorage.removeItem('currentTheme');
        console.log("No");
    }
}

// Swiper
const swiper = new Swiper(".swiper", {

    //How many slides to show
    slidesPerView: 1,

    //How many much space between slides
    spaceBetween: 20,

    //Make the next and previous work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },

    //responsive breakpoints for how many slides to show in screen
    breakpoints: {

        // 700px and up slides show two cards
        700: {
            slidesPerView: 2
        },

        // 1200px and up slides show three cards
        1200: {
            slidesPerView: 3
        }

    }
  
});