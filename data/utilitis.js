var slideIndex = 0;
const maxIndex = 3;
const x = document.getElementsByClassName("slider-heading");
const z = document.getElementById("slider-image");
const y = document.getElementsByClassName("slider-dot");
carousel();
function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    z.children[i].style.display = "none";
    y[i].firstElementChild.style.display = "none";
    y[i].lastElementChild.style.display = "block";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  z.children[slideIndex-1].style.display = "block";
  y[slideIndex-1].lastElementChild.style.display = "none";
  y[slideIndex-1].firstElementChild.style.display = "block"
  setTimeout(carousel, 3000); 
}

function moveSlide(num) {
    for (i = 0; i < maxIndex; i++) {
        x[i].style.display = "none";
        z.children[i].style.display = "none";
        y[i].firstElementChild.style.display = "none";
        y[i].lastElementChild.style.display = "block";
    }
    x[num-1].style.display = "block";
    z.children[num-1].style.display = "block";
    y[slideIndex-1].lastElementChild.style.display = "block";
    y[slideIndex-1].firstElementChild.style.display = "none";
    y[num-1].lastElementChild.style.display = "none";
    y[num-1].firstElementChild.style.display = "block";
    slideIndex = num;
}


