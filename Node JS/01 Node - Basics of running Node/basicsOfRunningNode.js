
// BASICS OF RUNNING NODE IN THE COMMAND LINE

// ----------
// npm init -y          (must do this at start of any node project if you are going to be using npm install to install packages!)

// At the start of any node project, this must be done:
// Navigate to the root of project and type the following into the command line: npm init -y 
// This will initialize a package.json file for the project. 
// The package.json file is required for installing third party npm packages and saving their version numbers. 
// If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for 
// anyone else to run your code after cloning your project.



// ----------
// process.argv

// process.argv will print out any command line arguments.
// In your JS file have the following:
// console.log(process.argv);
// Then in the command line type: node nameOfJsFile
// This will then display to the command line all of the process.argv arguments

// process.argv[0] is used to initialize node.  So in the command line you would type: node
// process.argv[1] is used to specify the JS file to open

// Set user input variables as arguments for process.argv[2] and process.argv[3]. For example:
// var userInput1 = process.argv[2];
// var userInput2 = process.argv[3];

// To run a JavaScript file in node, type into the command line:
// node nameOfJsFile userInput1 userInput2      (replacing nameOfJsFile, userInput1, userInput2 with appropriate file name / text)



// ----------
// var userInput2 = process.argv.slice(3).join(" ");

// Array slice() returns the selected elements in an array, as a new array object.
// slice() selects the elements starting at the given start argument.

// join() joins the elements of an array into a string, and returns the string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// Here we specified the separator to be a space (" ") instead of the default comma (,).



// To capture either multiple words or no words at all (i.e. no userInput for process.argv[3]), use the following code: 
// var userInput2 = (process.argv.slice(3).join(" ") || process.argv[3]);   // Use Array slice() and Array join() to accept multiple words (and single words too) for process.argv[3]
                                                                            // For example: Ariana Grande
                                                                            // Use OR || statement for var userInput2 to capture process.argv[3] without slice().join() too
                                                                            // in the case of when a user doesn't enter any input text for process.argv[3]



// ----------------------------------------
console.log(process.argv)       // In the command line type: node basicsOfRunningNode   (no need to include .js after basicsOfRunningNode, but you can if you want to (like basicsOfRunningNode.js))