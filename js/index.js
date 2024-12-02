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

    let currIdx = 0;

    function renderCarousel() {
        const slidesContainer = document.querySelector('.photo-carousel__slides');
        slidesContainer.innerHTML = slides[currIdx];}
    
        function nextSlide() {
            currIdx = currIdx + 1 >= slides.length ? 0 : currIdx + 1;
            renderCarousel();
        }
        
        function prevSlide() {
            currIdx = currIdx - 1 < 0 ? slides.length - 1 : currIdx - 1;
            renderCarousel();
        }
        
        renderCarousel();
        
        const btnNext = document.querySelector('.product-carousel__btn-next');
        btnNext.addEventListener('click', nextSlide);
        
        const btnPrev = document.querySelector('.product-carousel__btn-prev');
        btnPrev.addEventListener('click', prevSlide);
        
        window.addEventListener('resize', renderCarousel);
