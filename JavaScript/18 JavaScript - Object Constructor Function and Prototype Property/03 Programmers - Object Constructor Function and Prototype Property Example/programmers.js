// ----------------------------------------
// OBJECT CONSTRUCTOR FUNCTION (this is a blueprint)

function Programmer (firstName, title, age, favoriteProgrammingLanguage, likesSushi) {
    this.firstName = firstName;
    this.title = title;
    this.age = age;
    this.favoriteProgrammingLanguage = favoriteProgrammingLanguage;
    this.likesSushi = likesSushi;
    // allData FUNCTION (allData function is also the same as a method. A method is just a function that is a property of an object)
    this.allData = function () {

        console.log(this.firstName + ", " + this.title + ", " + this.age + ", " + this.favoriteProgrammingLanguage + ", " + this.likesSushi)
    
    }

}

var p1 = new Programmer ("Maki", "Front End Developer", 33, "CSS", true);
var p2 = new Programmer ("Kamal", "Back End Developer", 50, "JavaScript", false);



// PROTOTYPE PROPERTY
// A prototype property is a way to add new properties to the object constructor
Programmer.prototype.industry = "Tech"

// A prototype property is accessible to all the child objects.  In this case it is accessible to p1 and p2.
// A prototype property is used to apply a common property across all child objects.
// (See how it is logged in the console)



// ----------------------------------------
console.log(p1);
console.log(p2);