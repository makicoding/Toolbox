function appStart() {
       
    window.open("https://www.google.com");

}



// The following is crucial to have.  It is saying that
// when the ENTIRE document is ready (i.e. when the ENTIRE DOM Content is loaded), 
// then the function appStart will execute

document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
    appStart();
});