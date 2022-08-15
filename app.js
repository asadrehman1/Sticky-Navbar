const navbar = document.querySelector(".navbar");
const text = document.querySelector(".text");

window.addEventListener("scroll", () => {
    if (window.scrollY > text.offsetTop - navbar.offsetHeight - 16) {
        navbar.classList.add("color")
    }
    else {
        navbar.classList.remove("color")
    }
})

