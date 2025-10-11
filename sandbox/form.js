document.getElementById('checkoutForm').onsubmit = function(event) {
  event.preventDefault(); // Prevents page reload
  alert("Order placed!");
};