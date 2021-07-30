const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".fa-bars");
const links = document.getElementsByClassName("links");
const header = document.querySelector(".header")

hamburger.addEventListener("click", () => {
    nav.classList.remove("close");
    nav.classList.toggle("open");
    header.classList.remove("collapse")
    console.log("opened")
});
links[0].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    header.classList.toggle("collapse")
    console.log("closed")
};
links[1].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    header.classList.toggle("collapse")
    console.log("closed")
}; 