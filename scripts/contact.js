const scriptURL = 'https://script.google.com/macros/s/AKfycbz5osV3SwJZLj74KMB5P9CzWMNl7KdFTVjDIN0anLv43eSbpnb4/exec';

const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});