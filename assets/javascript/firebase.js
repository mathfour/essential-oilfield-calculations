/**
 * Created by SilverDash on 4/26/17.
 */

// $.removeCookie("oilfieldCalculations");

// bmc: get the cookie value for this user, if they have one
// var userID = "";
    userID = $.cookie("oilfieldCalculations");
    console.log("FYI: the cookie for this computer is " + userID);
// var newUser = false;



// bmc: configure the firebase database and initialize
var configThisAlready = {
    apiKey: "AIzaSyCNyA8ecM-65kxrfuwxxMQr1f0Ujoasr7I",
    authDomain: "essential-oilfield-calcs.firebaseapp.com",
    databaseURL: "https://essential-oilfield-calcs.firebaseio.com/",
    projectId: "essential-oilfield-calcs",
    storageBucket: "essential-oilfield-calcs.appspot.com"
};

firebase.initializeApp(configThisAlready);

var uberDatabase = firebase.database();


// bmc: if it's a new user, set him up with a
// if(newUser){

// Get a key for a new Post.
// bmc: will use this as the cookie instead of the random number
// var newPostKey = uberDatabase.ref().push().key;

// bmc: if this user doesn't have a cookie value, give him one
if(!userID){
    // cookieNumber = Math.round(Math.random()*1000000000000000);

        var thisUserID = uberDatabase.ref().push({
            IC: {
                titlesIC: {
                    innerDiam: "Diameter",
                    barrelsPerFoot: "bbl/ft",
                    feetPerBarrel: "ft/bbl",
                    gallonsPerFoot: "gal/ft",
                    feetPerGallon: "ft/gal"
                }
            },
            AC: {
                titlesAC: {
                    innerDiam: "OD of Annulus",
                    outsideDiam: "ID of Annulus",
                    barrelsPerFoot: "bbl/ft",
                    feetPerBarrel: "ft/bbl",
                    gallonsPerFoot: "gal/ft",
                    feetPerGallon: "ft/gal"
                }
            },
            AV: {
                titlesAnnV: {
                    barrelsPerMin: "Flow Rate",
                    bigDiam: "Large Diam",
                    smallDiam: "Small Diam",
                    feetPerMin: "ft/min",
                    feetPerSec: "ft/sec"
                }
            },
            FIT: {
                titlesFIT: {
                    fitRequired: "FIT required",
                    mudWeight: "Mud Weight",
                    shoeDepth: "Shoe Depth (TVD)",
                    presRequired: "psi required"
                }
            },
            FT: {
                titlesFT: {
                    surfTemp: "Surface Temperature",
                    tempGrad: "Temperature Gradient",
                    formDepth: "Formation TVD",
                    formTemp: "Formation Temperature (F)"
                }
            },
            HP: {
                titlesHP: {
                    mudWeight: "Mud weight",
                    verticalDepth: "TVD",
                    hydroPres: "Pressure"
                }
            },
            LOT: {
                titlesLOT: {
                    lotPressure: "LOT pressure",
                    mudWeight: "Mud weight",
                    shoeDepth: "Shoe Depth/TVD",
                    lotEquivMudWeight: "LOT equivalent mud weight"
                }
            },
            PG: {
                titlesPresGrad: {
                    mudWeight: "Mud weight",
                    presGrad: "Pressure Gradient"
                }
            },
            SC: {
                titlesSlugCalc: {
                    pipeLength: "Desired length dry pipe",
                    dpCapacity: "Drill pipe capacity",
                    currentMudWeight: "Current MW",
                    slugWeight: "Slug Weight",
                    hydroPresReq: "pressure required",
                    presGradDif: "pressure gradient dif.",
                    lengthOfSludInDP: "length of slug",
                    slugVolume: "slug volume"
                }
        }
    }).key;
    console.log(thisUserID);
    $.cookie("oilfieldCalculations", thisUserID);
    // newUser = true;
    console.log("FYI: the cookie for this computer will be " + thisUserID);
}

justLooking = $.cookie("oilfieldCalculations");
console.log("this should be the key: " + justLooking);

uberDatabase.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
});
// bmc: this works
// bmc: if it's a new cookie, do this

// bmc: if the cookie already exists, pull the info and get it ready to display




    // title = snapshot.val().empName;

    // If Firebase has a highPrice and highBidder stored (first case)
    // if (snapshot.child("userID").exists()) {
        // // Set the initial variables for highBidder equal to the stored values.
        // highBidder = snapshot.val().highBidder;
        // highPrice = parseInt(snapshot.val().highPrice);
        //
        // // Change the HTML to reflect the initial value
        // $("#highest-bidder").html(snapshot.val().highBidder);
        // $("#highest-price").html("$" + snapshot.val().highPrice);

        // Print the initial data to the console.
        // console.log(snapshot);
        // console.log(snapshot.val().highPrice);
//     }
// }, function(errorObject) {
//     console.log("The read failed: " + errorObject.code);
// });

// $("#calcInnerCapacity").on("click", function() {
//     // Get the input values
//     var bidderName = $("#bidder-name").val().trim();
//     var bidderPrice = parseInt($("#bidder-price").val().trim());
//
//     // Log the Bidder and Price (Even if not the highest)
//     console.log(bidderName);
//     console.log(bidderPrice);
//
//     if (bidderPrice > highPrice) {
//
//         // Alert
//         alert("You are now the highest bidder.");
//
//         // Save the new price in Firebase
//         database.ref().set({
//             highBidder: bidderName,
//             highPrice: bidderPrice
//         });
//
//         // Log the new High Price
//         console.log("New High Price!");
//         console.log(bidderName);
//         console.log(bidderPrice);
//
//         // Store the new high price and bidder name as a local variable (could have also used the Firebase variable)
//         highBidder = bidderName;
//         highPrice = parseInt(bidderPrice);
//
//         // Change the HTML to reflect the new high price and bidder
//         $("#highest-bidder").html(bidderName);
//         $("#highest-price").html("$" + bidderPrice);
//     }
//
//     else {
//
//         // Alert
//         alert("Sorry that bid is too low. Try again.");
//     }
//
//     // Prevent default behavior
//     event.preventDefault();
// });