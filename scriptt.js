const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click', function() {
  hamburger.classList.add('active');
  sidebar.classList.add('active');
});

cross.addEventListener('click', function() {
  hamburger.classList.remove('active');
  sidebar.classList.remove('active');
});
