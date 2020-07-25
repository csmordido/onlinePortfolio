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

// contact.form.addEventListener("input", (event) => {
//   // this = event.target;
//   console.log(event.target.value);
//   // const validity = this.checkValidity();
  
// });

// contact.validate = (input, errorMessage) => {
//   if (!input.checkValidity() || !input.value) {
//     errorMessage.style.visibility = "visible";
//   } else {
//     errorMessage.style.visibility = "hidden";
//   }
// }

contact.nameInput.addEventListener("input", () => {
  const errorMessage = document.querySelector("#name + p");
  if (!contact.nameInput.checkValidity() || !contact.nameInput.value.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

contact.emailInput.addEventListener("input", () => {
  // const emailInputValue = document.getElementById("email").value;
  const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorMessage = document.querySelector("#email + p");
  if (!contact.emailInput.checkValidity() || !validEmail.test(contact.emailInput.value)) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});

contact.messageInput.addEventListener("input", () => {
  const errorMessage = document.querySelector("#message + p");
  if (!contact.messageInput.checkValidity() || !contact.messageInput.value.trim()) {
    errorMessage.style.visibility = "visible";
  } else {
    errorMessage.style.visibility = "hidden";
  }
});


// contact.validateName();
// contact.validateEmail();
// contact.validateMessage();
