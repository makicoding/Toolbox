console.log("JavaScript connected!");

const x = 20;   // Modify this value to change the console logged output
const y = 10;   // Modify this value to change the console logged output

const result = x > y ? "x is greater than y" : "x is less than or equal to y";

/* 
A Ternary Operator is a short hand version of an if/else statement where the ? is the equivalent of if, and : is the equivalent of else
In this case we are saying:
if x is greater than y, then const result="x is greater than y"
else const resulet="x is less than or equal to y"
*/

console.log(result);



// The long hand version of writing the above would be:

const a = 20;   // Modify this value to change the console logged output
const b = 10;   // Modify this value to change the console logged output

if (a > b) {
  console.log("a is greater than b")
}
else {
  console.log("a is less than or equal to b")
}