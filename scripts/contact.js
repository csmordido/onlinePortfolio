const contact = {};

contact.nameInput = document.getElementById("name");
contact.emailInput = document.getElementById("email");
contact.messageInput = document.getElementById("message");
contact.formInputs = document.querySelectorAll("form input, form textarea");
contact.inValid;

contact.scriptURL = "https://script.google.com/macros/s/AKfycbz5osV3SwJZLj74KMB5P9CzWMNl7KdFTVjDIN0anLv43eSbpnb4/exec";

contact.form = document.forms["submit-to-google-sheet"];

contact.form.addEventListener("submit", e => {
  e.preventDefault()

  fetch(contact.scriptURL, { method: "POST", body: new FormData(contact.form)})
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
});

contact.nameInput.addEventListener("keyup", function() {
  contact.enableSubmit();
  const errorMessage = document.querySelector("#name + p");
  if (!this.checkValidity() || !this.value.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

contact.emailInput.addEventListener("keyup", function() {
  contact.enableSubmit();
  const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorMessage = document.querySelector("#email + p");
  if (!this.checkValidity() || !validEmail.test(this.value)) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

contact.messageInput.addEventListener("keyup", function() {
  contact.enableSubmit();
  const errorMessage = document.querySelector("#message + p");
  if (!this.checkValidity() || !this.value.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

contact.enableSubmit = function() {
  const formSubmitBtn = document.getElementsByClassName("formBtn");
  const classes = formSubmitBtn[0].classList;

  contact.formInputs.forEach( object => {
    if (!object.checkValidity()) {
      contact.inValid = true;
    } else {
      contact.inValid = false;
    }
  });

  if (!contact.inValid) {
    formSubmitBtn[0].removeAttribute("disabled");
    classes.remove("disabled");
  }
};

