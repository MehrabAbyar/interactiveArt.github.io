




let menu = document.querySelector(".nav_items")
let menuBtn = document.querySelector(".header_icon")
let menuBtnIcon = document.querySelector(".header_icon i")

menuBtn.addEventListener("click", function () {
    if (menuBtnIcon.classList.contains("fa-bars")) {
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})

