// Require Classroom Object Constructor Function we exported from classroom.js
var Classroom = require("./classroom.js");

// Create and store a new Classroom object
var myClassroom1 = new Classroom("Vishal", 501);

// Call the addStudent function on our myClassroom1 object
myClassroom1.addStudent("Maki", "Coding", 3.9);
myClassroom1.addStudent("Judy", "Science", 3.8);

console.log(myClassroom1);
console.log("Number of students: " + myClassroom1.students.length);