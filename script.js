// script.js
const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentIndex = 0;
const totalSlides = document.querySelectorAll(".slider img").length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  }
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex++;
  showSlide(currentIndex);
}, 5000); // Ganti gambar setiap 5 detik
