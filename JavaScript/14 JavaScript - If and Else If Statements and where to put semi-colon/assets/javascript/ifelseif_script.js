console.log("JavaScript connected!");

// --------------------------------------------------------------------------------
// GLOBAL VARIABLES

// Gender

var userGender = "male"             // "male" or "female" as a string


// ------------------------------
// Weather Array

// Darksky icon (machine readable text summary):
// clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, partly-cloudy-night, hail, thunderstorm, tornado

var weatherArray = [                // An array of weather objects
{
    tempLo: "60",                   // Temperature in Fahrenheit
    icon: "clear-day"               // See above Darksky icon names available
}
];       


// ------------------------------
// Clothing items (set to false to begin with)

var sunscreen = false;
var sunglasses = false;
var summerHatWomen = false;
var summerCapMen = false;
var skirt = false;
var shorts = false;
var sweater = false;
var pants = false;
var jacketWomen = false;
var jacketMen = false;
var umbrella = false;
var rainBoots = false;
var winterCoatWomen = false;
var winterJacketMen = false;
var thermalUnderwearTop = false;
var thermalUnderwearBottom = false;
var scarf = false;
var gloves = false;
var winterHat = false;
var snowBoots = false;


// ------------------------------
// Clothing Array

var clothingArray = [];             // An empty array for clothing that will be populated depending on the temperature and weather

// All the different clothing options available: "Sunscreen", "Sunglasses", "Women's Summer Hat", "Men's Cap", "Skirt", "Shorts", "Sweater", "Pants", "Women's Jacket", "Men's Jacket", "Umbrella", "Rain Boots", "Women's Winter Coat", "Men's Winter Jacket", "Thermal Underwear Top", "Thermal Underwear Bottom", "Scarf", "Gloves", "Winter Hat", "Snow Boots"


// --------------------------------------------------------------------------------
// FUNCTION TO CALL DARKSKY WEATHER API

// CODE GOES HERE

// --------------------------------------------------------------------------------
// IF STATEMENTS FOR TEMPERATURE

// NOTICE WHERE THE SEMI-COLON ; IS AND ISN'T.  TO USE ELSE IF, DO NOT PUT A SEMI-COLON AFTER } BECAUSE ELSE IF IS THE SAME AS SAYING 
// OTHERWISE IF WHICH MEANS THE IF BEFORE IT HAS BEEN SKIPPED OVER.

// Temperature in Fahrenheit

for (var k = 0; k < weatherArray.length; k++) {
    if (weatherArray[k].tempLo >= 68) {
  
        if (userGender === "female") {
            summerHatWomen = true;
            skirt = true;
        }
    
        else if (userGender === "male") {
            summerCapMen = true;
            shorts = true;    
        }
  
    }
  
    else if ((weatherArray[k].tempLo >= 59) && (weatherArray[k].tempLo < 68)) {
  
        if (userGender === "female") {
            sweater = true;
            pants = true;
        }
    
        else if (userGender === "male") {
            sweater = true;
            pants = true;
            }
  
    }
    
    else if ((weatherArray[k].tempLo > 50) && (weatherArray[k].tempLo < 59)) {
  
        if (userGender === "female") {
            pants = true;
            jacketWomen = true;
        }
    
        else if (userGender === "male") {
            pants = true;
            jacketMen = true;
            }
  
    }
  
    else if (weatherArray[k].tempLo <= 50) {
  
        if (userGender === "female") {
            pants = true;
            winterCoatWomen = true;
            thermalUnderwearTop = true;
            thermalUnderwearBottom = true;
            scarf = true;
            gloves = true;
            winterHat = true;
        }

        else if (userGender === "male") {
            pants = true;
            winterJacketMen = true;
            thermalUnderwearTop = true;
            thermalUnderwearBottom = true;
            scarf = true;
            gloves = true;
            winterHat = true;
            }

    }

};

console.log("sweater: " + sweater);
console.log("pants: " + pants);
console.log("winterJacketMen: " + winterJacketMen);
console.log("winterCoatWomen: " + winterCoatWomen);


// --------------------------------------------------------------------------------
// IF STATEMENTS FOR WEATHER

// NOTICE WHERE THE SEMI-COLON ; IS AND ISN'T.  TO USE ELSE IF, DO NOT PUT A SEMI-COLON AFTER } BECAUSE ELSE IF IS THE SAME AS SAYING 
// OTHERWISE IF WHICH MEANS THE IF BEFORE IT HAS BEEN SKIPPED OVER.

for (var l = 0; l < weatherArray.length; l++) { 
    if (weatherArray[l].icon === "clear-day") {
        sunscreen = true;
        sunglasses = true;
        console.log("Wear sunscreen and sunglasses!");
    }

    else if (weatherArray[l].icon === "wind" || weatherArray[l].icon === "tornado") {
        pants = true;
        console.log("Need pants!");
    }

    else if (weatherArray[l].icon === "rain" || weatherArray[l].icon === "sleet" || weatherArray[l].icon === "hail" || weatherArray[l].icon === "thunderstorm") {
        umbrella = true;
        rainBoots = true;
        console.log("Need umbrella and rain boots!");
    }

    else if (weatherArray[l].icon === "snow") {
        umbrella = true;
        snowBoots = true;
        console.log("Need umbrella and snow boots!");
    }
};

  
// --------------------------------------------------------------------------------
// IF STATEMENTS FOR CLOTHING

// NOTICE WHERE THE SEMI-COLON ; IS AND ISN'T.  YOU NEED TO PUT A SEMI COLON AFTER } IF YOU WANT THE NEXT IF TO
// BE ALSO COUNTED IN ADDITION TO THE IF STATEMENT THAT CAME BEFORE IT. 

if (sunscreen === true) {
    clothingArray.push("Sunscreen");                    // push "Sunscreen" to var clothingArray
};

if (sunglasses === true) {
    clothingArray.push("Sunglasses");                   // push "Sunglasses" to var clothingArray
};

if (summerHatWomen === true) {
    clothingArray.push("Women's Summer Hat");           // push "Women's Summer Hat" to var clothingArray
};

if (summerCapMen === true) {
    clothingArray.push("Men's Cap");                    // push "Men's Cap" to var clothingArray
};

if (skirt === true) {
    clothingArray.push("Skirt");                        // push "Skirt" to var clothingArray
};

if (shorts === true) {
    clothingArray.push("Shorts");                       // push "Shorts" to var clothingArray
};

if (sweater === true) {
    clothingArray.push("Sweater");                      // push "Sweater" to var clothingArray
};

if (pants === true) {
    clothingArray.push("Pants");                        // push "Pants" to var clothingArray
};

if (jacketWomen === true) {
    clothingArray.push("Women's Jacket");               // push "Women's Jacket" to var clothingArray
};

if (jacketMen === true) {
    clothingArray.push("Men's Jacket");                 // push "Men's Jacket" to var clothingArray
};

if (umbrella === true) {
    clothingArray.push("Umbrella");                     // push "Umbrella" to var clothingArray
};

if (rainBoots === true) {
    clothingArray.push("Rain Boots");                   // push "Rain Boots" to var clothingArray
};

if (winterCoatWomen === true) {
    clothingArray.push("Women's Winter Coat");          // push "Women's Winter Coat" to var clothingArray
};

if (winterJacketMen === true) {
    clothingArray.push("Men's Winter Jacket");          // push "Men's Winter Jacket" to var clothingArray
};

if (thermalUnderwearTop === true) {
    clothingArray.push("Thermal Underwear Top");        // push "Thermal Underwear Top" to var clothingArray
};

if (thermalUnderwearBottom === true) {
    clothingArray.push("Thermal Underwear Bottom");     // push "Thermal Underwear Bottom" to var clothingArray
};

if (scarf === true) {
    clothingArray.push("Scarf");                        // push "Scarf" to var clothingArray
};

if (gloves === true) {
    clothingArray.push("Gloves");                       // push "Gloves" to var clothingArray
};

if (winterHat === true) {
    clothingArray.push("Winter Hat");                   // push "Winter Hat" to var clothingArray
};

if (snowBoots === true) {
    clothingArray.push("Snow Boots");                   // push "Snow Boots" to var clothingArray
};

console.log(clothingArray);