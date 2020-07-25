const contact = {};

contact.nameInput = document.getElementById("name");
contact.emailInput = document.getElementById("email");
contact.messageInput = document.getElementById("message");

contact.scriptURL = "https://script.google.com/macros/s/AKfycbz5osV3SwJZLj74KMB5P9CzWMNl7KdFTVjDIN0anLv43eSbpnb4/exec";

contact.form = document.forms["submit-to-google-sheet"];

contact.form.addEventListener("submit", e => {
  e.preventDefault()
  fetch(scriptURL, { method: "POST", body: new FormData(contact.form)})
    .then(response => console.log("Success!", response))
    .catch(error => console.error("Error!", error.message));
});

contact.validate = (input, errorMessage) => {
  if (!input.checkValidity()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
}

contact.nameInput.addEventListener("change", () => {
  const errorMessage = document.querySelector("#name + p");
  contact.validate(contact.nameInput, errorMessage);
});

contact.validateEmail = () => {
  // const emailInputValue = document.getElementById("email").value;
  // const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorMessage = document.querySelector("#email + p");
  contact.validate(contact.emailInput, errorMessage);
};

contact.validateMessage = () => {
  const textInputValue = document.getElementById("message").value;
  const errorMessage = document.querySelector("#message + p");
  if (!textInputValue.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
};


// contact.validateName();
// contact.validateEmail();
// contact.validateMessage();
