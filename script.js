const toggle = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  this.classList.toggle('bi-sun');
  if (body.classList.contains('#toggleLight')) {
    toggle.textContent = 'Switch to Light Mode';
  } else {
    toggle.textContent = 'Switch to Dark Mode';
  }
});