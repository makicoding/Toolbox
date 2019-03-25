// HOW TO WRITE AND USE slice() AND join() TO ACCEPT MULTIPLE WORD INPUT (and single words too)

// In the JS File we would write:

// var userInput1 = process.argv[2]                     // userInput1 = nameOfFunction
// var userInput2 = process.argv.slice(3).join(" ");    // userInput2 = this can be anything like nameOfArtist, nameOfSong, nameOfMovie and can accept multiple words 



// Array slice() returns the selected elements in an array, as a new array object.
// slice() selects the elements starting at the given start argument.

// join() joins the elements of an array into a string, and returns the string.
// The elements will be separated by a specified separator. The default separator is comma (,).
// Here we specified the separator to be a space (" ") instead of the default comma (,).



// In the command line we would type:

// node nameOfJSFile nameOfFunction nameOfSong



// Examples:
// node arraySliceArrayJoin myFunction ariana grande

// node arraySliceArrayJoin myFunction welcome to the fold



// ----------------------------------------
// TO CAPTURE EITHER MULTIPLE WORD INPUT OR NO WORDS AT ALL (i.e. no userInput for process.argv[3])
// Use the following code: 
// var userInput2 = (process.argv.slice(3).join(" ") || process.argv[3]);   // Use Array slice() and Array join() to accept multiple words (and single words too) for process.argv[3]
                                                                            // For example: Ariana Grande
                                                                            // Use OR || statement for var userInput2 to capture process.argv[3] without slice().join() too
                                                                            // in the case of when a user doesn't enter any input text for process.argv[3]