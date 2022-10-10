let elHeader = document.querySelector(".site-header")
let elHamburger = document.querySelector(".site-header__button")

elHamburger.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--active")
})