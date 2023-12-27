  
  document.addEventListener('DOMContentLoaded', function () {

    //load nav bar
    /*fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('body').insertAdjacentHTML('afterbegin', data);})*/

    //define the action of open the navbar menu
    const menuIcon = document.querySelector('.navbarOpenMenu');
    const menu = document.querySelector('.navbarMenu');
  
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('show-menu');
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });

   
  });



