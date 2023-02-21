document.querySelector(".search-icon").addEventListener('click', () => {
    document.querySelector(".search-input").classList.toggle("active");
})

document.querySelector(".menu-icon").addEventListener("click", () => {
    document.querySelector(".panel").classList.toggle("show-menu");
    document.querySelector(".menu").classList.toggle("active");
})