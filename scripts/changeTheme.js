document.addEventListener("DOMContentLoaded", function() {
  const app = {};
  
  app.changeTheme = function() {
    const darkBtn = document.querySelector('.dark');
    const lightBtn = document.querySelector('.light');
    const body = document.querySelector('body');

    function changeThemeOnClick(btn, txtColourVal) {
      
      btn.addEventListener('click', function() {
        // document.documentElement.style.setProperty('--bg-colour', bgColourVal);
        document.documentElement.style.setProperty('--text-colour', txtColourVal);

        // let bgColour = getComputedStyle(document.documentElement).getPropertyValue('--bg-colour');
        
        if (body.classList.contains('dark-theme') === false) {
          body.classList.add('dark-theme');
        } else {
          body.classList.remove('dark-theme');
        }
      
      });
    }
  
    changeThemeOnClick(darkBtn, '#a68af5');
    changeThemeOnClick(lightBtn, '#532cbf');
    
  }
  
  app.changeTheme();
});
