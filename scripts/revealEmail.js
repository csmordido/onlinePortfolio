document.addEventListener("DOMContentLoaded", function() {
  const email = {};

  email.emailDetails = document.querySelector('.email-details');
  email.emailLink = document.querySelector('.email-container a');

  email.revealEmail = function() {

    email.emailLink.addEventListener('click', function(event) {

      event.preventDefault();
      email.emailDetails.classList.toggle('email-open');

    });

  };

  email.revealEmail();

});