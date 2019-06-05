console.log("JavaScript connected!");


// An arrow function expression is a syntactically compact alternative to a regular function expression, introduced in ES6/ES2015

// Regular function expression:

var fooFighters = function() {
  console.log("This is a regular function expression")
};
fooFighters();



// Arrow function expression:

const stoneTemplePilots = () => {
  console.log("This is an arrow function expression")
  console.log("A 'return' is implicitly implied in an arrow function without having to state 'return'")
};
stoneTemplePilots();

/*
If a value is passed through the function, the parenthesis () is not required. 
i.e. stoneTemplePilots(value1)

const stoneTemplePilots = value1 => {}

If two or more values are passed through, the parenthesis () is required.
i.e. stoneTemplePilots (value1, value2)

const stoneTemplePilots = (value1, value2) => {}
*/