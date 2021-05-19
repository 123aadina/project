// for the home page less and more reading buttun
let btn = document.querySelector(".mycustombtn").addEventListener("click", showMoreText);
let dots = document.querySelector(".dots");
let moreText = document.querySelector(".more");

function showMoreText() {
  btn = document.querySelector(".mycustombtn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }; 
};












/* 

let btn = document.getElementById("showmore").addEventListener("click", showMoreText);
let dots = document.getElementById("dots");
let moreText = document.getElementById("more");

function showMoreText() {
  btn = document.getElementById("showmore");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Show more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Show less"; 
    moreText.style.display = "inline";
  }; 
}; */