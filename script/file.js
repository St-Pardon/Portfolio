const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".fa-bars");
const links = document.getElementsByClassName("links");

hamburger.addEventListener("click", () => {
    nav.classList.remove("close");
    nav.classList.toggle("open");
    console.log("opened")
});
links[0].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    console.log("closed")
};
links[1].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    console.log("closed")
};