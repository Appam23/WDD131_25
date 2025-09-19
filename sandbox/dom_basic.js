const themeSelect = document.getElementById('theme');
const body = document.body;

// Initially add "dark" class
body.classList.add('dark');

// Wait 2 seconds, then remove the dark class
setTimeout(() => {
  body.classList.remove('dark');
}, 2000);

// Change theme when user selects option
themeSelect.addEventListener('change', (e) => {
  if(e.target.value === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
});
