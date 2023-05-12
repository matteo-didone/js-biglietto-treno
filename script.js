// Creating basic variables by asking the user
let numberOfKilometers = parseInt(prompt("How many kilometers do you want to run?"));
let userAge = parseInt(prompt("How old are you?"));

if
(numberOfKilometers <= 0 || userAge <= 0 || isNaN(numberOfKilometers) || isNaN(userAge))
{
    alert("Please insert valid values, not the ones you provided");
}

// Create variables by using input values
let ticketPrice = 0.21 * numberOfKilometers;
let discountAmount;

// Create if statements to calculate the price of the ticket
if (userAge < 18) 
{
    discountAmount = 0.20;
    ticketPrice -= ticketPrice * discountAmount;
    ticketPrice = ticketPrice.toFixed(2);
    alert("Because you are under 18 years old, you get a 20% discount on your ticket price!");
} else if (userAge > 65) {
    discountAmount = 0.40;
    ticketPrice -= ticketPrice * discountAmount;
    ticketPrice = ticketPrice.toFixed(2);
    alert("Because you are over 65 years old, you get a 40% discount on your ticket price!");
} else if (userAge >= 18 && userAge <= 65) {
    ticketPrice = ticketPrice.toFixed(2);
    alert("Because you are between 18 and 65 years old, you don't get any discount on your ticket price.");
}


// Create message
let messageKilometersAndAge = "Just to recap, you want to run for " + numberOfKilometers + " kilometers and you are " + userAge + " years old" + "\n" + "The price of your ticket is going to be " + ticketPrice + "€";
let messageWrongParameters = "Because the parameters you provided were not valid, we couldn't calculate the price of your ticket";

// Display message regarding kilometers, age and potential discount
if(numberOfKilometers > 0 && userAge > 0 && !isNaN(numberOfKilometers) && !isNaN(userAge))
{
    alert(messageKilometersAndAge);
}
else if (isNaN(numberOfKilometers) || isNaN(userAge))
{
    alert(messageWrongParameters);
}

// Get elements by id
let kmParagraph = document.getElementById("km");
let userAgeParagraph = document.getElementById("userAge");
let ticketPriceParagraph = document.getElementById("ticketPrice");

// Update the content using innerHTML property
if(numberOfKilometers > 0 && userAge > 0 && !isNaN(numberOfKilometers) && !isNaN(userAge))
{
    kmParagraph.innerHTML = "Kilometers you want to run for: " + numberOfKilometers;
    userAgeParagraph.innerHTML = "User Age: " + userAge;
    ticketPriceParagraph.innerHTML = "Ticket Price: " + ticketPrice + "€";
}
else if (isNaN(numberOfKilometers) || isNaN(userAge)) 
{
    kmParagraph.innerHTML = "Kilometers you want to run for is not valid";
    userAgeParagraph.innerHTML = "The user's age is not valid";
    ticketPriceParagraph.innerHTML = "The ticket price is not calculable";
}

