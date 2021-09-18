const logoQuery = document.querySelector('.logo');
const hamburgerQuery = document.querySelector('.hamburger');
const navQuery = document.querySelector('nav');

hamburgerQuery.addEventListener('click', () => {
  logoQuery.classList.toggle('big');
  navQuery.classList.toggle('visible');
});