
// Data: Array of objects for states and images
const stateImages = [
  { state: 'Assam', culture: 'images/Assam.jpg', nature: 'Nature/Assam_Nature.jpg' },
  { state: 'Nagaland', culture: 'images/Nagaland.jpeg', nature: 'Nature/Nagaland_Nature.jpg' },
  { state: 'Manipur', culture: 'images/Manipur.jpg', nature: 'Nature/Manipur_Nature.jpg' },
  { state: 'Meghalaya', culture: 'images/Meghalaya.jpg', nature: 'Nature/Meghalaya_Nature.jpg' },
  { state: 'Mizoram', culture: 'images/Mizoram.jpeg', nature: 'Nature/Mizoram_nature.jpg' },
  { state: 'Tripura', culture: 'images/Tripura.jpg', nature: 'Nature/Tripura_Nature.jpg' },
  { state: 'Arunachal Pradesh', culture: 'images/Arunachal.jpg', nature: 'Nature/Arunachal_nature.jpg' },
  { state: 'Sikkim', culture: 'images/Sikkim.jpg', nature: 'Nature/Sikkim_nature.jpg' }
];

// Utility: Preload all images (array method: forEach)
function preloadImages() {
  stateImages.forEach(obj => {
    ['culture', 'nature'].forEach(type => {
      const img = new Image();
      img.src = obj[type];
    });
  });
}

// Utility: Get tour type from URL (returns 'culture' or 'nature')
function getTourType() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tour') || 'culture';
}

// Main: Handle form submission and show image/message
function handleFormSubmit(e) {
  e.preventDefault();
  const state = document.getElementById('state').value;
  const tourType = getTourType();
  // Find the matching state object (array method: find)
  const match = stateImages.find(item => item.state === state);
  let imgSrc = '';
  // Conditional branching: choose image based on tourType
  if (match) {
    if (tourType === 'nature') {
      imgSrc = match.nature;
    } else {
      imgSrc = match.culture;
    }
  }
  const imgAlt = state ? state + (tourType === 'nature' ? ' Nature' : ' Culture') : 'Tour';
  const form = e.target;
  const parent = form.parentElement;
  const imgHtml = imgSrc ? `<div style="text-align:center;"><img src="${imgSrc}" alt="${imgAlt}" style="max-width:50vw;width:50vw;height:auto;border-radius:16px;margin-bottom:24px;box-shadow:0 2px 12px #396E94;"></div>` : '';
  const thankYou = '<h2 style="color:#A43312;text-align:center;margin-top:32px;">Thank you for your visit!</h2>';
  if (parent && parent.tagName.toLowerCase() === 'body') {
    form.outerHTML = `${imgHtml}${thankYou}`;
  } else {
    form.innerHTML = `${imgHtml}${thankYou}`;
  }
}

// DOM interaction: set up event listeners
document.addEventListener('DOMContentLoaded', function() {
  preloadImages(); // Preload all images for better UX
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
});

