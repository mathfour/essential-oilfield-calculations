/**
 * Created by SilverDash on 4/26/17.
 */

// bmc: get the cookie value for this user, if they have one
var cookieValue = $.cookie("oilfieldCalculations");
    console.log("FYI: the cookie for this computer is " + cookieValue);

// bmc: if this user doesn't have a cookie value, give him one
if(!cookieValue>0){
    cookieNumber = Math.round(Math.random()*1000000000000000);
    theCookie = $.cookie("oilfieldCalculations", cookieNumber);
    console.log("FYI: the cookie for this computer is " + cookieValue);
}


var configThisAlready = {
    apiKey: "AIzaSyCNyA8ecM-65kxrfuwxxMQr1f0Ujoasr7I",
    authDomain: "essential-oilfield-calcs.firebaseapp.com",
    databaseURL: "https://essential-oilfield-calcs.firebaseio.com/",
    projectId: "essential-oilfield-calcs",
    storageBucket: "essential-oilfield-calcs.appspot.com"
};

firebase.initializeApp(configThisAlready);

// Create a variable to reference the database
var uberDatabase = firebase.database();

// bmc: initial values

// bmc: person

computerIdentification = cookieValue;

// bmc: calculation type (ten)
// bmc: calculations (last 20?)


// bmc: this works
uberDatabase.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
});

// bmc: this works
uberDatabase.ref().set({
    innerCap: {
        anotherBit: "yum",
        oneMore: "yuk"
    },
    annCap: 8
});


    // title = snapshot.val().empName;

    // If Firebase has a highPrice and highBidder stored (first case)
    // if (snapshot.child("computerIdentification").exists()) {
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