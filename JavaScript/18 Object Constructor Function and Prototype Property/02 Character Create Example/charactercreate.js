// ----------------------------------------
// OBJECT CONSTRUCTOR FUNCTION

function Character(name, profession, gender, age, strength, damagereceived) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.damagereceived = damagereceived
    // printStats FUNCTION
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession +
        "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " +
        this.strength + "\nDamage Received: " + this.damagereceived);
        // \n means new line in terminal

        // You could also write the above console log like this:
        // console.log(this);     // Prints to the console the entire object
    }

    // IsAlive FUNCTION
    // Prints whether or not this character is alive by looking into damagereceived
    // and determining whether it is above or below zero.
    this.isAlive = function() {
        if (this.damagereceived <= 0) {
            console.log("CHARACTER IS ALIVE AND WELL");
        }
        else if (this.damagereceived >= 5000) {
            console.log("CHARACTER IS DEAD");
        }
        else {
            console.log("CHARACTER NEEDS TO GO BACK TO BASE");
        }
    };
}
  
// Sets the variables "superhero1", "superhero2", "superhero3" to be Character objects 
// and initializes them with name, profession, gender, age, strength, damagereceived properties
var superhero1 = new Character("Iron Man", "Billionaire", "Male", 45, 10000, 3000);
var superhero2 = new Character("Thor", "God of Thunder", "Male", 30, 100000, 0);
var superhero3 = new Character("Captain America", "Captain", "Male", 99, 500, 5000);



// ----------------------------------------
// CALL FUNCTIONS

// Call superhero1, superhero2, superhero3 printstats functions
superhero1.printStats();
superhero2.printStats();
superhero3.printStats();

// Call superhero1, superhero2, superhero3 isAlive functions
superhero1.isAlive();
superhero2.isAlive();
superhero3.isAlive();