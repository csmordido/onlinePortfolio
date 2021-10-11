document.addEventListener("DOMContentLoaded", function() {
  const app = {};
  
  app.changeTheme = function() {
    const darkBtn = document.querySelector('.dark');
    const lightBtn = document.querySelector('.light');
    const body = document.querySelector('body');

    function changeThemeOnClick(btn, txtColourVal) {
      
      btn.addEventListener('click', function() {
        document.documentElement.style.setProperty('--text-colour', txtColourVal);
        
        if (body.classList.contains('dark-theme') === false) {
          body.classList.add('dark-theme');
        } else {
          body.classList.remove('dark-theme');
        }
      
      });
    }
  
    changeThemeOnClick(darkBtn, '#d9cdf8');
    changeThemeOnClick(lightBtn, '#532cbf');
    
  }
  
  app.changeTheme();
});
