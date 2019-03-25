// OBJECT CONSTRUCTOR FUNCTION
var Student = function(name, favoriteSubject, currentGpa) {     // the S in Student should be capitalized because it signifies an Object Constructor Function
    this.name = name;
    this.favoriteSubject = favoriteSubject;
    this.currentGpa = currentGpa
}

// Export Student object constructor function.  We will require it in classroom.js
module.exports = Student;