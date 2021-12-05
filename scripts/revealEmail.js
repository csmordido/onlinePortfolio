document.addEventListener("DOMContentLoaded", function() {
  const app = {};

  app.emailDetails = document.querySelector('.email-details');
  app.emailLink = document.querySelector('.email-container a');

  app.revealEmail = function() {

    app.emailLink.addEventListener('click', function(event) {

      event.preventDefault();
      app.emailDetails.classList.toggle('email-open');

    });

  };

  app.revealEmail();

});