const berger = document.getElementById("burger");
const berger2 = document.getElementById("burger2");
const header = document.querySelector("header");

function summ() {
  header.classList.toggle("open");
  berger.classList.toggle("tagg");
  berger2.classList.toggle("tagger");
}

document.addEventListener("DOMContentLoaded", function () {
  berger.addEventListener("click", summ);
  berger2.addEventListener("click", summ);
});
