console.log("JavaScript Connected!")

// Force page to be at top on page reload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }