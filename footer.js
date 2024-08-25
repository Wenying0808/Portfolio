document.addEventListener('DOMContentLoaded', function () {
    const footerHTML = `
      <footer class="social-section">
        <a href="https://www.linkedin.com/in/wen-ying-chang-b5539a165" target="_blank"><img src="src/ic_social_linkdein.svg" alt="linkedin"/></a>
        <a href="https://github.com/Wenying0808" target="_blank"><img src="src/ic_social_github.svg" alt="github"/></a>
        <a href="https://changwenyingnl.medium.com/" target="_blank"><img src="src/ic_social_medium.svg" alt="medium"/></a>
        <a href="mailto:changwenyingnl@gmail.com" target="_blank"><img src="src/ic_social_email.svg" alt="email"></a>
      </footer>
    `;
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = footerHTML;
    }
  });