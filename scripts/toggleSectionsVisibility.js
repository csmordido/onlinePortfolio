document.addEventListener("DOMContentLoaded", function() {
  const page = {};

  page.workLink = document.querySelector('.work-link');
  page.workSection = document.getElementById('work');
  page.introSection = document.getElementById('intro');
  
  page.workLink.addEventListener('click', function(event) {
    event.preventDefault();
    page.workSection.classList.remove('work-hidden');
    page.introSection.classList.add('intro-hidden');
    
  });

});