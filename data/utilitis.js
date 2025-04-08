let slideIndex = 0;
const maxIndex = 3;
const x = document.getElementsByClassName("slider-heading");
const z = document.getElementById("slider-image");
const y = document.getElementsByClassName("slider-dot");

let carouselInterval = null;

function showSlide(index) {
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    z.children[i].style.display = "none";
    y[i].firstElementChild.style.display = "none";
    y[i].lastElementChild.style.display = "block";
  }

  x[index].style.display = "block";
  z.children[index].style.display = "block";
  y[index].lastElementChild.style.display = "none";
  y[index].firstElementChild.style.display = "block";
}

function startCarousel() {
  carouselInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % maxIndex;
    showSlide(slideIndex);
  }, 3000);
}

function resetCarousel() {
  clearInterval(carouselInterval);
  startCarousel();
}

function moveSlide(num) {
  clearInterval(carouselInterval);
  slideIndex = num - 1;
  showSlide(slideIndex);
  startCarousel();
}

startCarousel();
