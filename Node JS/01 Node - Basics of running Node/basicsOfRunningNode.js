
// BASICS OF RUNNING NODE IN THE COMMAND LINE

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
// npm init -y          (must do this at start of any node project if you are going to be using npm install to install packages!)

// At the start of any node project, this must be done:
// Navigate to the root of project and type the following into the command line: npm init -y 
// This will initialize a package.json file for the project. 
// The package.json file is required for installing third party npm packages and saving their version numbers. 
// If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for 
// anyone else to run your code after cloning your project.



// ----------------------------------------
console.log(process.argv)       // In the command line type: node basicsOfRunningNode   (no need to include .js after basicsOfRunningNode, but you can if you want to (like basicsOfRunningNode.js))