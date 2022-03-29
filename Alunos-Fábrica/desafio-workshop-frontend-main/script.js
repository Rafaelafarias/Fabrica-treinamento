// ==========SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ==========MODAL
var modal = document.querySelector(".modal");

// Get the image and insert it inside the modal
var img1 = document.querySelector("#myImg1");
var img2 = document.querySelector("#myImg2");
var img3 = document.querySelector("#myImg3");
var img4 = document.querySelector("#myImg4");
var img5 = document.querySelector("#myImg5");
var img6 = document.querySelector("#myImg6");
var img7 = document.querySelector("#myImg7");
var img8 = document.querySelector("#myImg8");
var img9 = document.querySelector("#myImg9");
var img10 = document.querySelector("#myImg10");
var img11 = document.querySelector("#myImg11");
var img12 = document.querySelector("#myImg12");
var modalImg = document.querySelector(".modal-content");

img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img4.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img5.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img6.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img7.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img8.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img9.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img10.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};
img11.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

img12.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
