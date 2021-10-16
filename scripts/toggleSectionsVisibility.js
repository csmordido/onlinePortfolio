document.addEventListener("DOMContentLoaded", function() {
  const page = {};

  page.workLink = document.querySelector('.work-link');
  page.workSection = document.getElementById('work');
  page.homeLink = document.querySelector('.home-link');
  page.introSection = document.getElementById('intro');

  page.switchPages = function(linkEl) {

    linkEl.addEventListener('click', function(event) {
  
      event.preventDefault();

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