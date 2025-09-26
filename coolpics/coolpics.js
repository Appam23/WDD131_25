// coolpics.js
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu');    // the Menu button
  const navMenu = document.querySelector('nav ul');      // the <ul> with links
  const BREAKPOINT = 1000; // px - same breakpoint as your CSS media query

  if (!menuButton || !navMenu) return; // safety: stop if elements not found

  // Toggle handler for the Menu button
  function toggleMenu() {
    navMenu.classList.toggle('hide');
  }

  // Handle window resize: keep menu visible on wide screens,
  // and hidden on small screens (so CSS + JS stay in sync).
  function handleResize() {
    if (window.innerWidth > BREAKPOINT) {
      // On large screens ensure the menu is visible (remove hide)
      navMenu.classList.remove('hide');
    } else {
      // On small screens default to hidden
      navMenu.classList.add('hide');
    }
  }

  // Event listeners
  menuButton.addEventListener('click', toggleMenu);
  window.addEventListener('resize', handleResize);

  // Run once at load to ensure correct initial state
  handleResize();
});
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu');    
  const navMenu = document.querySelector('nav ul');      
  const BREAKPOINT = 1000;

  const viewer = document.querySelector('.viewer');
  const viewerImage = document.querySelector('.viewer img');
  const closeButton = document.querySelector('.close-viewer');
  const galleryImages = document.querySelectorAll('.gallery img');

  // ========== Menu toggle ==========
  function toggleMenu() {
    navMenu.classList.toggle('hide');
  }

  function handleResize() {
    if (window.innerWidth > BREAKPOINT) {
      navMenu.classList.remove('hide');
    } else {
      navMenu.classList.add('hide');
    }
  }

  menuButton.addEventListener('click', toggleMenu);
  window.addEventListener('resize', handleResize);
  handleResize(); // run once at load

  // ========== Modal / Viewer ==========
  function openViewer(src, alt) {
    viewerImage.src = src;
    viewerImage.alt = alt;
    viewer.classList.remove('hide');
  }

  function closeViewer() {
    viewer.classList.add('hide');
    viewerImage.src = ""; // optional: clear src
  }

  // Add click event to each gallery image
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      openViewer(img.src, img.alt);
    });
  });

  // Close button
  closeButton.addEventListener('click', closeViewer);

  // Close with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && !viewer.classList.contains('hide')) {
      closeViewer();
    }
  });
});
