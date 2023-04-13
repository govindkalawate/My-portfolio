// Get references to the hamburger and cross icons and the sidebar
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const sidebar = document.querySelector('.slidebarGo');

// Add an event listener to the hamburger icon to show the sidebar
hamburger.addEventListener('click', () => {
  sidebar.style.transform = 'translate(0px, 0px)';
});

// Add an event listener to the cross icon to hide the sidebar
cross.addEventListener('click', () => {
  sidebar.style.transform = 'translate(-443px, 0px)';
});

// Add an event listener to the document to hide the sidebar when the user clicks outside of it
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickInsideHamburger = hamburger.contains(event.target);
  const isClickInsideCross = cross.contains(event.target);
  
  if (!isClickInsideSidebar && !isClickInsideHamburger && !isClickInsideCross) {
    sidebar.style.transform = 'translate(-443px, 0px)';
  }
});
