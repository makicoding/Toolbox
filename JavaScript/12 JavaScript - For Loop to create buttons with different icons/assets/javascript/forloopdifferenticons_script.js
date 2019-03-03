console.log("JavaScript connected!");

// ------------------------------------------------------------
// CLOTHING ARRAY

var clothingArray = ["Sunscreen", "Sunglasses", "Women's Summer Hat", "Men's Cap", "Skirt", "Shorts", "Sweater", "Pants", "Women's Jacket", "Men's Jacket", "Umbrella", "Rain Boots", "Women's Winter Coat", "Men's Winter Jacket", "Thermal Underwear Top", "Thermal Underwear Bottom", "Scarf", "Gloves", "Winter Hat", "Snow Boots"];
    // clothingArray could be dynamically populated using push.  In the above case, we hard coded all the different clothes.

// ------------------------------------------------------------
// CREATE CLOTHING BUTTONS ON HTML

// All clothing items as objects that contain image URL and keyword

var itemSunscreen = {
    image: "assets/icons/100px_iconSunscreen.png",
    keyword: "Sunscreen"
}

var itemSunglasses = {
    image: "assets/icons/100px_iconSunglasses.png",
    keyword: "Sunglasses"
}

var itemSummerHatWomen = {
    image: "assets/icons/100px_iconSummerHatWomen.png",
    keyword: "Women's Summer Hat"
}

var itemSummerCapMen = {
    image: "assets/icons/100px_iconSummerCapMen.png",
    keyword: "Men's Cap"
}

var itemSkirt = {
    image: "assets/icons/100px_iconSkirt.png",
    keyword: "Skirt"
}

var itemShorts = {
    image: "assets/icons/100px_iconShorts.png",
    keyword: "Shorts"
}

var itemSweater = {
    image: "assets/icons/100px_iconSweater.png",
    keyword: "Sweater"
}

var itemPants = {
    image: "assets/icons/100px_iconPants.png",
    keyword: "Pants"
}

var itemJacketWomen = {
    image: "assets/icons/100px_iconJacketWomen.png",
    keyword: "Women's Jacket"
}

var itemJacketMen = {
    image: "assets/icons/100px_iconJacketMen.png",
    keyword: "Men's Jacket"
}

var itemUmbrella = {
    image: "assets/icons/100px_iconUmbrella.png",
    keyword: "Umbrella" 
}

var itemRainBoots = {
    image: "assets/icons/100px_iconRainBoots.png",
    keyword: "Rain Boots"
}

var itemWinterCoatWomen = {
    image: "assets/icons/100px_iconWinterCoatWomen.png",
    keyword: "Women's Winter Coat"
}

var itemWinterJacketMen = {
    image: "assets/icons/100px_iconWinterJacketMen.png",
    keyword: "Men's Winter Jacket"
}

var itemThermalUnderwearTop = {
    image: "assets/icons/100px_iconThermalUnderwearTop.png",
    keyword: "Thermal Underwear Top"
}

var itemThermalUnderwearBottom = {
    image: "assets/icons/100px_iconThermalUnderwearBottom.png",
    keyword: "Thermal Underwear Bottom"
}

var itemScarf = {
    image: "assets/icons/100px_iconScarf.png",
    keyword: "Scarf"
}

var itemGloves = {
    image: "assets/icons/100px_iconGloves.png",
    keyword: "Gloves"
}

var itemWinterHat = {
    image: "assets/icons/100px_iconWinterHat.png",
    keyword: "Winter Hat"
}

var itemSnowBoots = {
    image: "assets/icons/100px_iconSnowBoots.png",
    keyword: "Snow Boots"
}



// Create Icons

function createIcon(clothing) {                                                 // For the function createIcon, we pass through clothing
    var clothingIcon = document.createElement("div");                           // Create <div> element
    clothingIcon.setAttribute("class", "iconDiv");                              // Set Attribute for clothingIcon to have class="iconDiv"
    clothingIcon.setAttribute("data-clothingkeyword", clothing.keyword);        // Set Attribute for clothingIcon to have a data attribute: data-clothingkeyword (clothingkeyword must be in lowercase for this to work!)
    var clothingIconImage = document.createElement("img");                      // Create <img> element
    clothingIconImage.setAttribute("src", clothing.image);                      // Set Attribute for clothingIconImage to have a source which references the image URL in the above objects
    clothingIconImage.setAttribute("class", "iconImage");                       // Set Attribute for clothingIcon to have class="iconImage"
    var clothingIconText = document.createTextNode(clothing.keyword);           // Create a text node with the string in item in the above objects 
    var clothingIconTextContainer = document.createElement("div");              // Create <div> element
    clothingIconTextContainer.setAttribute("class", "iconText");                // Set Attribute for clothingIconTextContainer to have class="iconText"
    clothingIconTextContainer.appendChild(clothingIconText);                    // Append clothingIconText to clothingIconTextContainer
    clothingIcon.appendChild(clothingIconImage);                                // Append clothingIconImage to clothingIcon
    clothingIcon.appendChild(clothingIconTextContainer);                        // Append clothingIconText to clothingIcon                    
    document.getElementById("iconsAppearHereDiv").appendChild(clothingIcon);    // Append clothingIcon to iconAppearHereDiv
    clothingIcon.addEventListener("click", shopping);                           // When clothingIcon is clicked, the function shopping is called    
}



// For Loop

for (var i = 0; i < clothingArray.length; i++) {
    if (clothingArray[i] === "Sunscreen") {
        createIcon(itemSunscreen);                                  // Call the function createIcon and pass through itemSunscreen in place of where clothing is
    }
    else if (clothingArray[i] === "Sunglasses") {
        createIcon(itemSunglasses);                                 // Call the function createIcon and pass through itemSunglasses in place of where clothing is
    }
    else if (clothingArray[i] === "Women's Summer Hat") {
        createIcon(itemSummerHatWomen);                             // Call the function createIcon and pass through itemSummerHatWomen in place of where clothing is
    }
    else if (clothingArray[i] === "Men's Cap") {
        createIcon(itemSummerCapMen);                               // Call the function createIcon and pass through itemSummerCapMen in place of where clothing is
    }
    else if (clothingArray[i] === "Skirt") {
        createIcon(itemSkirt);                                      // Call the function createIcon and pass through itemSkirt in place of where clothing is
    }
    else if (clothingArray[i] === "Shorts") {
        createIcon(itemShorts);                                     // Call the function createIcon and pass through itemShorts in place of where clothing is
    }
    else if (clothingArray[i] === "Sweater") {
        createIcon(itemSweater);                                    // Call the function createIcon and pass through itemSweater in place of where clothing is
    }
    else if (clothingArray[i] === "Pants") {
        createIcon(itemPants);                                      // Call the function createIcon and pass through itemPants in place of where clothing is
    }
    else if (clothingArray[i] === "Women's Jacket") {
        createIcon(itemJacketWomen);                                // Call the function createIcon and pass through itemJacketWomen in place of where clothing is
    }
    else if (clothingArray[i] === "Men's Jacket") {
        createIcon(itemJacketMen);                                  // Call the function createIcon and pass through itemJacketMen in place of where clothing is
    }
    else if (clothingArray[i] === "Umbrella") {
        createIcon(itemUmbrella);                                   // Call the function createIcon and pass through itemUmbrella in place of where clothing is
    }
    else if (clothingArray[i] === "Rain Boots") {
        createIcon(itemRainBoots);                                  // Call the function createIcon and pass through itemRainBoots in place of where clothing is
    }
    else if (clothingArray[i] === "Women's Winter Coat") {
        createIcon(itemWinterCoatWomen);                            // Call the function createIcon and pass through itemWinterCoatWomen in place of where clothing is
    }
    else if (clothingArray[i] === "Men's Winter Jacket") {
        createIcon(itemWinterJacketMen);                            // Call the function createIcon and pass through itemWinterJacketMen in place of where clothing is
    }
    else if (clothingArray[i] === "Thermal Underwear Top") {
        createIcon(itemThermalUnderwearTop);                        // Call the function createIcon and pass through itemThermalUnderwearTop in place of where clothing is
    }
    else if (clothingArray[i] === "Thermal Underwear Bottom") {
        createIcon(itemThermalUnderwearBottom);                     // Call the function createIcon and pass through itemThermalUnderwearBottom in place of where clothing is
    }
    else if (clothingArray[i] === "Scarf") {
        createIcon(itemScarf);                                      // Call the function createIcon and pass through itemScarf in place of where clothing is
    }
    else if (clothingArray[i] === "Gloves") {
        createIcon(itemGloves);                                     // Call the function createIcon and pass through itemGloves in place of where clothing is
    }
    else if (clothingArray[i] === "Winter Hat") {
        createIcon(itemWinterHat);                                  // Call the function createIcon and pass through itemWinterHat in place of where clothing is
    }
    else if (clothingArray[i] === "Snow Boots") {
        createIcon(itemSnowBoots);                                  // Call the function createIcon and pass through itemSnowBoots in place of where clothing is
    }

}



// ------------------------------------------------------------
// CALL THE FUNCTION SHOPPING (WE CAN INSERT AN API AJAX CALL WITHIN THIS FUNCTION IF WE WANT TO)

function shopping() {

    var categoryCode = this.getAttribute("data-clothingkeyword");       // categoryCode is the container that contains the clothing item keyword
                                                                        // here "this" refers to "clothingIcon"

    console.log(categoryCode);                                          // Open the console in the browser. When you click on a button, its keyword will be printed to the console.

    // IF WANTING TO, INSERT API CALL HERE.  YOU'LL NEED TO INSERT categoryCode IN THE QUERY SEARCH.

};