const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (this.window.pageYOffset > 0) return navbar.classList.add('active');
  return navbar.classList.remove('active');
});


(() => {
  if (!localStorage.pureJavaScriptCookies) {
      document.querySelector(".box-cookies").classList.remove('hide');
  }

  const acceptCookies = () => {
      document.querySelector(".box-cookies").classList.add('hide');
      localStorage.setItem("pureJavaScriptCookies", "accept");
  };

  const btnCookies = document.querySelector(".btn-cookies");

  btnCookies.addEventListener('click', acceptCookies);
})();