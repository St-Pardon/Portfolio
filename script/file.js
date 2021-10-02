const nav = document.querySelector(".navbar");
const hamburger = document.querySelector(".fa-bars");
const links = document.getElementsByClassName("links");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
    nav.classList.remove("close");
    nav.classList.toggle("open");
    header.classList.remove("collapse");
});
links[0].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    header.classList.toggle("collapse");
};
links[1].onclick = () => {
    nav.classList.remove("open");
    nav.classList.toggle("close");
    header.classList.toggle("collapse");
}; 


// for form handling

const forms = document.getElementById("forms");
const btn = document.getElementById("open-form");
const span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  forms.style.display = "block";
}


span.onclick = function() {
  forms.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == forms) {
    forms.style.display = "none";
  }
}