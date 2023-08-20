document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.tech-slider__slide');
    const previews = document.querySelectorAll('.tech-preview');
    const prevButton = document.querySelector('.js-prev-slide');
    const nextButton = document.querySelector('.js-next-slide');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach(slide => {
        slide.classList.remove('_active');
      });
      slides[index].classList.add('_active');
  
      previews.forEach(preview => {
        preview.classList.remove('_active');
      });
      previews[index].classList.add('_active');
  
      currentSlide = index;
    }
  
    function changeSlideByPreview(previewIndex) {
      showSlide(previewIndex);
    }
  
    prevButton.addEventListener('click', function() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  
    nextButton.addEventListener('click', function() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  
    previews.forEach((preview, index) => {
      preview.addEventListener('click', function() {
        changeSlideByPreview(index);
      });
    });
  
    // Начнем с первого слайда
    showSlide(0);
  });
  
  
  
  
  
  