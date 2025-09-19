const body = document.body;
const selecttheme = document.getElementById('theme');
const logo = document.getElementById('logo');

selecttheme.addEventListener('change', changeTheme);

function changeTheme(theme) {
     if (this.value === 'dark') {
    body.classList.add('dark');
    logo.src = "./byui-logo_white.png";
    } else {
      body.classList.remove('dark');
      logo.src = "./byui-logo_blue.webp";
    }
};