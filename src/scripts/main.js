'use strict';

const previous = document.querySelector('.buttons__prev');
const next = document.querySelector('.buttons__next');
const slides = document.querySelectorAll('.slides__slide');
const dots = document.querySelectorAll('.dots__dot');

let index = 0;

const activeSlide = n => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[n].classList.add('active');
};

const activeDot = n => {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  dots[n].classList.add('active');
};

const prepareCurrentSlide = currentIndex => {
  activeSlide(currentIndex);
  activeDot(currentIndex);
};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};

const prevSlide = () => {
  if (index === 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};

next.addEventListener('click', nextSlide);
previous.addEventListener('click', prevSlide);
