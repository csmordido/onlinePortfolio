document.addEventListener("DOMContentLoaded", function() {
  const app = {};

  app.workLink = document.querySelector('.work-link');
  app.workSection = document.getElementById('work');
  app.homeLink = document.querySelector('.home-link');
  app.introSection = document.getElementById('intro');
  app.rectangle = document.querySelector('.rectangle');
  app.title = document.querySelector('title');

  app.moveRectangle = function(el) {
    
    let linkWidth = el.offsetWidth;
    let leftPosition = el.offsetLeft;

    document.documentElement.style.setProperty('--link-width', `${linkWidth}px`);
    document.documentElement.style.setProperty('--rectangle-left-pos', `${leftPosition}px`);

  }

  app.toggleLinkTabbing = function(containerToEnableLinks, containerToDisableLinks) {
    
    const enabledlinks = containerToEnableLinks.querySelectorAll('a');

    enabledlinks.forEach( link => {
      link.tabIndex = '0';
    });

    const disabledLinks = containerToDisableLinks.querySelectorAll('a');

    disabledLinks.forEach( link => {
      link.tabIndex = '-1';
    });

  }

  app.switchPages = function(linkEl) {

    linkEl.addEventListener('click', function(event) {
      
      event.preventDefault();

      app.moveRectangle(this);

      if (this.classList.contains('work-link')) {

        document.body.classList.add('unset-overflow');
        app.introSection.classList.remove('intro-visible');
        app.workSection.classList.add('work-visible');
        app.title.innerText = 'Eyel Mordido - Work';
        app.toggleLinkTabbing(app.workSection, app.introSection);

      } else {

        document.body.classList.remove('unset-overflow');
        app.workSection.classList.remove('work-visible');
        app.introSection.classList.add('intro-visible');
        app.title.innerText = 'Eyel Mordido - Home';
        app.toggleLinkTabbing(app.introSection, app.workSection);

      };
      
    });

  }

  // app.switchPagesOnKeyDown = function() {
  //   document.addEventListener('keydown', function(event) {
  //     let isIntroPage = app.introSection.classList.contains('intro-visible');

  //     if ( isIntroPage &&  event.code === 'ArrowRight' ) {
        
  //       app.moveRectangle(app.workLink);
  //       document.body.classList.add('unset-overflow');
  //       app.introSection.classList.remove('intro-visible');
  //       app.workSection.classList.add('work-visible');
  //       app.toggleLinkTabbing(app.workSection, app.introSection);

  //     }

  //     if ( !isIntroPage &&  event.code === 'ArrowLeft' ) {
        
  //       app.moveRectangle(app.homeLink);
  //       document.body.classList.remove('unset-overflow');
  //       app.workSection.classList.remove('work-visible');
  //       app.introSection.classList.add('intro-visible');
  //       app.toggleLinkTabbing(app.introSection, app.workSection);

  //     }

  //   });
  // }

  app.switchPages(app.workLink);
  app.switchPages(app.homeLink);
  // app.switchPagesOnKeyDown();

});