document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.js-header');
    const pages = document.querySelector('.js-pages');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        header.classList.add('_scrolled');
        pages.classList.add('_scrolled');
      } else {
        header.classList.remove('_scrolled');
        pages.classList.remove('_scrolled');
      }
    });
  
    const headerMenu = document.querySelector('.js-header-menu');
    const burgerButton = document.querySelector('.js-menu-burger');
  
    burgerButton.addEventListener('click', () => {
      burgerButton.classList.toggle('_active');
      headerMenu.classList.toggle('_opened');
    });
  });