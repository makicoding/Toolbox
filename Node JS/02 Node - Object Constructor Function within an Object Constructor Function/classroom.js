// Require Student Object Constructor Function we exported from student.js
var Student = require("./student.js");

// OBJECT CONSTRUCTOR FUNCTION
var Classroom = function(nameOfProfessor, roomNumber) {
    this.students = [];   // this.students will hold all of our Student objects
    this.nameOfProfessor = nameOfProfessor;
    this.roomNumber = roomNumber;
    // Function that creates a Student object from the object constructor function we required 
    // and pushes it to the "this.student" array
    this.addStudent = function(name, favoriteSubject, currentGpa) {
        this.students.push(new Student(name, favoriteSubject, currentGpa));
    };
    // Function that tells you how many students are in the class
    this.numberOfStudents = function() {
        return this.students.length;
    };
}

// Export Classroom object constructor function.  We will require it in main.js
module.exports = Classroom;