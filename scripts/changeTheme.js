document.addEventListener("DOMContentLoaded", function() {
  const app = {};
  
  app.changeTheme = function() {
    const darkBtn = document.querySelector('.dark');
    const lightBtn = document.querySelector('.light');
    const body = document.body;

    function changeThemeOnClick(btn, txtColourVal) {
      
      btn.addEventListener('click', function() {
        document.documentElement.style.setProperty('--text-colour', txtColourVal);
        console.log(this);

        
        if (body.classList.contains('dark-theme') === false) {
          body.classList.add('dark-theme');
          darkBtn.setAttribute("disabled", true);
          lightBtn.removeAttribute("disabled");

        } else {
          body.classList.remove('dark-theme');
          lightBtn.setAttribute("disabled", true);
          darkBtn.removeAttribute("disabled");

        }
      
      });
    }
  
    changeThemeOnClick(darkBtn, '#d9cdf8');
    changeThemeOnClick(lightBtn, '#532cbf');
    
  }
  
  app.changeTheme();
});
