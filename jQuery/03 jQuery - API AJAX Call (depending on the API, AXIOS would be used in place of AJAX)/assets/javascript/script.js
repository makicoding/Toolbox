console.log("JavaScript is connected!");



// ----------------------------------------
// USER INPUT BOX, SEARCH BUTTON, STORE USER KEYWORD TO DATA ATTRIBUTE, RESET BUTTON

// Input Box
var inputBox = document.createElement("input");                     // Create <input> element
inputBox.setAttribute("type", "text");                              // Set Attribute for inputBox to have type="text"
inputBox.setAttribute("class", "userInput1");                       // Set Attribute for inputBox to have class="userInput1"
document.body.appendChild(inputBox);                                // Append inputBox to body of page



// Search Button. When the user clicks searchButton, the function storeUserKeyword is called
var searchButton = document.createElement("button");                // Create <button> element
searchButton.setAttribute("class", "userSearchButton");             // Set Attribute for inputButton to have class="userSearchButton"
var searchButtonText = document.createTextNode("Search");           // Create a text node 
searchButton.appendChild(searchButtonText);                         // Append the text to searchButton
document.body.appendChild(searchButton);                            // Append searchButton to body of page
searchButton.addEventListener("click", storeUserKeyword);           // Add an event listener.  When user clicks, the function storeUserKeyword is called.



// Function to store user keyword to data-userkeywordstoredhere, then call the function getFromApi
function storeUserKeyword(){
    var storeUserInput = document.getElementsByClassName("userInput1")[0].value;                                                        // .value here refers to what the user typed into the input box
    document.getElementsByClassName("thisIsWhereIWillStoreUserKeyword")[0].setAttribute("data-userkeywordstoredhere", storeUserInput);  // User input is set (i.e. stored to) the data attribute "data-userkeywordstoredhere" ("userkeywordstorehere" must be all lowercase! This is a rule for data- attribute to work)
    console.log(storeUserInput);
    getFromApi();                                                                                                                       // The function getFromApi() is then called
}



// Reset Button. When the user clicks resetButton, the function emptyInputBox is called
var resetButton = document.createElement("button");                 // Create <button> element
resetButton.setAttribute("class", "inputBoxResetButton");           // Set Attribute for resetButton to have class="inputBoxResetButton"
var resetButtonText = document.createTextNode("Reset");             // Create a text node 
resetButton.appendChild(resetButtonText);                           // Append the text to resetButton
document.body.appendChild(resetButton);                             // Append resetButton to body of page
resetButton.addEventListener("click", emptyInputBoxAndGifs);               // Add an event listener.  When user clicks, the function emptyInputBox is called.



// Function to empty input box
function emptyInputBoxAndGifs() {
    document.getElementsByClassName("userInput1")[0].value = ""             // .value here refers to the text inside the input box which will now be emptied
    document.getElementsByClassName("gifsAppearHere")[0].innerHTML = ""     // innerHTML of class="gifsAppearHere" will now be emptied
}



// ----------------------------------------
// FUNCTION TO CALL API

function getFromApi(){



        var retrieveUserInput = document.getElementsByClassName("thisIsWhereIWillStoreUserKeyword")[0].getAttribute("data-userkeywordstoredhere");  // User input retrieved (getAttribute) from the data attribute "data-userkeywordstorehere"



        // Use jQuery from here:

        console.log(this);
        
        $(".gifsAppearHere").empty();                                                   // Empty the div class="gifsAppearHere"

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        retrieveUserInput + "&api_key=9rqYZE6HplBHPqKeUBfUFVboSn02keof";                // retrieveUserInput is the user's keyword originally entered into the input box

        // DEPENDING ON THE API, AXIOS WOULD BE USED IN PLACE OF AJAX. IN THIS CASE WE WOULD WRITE:
        // axios.get(queryURL).then(function(response) { });
        // IF USING AXIOS, REMEMBER TO INCLUDE A CDN OF AXIOS WITHIN A SCRIPT TAG IN THE HTML
        $.ajax({                                                                        // Calling the Ajax 
        url: queryURL,                                                                  // the url is referencing the above URL listed in the variable
        method: "GET"                                                                   // The retrieval method of the data is GET
        }).then(function(response) {

            console.log(response);

            var results = response.data                                                 // results is the data property of the response

            for (var i = 0; i < 10; i++) {                                              // Limit the for loop to 10 images

                var gifDiv = $("<div>").attr("class","overallGifContainer");            // Create a div to hold gifRating and gifImage
                


                //var gifRating = $("<p>").attr("class","ratingContainer");             // Create a p (paragraph) with class="ratingContainer"
                //gifRating.text("Rating: " + results[i].rating);                       // Inside the p, put in the text "Rating: " + result[i].rating

                var gifImage = $("<img>").attr("class","imageContainer");               // Create an image container with class="imageContainer"



                gifImage.attr("src", results[i].images.fixed_height.url);               // Add the attribute src (source) that references the image URL



                //gifDiv.append(gifRating);                                             // Add paragraphForRating to the gifDiv
                gifDiv.append(gifImage);                                                // Add the gifImage to the gifDiv also

                $(".gifsAppearHere").append(gifDiv);                                    // Add the gifDiv to the class=gifsAppearHere

            }

        });    

}



// append and prepend definition:

// append:	add (something) as an attachment or supplement
// prepend:	add (something) to the beginning of something else