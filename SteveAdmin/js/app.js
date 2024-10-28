'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

var slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName('carousel-inner')[0].getElementsByTagName('img');
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[slideIndex].classList.add('active');
}

// Add event listeners for the buttons
document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});
  
document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});
