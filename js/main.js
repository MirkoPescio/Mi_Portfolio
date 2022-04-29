/*================================= Cambiar backgrond header =================================*/

function scrollHeader() {
    const header = document.getElementById("header");

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
}

window.addEventListener("scroll", scrollHeader);

/* ====================================== Services Modal ============================================= */

const modalViews = document.querySelectorAll(".services__modal"),
      modalBtns = document.querySelectorAll(".services__button"),
      modalClose = document.querySelectorAll(".services__modal-close")

let modal = (modalClick) => {
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", () => {
        modal(i);
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener("click", () => {
        modalViews.forEach((mv) => {
            mv.classList.remove("active-modal");
        })
    })
})

/* =================================== Mixitup filter portfolio ======================================= */

let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */

const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
    linkWork.forEach(l => l.classList.remove("active-work"))
    this.classList.add("active-work")
}

linkWork.forEach(l => l.addEventListener("click", activeWork))

/* =================================== Light Dark Theme ======================================== */

const themeButton = document.getElementById("theme-button")
const lightTheme = "light-theme"
const iconTheme = "bx-sun"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun"

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](lightTheme)
    themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})
