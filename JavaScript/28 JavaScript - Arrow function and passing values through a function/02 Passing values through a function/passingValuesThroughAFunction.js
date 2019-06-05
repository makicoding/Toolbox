console.log("JavaScript connected!");


/*
If a value is passed through the function, the parenthesis () is not required. 
i.e. stoneTemplePilots(value1)

const stoneTemplePilots = value1 => {}

If two or more values are passed through, the parenthesis () is required.
i.e. stoneTemplePilots (value1, value2)

const stoneTemplePilots = (value1, value2) => {}
*/



// Example of arrow function with two values passed through:

const collectiveSoul = (a, b) => {
  console.log(a * b)
};
collectiveSoul(3, 4);

/* 
In the above case, 3 and 4 are passed through the function collectiveSoul 
when collectiveSoul is called. 3 and 4 get reassigned to a and b, and this
is how the calculation is made
*/



// Example of arrow function with two values which are non-numbers that are then passed through:

const myValue1 = 3;
const myValue2 = 5;

const nineInchNails = (myValue1, myValue2) => {
  console.log(myValue1 * myValue2)
};
nineInchNails(myValue1, myValue2);



// Example of arrow function with three values passed through:

const pitchshifter = (c, d, e) => {
  console.log(c * d * e)
};
pitchshifter(5, 7, 2);