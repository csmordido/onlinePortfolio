const contact = {};

contact.nameInput = document.getElementById("name");
contact.emailInput = document.getElementById("email");
contact.messageInput = document.getElementById("message");
contact.formInputs = document.querySelectorAll("form input, form textarea");
contact.formSubmitBtn = document.getElementsByClassName("formBtn");
contact.classes = contact.formSubmitBtn[0].classList;
contact.tyMsg = document.querySelector(".tyMsg");
contact.inValid;

contact.scriptURL = "https://script.google.com/macros/s/AKfycbz5osV3SwJZLj74KMB5P9CzWMNl7KdFTVjDIN0anLv43eSbpnb4/exec";

contact.form = document.forms["submit-to-google-sheet"];

contact.form.addEventListener("submit", e => {
  e.preventDefault()

  fetch(contact.scriptURL, { method: "POST", body: new FormData(contact.form)})
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
  
  contact.tyMsg.style.display = "block";

  setTimeout(function() {
    contact.tyMsg.style.display = "none";
  }, 2000);

  document.querySelector("form").reset();
  contact.formSubmitBtn[0].setAttribute("disabled", "");
  contact.classes.add("disabled");
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
  contact.formInputs.forEach( object => {
    if (!object.checkValidity()) {
      contact.inValid = true;
    } else {
      contact.inValid = false;
    }
  });

  if (!contact.inValid) {
    contact.formSubmitBtn[0].removeAttribute("disabled");
    contact.classes.remove("disabled");
  }
};

