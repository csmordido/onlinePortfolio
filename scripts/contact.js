const contact = {};

contact.nameInput = document.getElementById("name");
contact.emailInput = document.getElementById("email");
contact.messageInput = document.getElementById("message");
contact.formInputs = document.querySelectorAll("form input, form textarea");
contact.formSubmitBtn = document.getElementsByClassName("formBtn");
contact.classes = contact.formSubmitBtn[0].classList;
contact.tyMsg = document.querySelector(".tyMsg");
contact.inValid;

// script URL to link to the Google sheet
contact.scriptURL = "https://script.google.com/macros/s/AKfycbz5osV3SwJZLj74KMB5P9CzWMNl7KdFTVjDIN0anLv43eSbpnb4/exec";

contact.form = document.forms["submit-to-google-sheet"];

// event listener for form submit
contact.form.addEventListener("submit", e => {
  e.preventDefault()

  fetch(contact.scriptURL, { method: "POST", body: new FormData(contact.form)})
    // functions to execute if submission succeeds
    .then(response => {
      console.log("Success!", response);
      // insert p element to div.tyMsg
      contact.tyMsg.innerHTML = "<p>Thank you!</p>";
      // show div.tyMsg
      contact.tyMsg.style.display = "block";
      // hide it after 2 seconds
      setTimeout(function() {
        contact.tyMsg.style.display = "none";
      }, 2000);
    })
    // functions to execute if submission fails
    .catch(error => {
      console.error("Error!", error.message);

      contact.tyMsg.innerHTML = "<p>Something went wrong. Please try again.</p>";

      contact.tyMsg.style.display = "block";

      setTimeout(function() {
        contact.tyMsg.style.display = "none";
      }, 2000);
    });
  // resets form
  document.querySelector("form").reset();
  // disables submit button
  contact.formSubmitBtn[0].setAttribute("disabled", "");
  contact.classes.add("disabled");
});

// event listener for the name input on keyup
contact.nameInput.addEventListener("keyup", function() {
  contact.enableSubmit();

  const errorMessage = document.querySelector("#name + p");

  // if input is invalid or has no value
  if (!this.checkValidity() || !this.value.trim()) {
    // show error message
    errorMessage.style.visibility = "visible";
  } else {
    // hide error message
    errorMessage.style.visibility = "hidden";
  }
});

// event listener for the email input on keyup
contact.emailInput.addEventListener("keyup", function() {
  contact.enableSubmit();

  // regex pattern for a valid email
  const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const errorMessage = document.querySelector("#email + p");

  if (!this.checkValidity() || !validEmail.test(this.value)) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

// event listener for the textarea on keyup
contact.messageInput.addEventListener("keyup", function() {
  contact.enableSubmit();

  const errorMessage = document.querySelector("#message + p");
  
  if (!this.checkValidity() || !this.value.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

// function to check if inputs are valid and enable the submit button
contact.enableSubmit = function() {
  // loop through each form input and check for validity
  contact.formInputs.forEach( object => {
    // if false, update the contact.invalid variable to true
    if (!object.checkValidity()) {
      contact.inValid = true;
    // else, update the contact.invalid variable to false
    } else {
      contact.inValid = false;
    }
  });

  // if the value of contact.inValid variable is false, enable submit button
  if (!contact.inValid) {
    contact.formSubmitBtn[0].removeAttribute("disabled");
    contact.classes.remove("disabled");
  }
};