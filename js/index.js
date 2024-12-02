const slides = [
    `<div class="photo-carousel__slide">
        <img
        src="img/slide1.webp" class="photo-carousel__picture"
        alt="Microphone in the light-pink background"
    />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/slide2.webp" class="photo-carousel__picture"
        alt="One blue chair around gray"
        />
    </div>`,
    `<div class="photo-carousel__slide">
        <img
        src="img/slide3.webp" class="photo-carousel__picture"
        alt="The lecturer speaks to the audience"
        />
    </div>`,
    ]

   // HTML structure:
// <div class="carousel">
//   <div class="slides">
//     <div class="slide">Slide 1</div>
//     <div class="slide">Slide 2</div>
//     <div class="slide">Slide 3</div>
//     <!-- Add more slides as needed -->
//   </div>
// </div>

// CSS should ensure that only one slide is visible at a time.
// Example:
// .carousel { overflow: hidden; width: 100%; position: relative; }
// .slides { display: flex; transition: transform 0.5s ease-in-out; }
// .slide { min-width: 100%; box-sizing: border-box; }

const carousel = document.querySelector('.carousel');
const slidesContainer = carousel.querySelector('.slides');
const slides = carousel.querySelectorAll('.slide');

let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 5000; // 5 seconds

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
  const offset = -currentIndex * 100; // Assuming each slide is 100% of the container's width
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Start the automatic sliding
setInterval(nextSlide, slideInterval);

// Optional: Add event listeners for manual control (if needed)
// Example:
// const nextButton = document.querySelector('.next');
// const prevButton = document.querySelector('.prev');

// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateCarousel();
// });

// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateCarousel();
// });

        window.addEventListener('resize', renderCarousel);
