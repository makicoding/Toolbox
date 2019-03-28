console.log ("JavaScript Connected!");

// The code below slides in the overlay navigation menu from left to right (0 to 100% width), when it is triggered:

// Open when someone clicks on the span element
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
  
// Close when someone clicks on the "x" symbol inside the overlay
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}