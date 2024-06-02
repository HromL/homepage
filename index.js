"use strict";

const next = document.getElementById("btn-next"),
  prev = document.getElementById("btn-prev"),
  slides = document.querySelectorAll(".slide"),
  dots = document.querySelector(".dots-wrapper");

let index = 0;

let activeSlide = (n) => {
  for (let slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};
let activeDot = (n) => {
  for (let dot of dots.children) {
    dot.classList.remove("active");
  }
  dots.children[n].classList.add("active");
};

const currentSlide = (index) => {
  activeSlide(index);
  activeDot(index);
};

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    currentSlide(index);
  } else {
    index++;
    currentSlide(index);
  }
};

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    currentSlide(index);
  } else {
    index--;
    currentSlide(index);
  }
};

for (let i = 0; i < slides.length; i++) {
  let span = document.createElement("span");

  span.classList.add("dot");
  dots.appendChild(span);
}
console.log(dots.children);

for (let i = 0; i < dots.children.length; i++) {
  dots.children[i].addEventListener("click", () => {
    index = i;
    currentSlide(index);
  });
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);
