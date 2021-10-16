document.addEventListener("DOMContentLoaded", function() {
  const page = {};

  page.workLink = document.querySelector('.work-link');
  page.workSection = document.getElementById('work');
  page.homeLink = document.querySelector('.home-link');
  page.introSection = document.getElementById('intro');
  page.rectangle = document.querySelector('.rectangle');

  page.moveRectangle = function(el) {
    
    let linkWidth = el.offsetWidth;
    let leftPosition = el.offsetLeft;

    document.documentElement.style.setProperty('--link-width', `${linkWidth}px`);
    document.documentElement.style.setProperty('--rectangle-left-pos', `${leftPosition}px`);

  }

  page.switchPages = function(linkEl) {

    linkEl.addEventListener('click', function(event) {
      
      event.preventDefault();

      page.moveRectangle(this);

      if (this.classList.contains('work-link')) {

        document.body.classList.add('unset-overflow');
        page.introSection.classList.remove('intro-visible');
        page.workSection.classList.add('work-visible');

      } else {

        document.body.classList.remove('unset-overflow');
        page.introSection.classList.add('intro-visible');
        page.workSection.classList.remove('work-visible');

      };
      
    });

  }

  page.switchPages(page.workLink);
  page.switchPages(page.homeLink);

});