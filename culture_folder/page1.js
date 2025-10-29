

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Redirect to form.html only when 'Cultural Tour' is selected
document.addEventListener('DOMContentLoaded', function() {
  var tourPref = document.getElementById('tourPreference');
  if (tourPref) {
    tourPref.addEventListener('change', function() {
      if (tourPref.value === 'cultural') {
        window.location.href = 'form.html?tour=culture';
      }
    });
  }
});
  
