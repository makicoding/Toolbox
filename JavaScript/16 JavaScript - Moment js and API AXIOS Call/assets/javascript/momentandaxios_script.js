console.log("JavaScript Connected!");



// Console log current date and time using moment.js
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));



// Console log date of artist events in the format MM/DD/YYYY using moment.js, and via an AXIOS call to get the information from the bandsintown API
var userInput = "Ariana Grande";    // Here we are hard coding the artist name. 
                                    // If console.log doesn't display anything, change the artist name because a particular artist may not be on tour

console.log(userInput + " is on tour at the following:");

function concertThisCall() {

    var queryURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    // AXIOS CALL
    axios.get(queryURL).then(function(response) {

        //console.log(response);    // See the entire response to identify which parts of it we want to use

        for(var i = 0; i < response.data.length; i++) {
            var venueLocation = response.data[i].venue.country + ", " + response.data[i].venue.city + " " + response.data[i].venue.region;
            console.log("Name of venue: " + response.data[i].venue.name);
            console.log("Venue location: " + venueLocation);
            console.log("Date of event: " + moment(response.data[i].datatime).format("MM/DD/YYYY")); 
            
        }

    });

}

concertThisCall();      // Call the function concertThisCall