const app = {};

app.changeTheme = function() {
  const darkBtn = document.querySelector('.dark');
  const lightBtn = document.querySelector('.light');

  function changeThemeOnClick(btn, bgColourVal, txtColourVal) {
    
    btn.addEventListener('click', function() {
      let bgColour = getComputedStyle(document.documentElement).getPropertyValue('--bg-colour');
      document.documentElement.style.setProperty('--bg-colour', bgColourVal);
      document.documentElement.style.setProperty('--text-colour', txtColourVal);
      
      if (bgColour === '#d9cdf8') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }

  changeThemeOnClick(darkBtn, '#351d7b', '#a68af5');
  changeThemeOnClick(lightBtn, '#d9cdf8', '#532cbf');
  
}

app.changeTheme();
