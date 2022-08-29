// cament

var elSiteheaderToggleBtn = document.querySelector(".fruit__button");
var elman = document.querySelector(".btnm");
var elHeader = document.querySelector(".btn");
var elpaq = document.querySelector(".btn-twoo");
var ellist = document.querySelector(".list");
var elgrid = document.querySelector(".grid");

elman.addEventListener("click", () => {
  elgrid.classList.remove("grid--active");
  ellist.classList.add("list--active");
});

elHeader.addEventListener("click", () => {
  ellist.classList.remove("list--active");
  elgrid.classList.add("grid--active");
});

elSiteheaderToggleBtn.addEventListener("click", function () {
  elHeader.classList.toggle("botton-color");
  elpaq.classList.remove("botton-color");
});
elman.addEventListener("click", function () {
  elpaq.classList.toggle("botton-color");
  elHeader.classList.remove("botton-color");
});

window.onload = function () {
  slideOne();
  slideTwo();
};
let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;
function slideOne() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.textContent = sliderOne.value;
  fillColor();
}
function slideTwo() {
  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.textContent = sliderTwo.value;
  fillColor();
}
// function fillColor(){
//   percent1 = (sliderOne.value / sliderMaxValue) * 100;
//   percent2 = (sliderTwo.value / sliderMaxValue) * 100;
//   sliderTrack.style.background = linear-gradient(to right, #dadae5 ${percent1}% , #6A983C ${percent1}% , #6A983C ${percent2}%, #dadae5 ${percent2}%);
// }

// Comment
