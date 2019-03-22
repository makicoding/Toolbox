// ----------------------------------------
// OBJECT CONSTRUCTOR FUNCTION (this is a blueprint)
// Used to create objects with the ".raining", ".noise", ".makenoise" properties

function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {   // makeNoise FUNCTION (makeNoise function is also the same as a method. A method is just a function that is a property of an object)
    
    // console.log(this);     // Prints to the console the entire object

    if (this.raining === true) {
      console.log(this.noise);
    }

  }

}

// Sets the variables "dogs" and "cats" to be Animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");



// ----------------------------------------
// CALL FUNCTIONS

// Call dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();



// ----------------------------------------
// If we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();



// Function called massHysteria which takes in both the cats and dogs object and prints
// "DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA" if both of the "raining" key are true
var massHysteria = function(dogs, cats) {

  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
  
}

massHysteria(dogs, cats);