document.addEventListener('DOMContentLoaded', function () {
  const navbarHTML = `
    <nav id="navbar" class="navbar">
      <img class="website-logo" src="src/ic_website logo.svg" alt="website-logo"/>
      <div class="navbarMenuIconDiv">
        <a><img class="navbarCloseMenu" src="src/ic_close navbar menu.svg"/></a>
        <a><img class="navbarOpenMenu" src="src/ic_navbar menu.svg"/></a> 
      </div>
      <ul class="navbarLabel"> 
        <li><a href="index.html" data-page="aboutme">About Me</a></li>
        <li><a href="work.html" data-page="work">Work</a></li> 
      </ul>
      <ul class="navbarMenu">
        <li><a href="index.html" data-page="aboutme">About Me</a></li>
        <li><a href="work.html" data-page="work">Work</a></li> 
        <li><a href="frontEnd.html" data-page="frontend">Front End Development</a></li>
        <li><a href="igxPlatform.html" data-page="enpicom">IGX Platform</a></li>
        <li><a href="sciaEngineer.html" data-page="scia">SCIA Engineer</a></li>
        <li><a href="breathingApp.html" data-page="somnox">Breathing App</a></li>
      </ul>
    </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
  
  //define the action of open the navbar menu
  const menuOpenIcon = document.querySelector('.navbarOpenMenu');
  const menuCloseIcon = document.querySelector('.navbarCloseMenu');
  const menu = document.querySelector('.navbarMenu');

  function toggleMenu() {
    menu.classList.toggle('show-menu');
    menuOpenIcon.style.display = menu.classList.contains('show-menu') ? 'none' : 'block';
    menuCloseIcon.style.display = menu.classList.contains('show-menu') ? 'block' : 'none';
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }

  menuOpenIcon.addEventListener('click', toggleMenu);
  menuCloseIcon.addEventListener('click', toggleMenu);

  // Set active page
  const currentPage = document.body.id;
  const navItems = document.querySelectorAll('.navbarLabel li a, .navbarMenu li a');
  navItems.forEach(item => {
    if (item.getAttribute('data-page') === currentPage) {
      item.parentElement.classList.add('ActivePage');
    }
  });
});



