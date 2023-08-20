document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.js-scroll-link');
    const header = document.querySelector('.js-header-menu');
  
    function highlightMenuItem() {
      let currentSection = null;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.clientHeight;
  
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section;
        }
      });
  
      if (currentSection) {
        menuLinks.forEach(link => {
          link.classList.remove('_active');
          if (link.getAttribute('href') === `#${currentSection.id}`) {
            link.classList.add('_active');
          }
        });
      }
    }
  
    window.addEventListener('scroll', highlightMenuItem);
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetSectionId = link.getAttribute('href');
          const targetSection = document.querySelector(targetSectionId);
  
          if (targetSection) {
            
            let offsetTop;
        if (window.innerWidth < 768) {
            offsetTop = targetSection.offsetTop - 64;
        } else {
            offsetTop = targetSection.offsetTop - 90;
        }
              
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
            header.classList.remove('_opened');
        }
      });
    });
  });