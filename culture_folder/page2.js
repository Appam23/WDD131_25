
// Data: Array of objects for slides
const slidesData = [
  { img: 'images/Pork.jpg', alt: 'Naga-Pork', caption: 'Traditional Naga style pork' },
  { img: 'images/Umarok.png', alt: 'Naga-Spice', caption: 'Naga viper - The hottest chili papper' },
  { img: 'images/chicken.png', alt: 'Naga-Chicken', caption: 'Chicken curry from Nagaland' }
];

// Utility: Preload all slide images (array method: forEach)
function preloadSlides() {
  slidesData.forEach(obj => {
    const img = new Image();
    img.src = obj.img;
  });
}

// Utility: Show a thank you message on registration form submit
function handleFormSubmit(e) {
  e.preventDefault();
  e.target.innerHTML = '<h2 style="color:#A43312;text-align:center;margin-top:32px;">Thank you for your visit!</h2>';
}

// Utility: Redirect to form.html when 'Sign in' is clicked
function handleSignInClick(e) {
  e.preventDefault();
  window.location.href = 'form.html';
}

// Slideshow logic using array methods and conditional branching
let slideIndex = 1;
function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  // Hide all slides
  Array.from(slides).forEach(slide => slide.style.display = "none");
  // Remove 'active' from all dots
  Array.from(dots).forEach(dot => dot.className = dot.className.replace(" active", ""));
  // Show current slide
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

// DOM interaction: set up event listeners
document.addEventListener('DOMContentLoaded', function() {
  preloadSlides(); // Preload all slide images
  // Slideshow
  if (document.getElementsByClassName("mySlides").length > 0) {
    showSlides(slideIndex);
  }
  // Register form submit
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
  // Sign in link
  const signinLink = document.querySelector('.container.signin a');
  if (signinLink) {
    signinLink.addEventListener('click', handleSignInClick);
  }
});





