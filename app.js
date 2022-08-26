const darkModeToggle = document.querySelector('#checkbox-btn');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('darkmode')
});
