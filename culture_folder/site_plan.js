// Example: Add a welcome message under the main header
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const welcomeMsg = document.createElement('p');
    welcomeMsg.textContent = "Welcome to a celebration of North-East Naga culture!";
    welcomeMsg.style.fontWeight = "bold";
    welcomeMsg.style.color = "#E7C24F";
    header.appendChild(welcomeMsg);
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const message = document.createElement('p');
    const hour = new Date().getHours();

    if (hour < 12) {
        message.textContent = "Good morning! Welcome to a celebration of North-East Naga culture!";
    } else if (hour < 18) {
        message.textContent = "Good afternoon! Welcome to a celebration of North-East Naga culture!";
    } else {
        message.textContent = "Good evening! Welcome to a celebration of North-East Naga culture!";
    }
    message.style.fontWeight = "bold";
    message.style.color = "#E7C24F";
    header.appendChild(message);
});