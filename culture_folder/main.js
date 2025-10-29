
// Sidenav open/close functions (used in index.html and page1.html)
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Example: Dynamic navigation using arrays, objects, and array methods
const navLinks = [
  { text: 'Home', href: 'index.html' },
  { text: 'Fastival', href: 'page1.html' },
  { text: 'Cusine', href: 'page2.html' },
  { text: 'Site Plan', href: 'site_plan.html' }
];

function renderNav() {
  const nav = document.querySelector('nav.dynamic-nav');
  if (!nav) return;
  nav.innerHTML = '';
  navLinks.forEach(link => {
    // Conditional branching: highlight Home
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    if (window.location.pathname.endsWith(link.href)) {
      a.style.fontWeight = 'bold';
    }
    nav.appendChild(a);
  });
}

// Tour preference redirect logic (used in index.html, page1.html, page2.html)

document.addEventListener('DOMContentLoaded', function() {
  // Render dynamic nav if present
  renderNav();

  // Tour preference redirect logic
  var tourPref = document.getElementById('tourPreference');
  if (tourPref) {
    tourPref.addEventListener('change', function() {
      if (tourPref.value === 'cultural') {
        window.location.href = 'form.html?tour=culture';
      } else if (tourPref.value === 'adventure') {
        window.location.href = 'form.html?tour=nature';
      }
    });
  }

  // Slideshow logic (used in page2.html only, but safe to include everywhere)
  if (document.getElementsByClassName("mySlides").length > 0) {
    showSlides(slideIndex);
  }
});

// Slideshow logic (used in page2.html only, but safe to include everywhere)
let slideIndex = 1;
if (typeof showSlides === 'undefined') {
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slides.length === 0) return;
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  // Only run slideshow if present
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementsByClassName("mySlides").length > 0) {
      showSlides(slideIndex);
    }
  });
}
