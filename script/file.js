
const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".fa-bars");
const links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    console.log("opened")
});
links.addEventListener("click", () => {
    nav.classList.toggle("close");
    console.log("closed")
});
