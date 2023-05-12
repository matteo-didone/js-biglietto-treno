// Creating basic variables by asking the user
let numberOfKilometers = parseInt(prompt("How many kilometers do you want to run?"));
let userAge = parseInt(prompt("How old are you?"));

// Create variables by using input values
let ticketPrice = 0.21 * numberOfKilometers;

// Create if statements to calculate the price of the ticket
if(userAge < 18)
{
    ticketPrice -= ((ticketPrice)/100)*20;
}

else if(userAge > 65)
{
    ticketPrice -= ((ticketPrice)/100)*40;
}

else if (userAge >= 18 && userAge <= 65)
{
    ticketPrice = ticketPrice;
}

// Create message
let messageKilometersAndAge = "You want to run for" + numberOfKilometers + ". You are " + userAge + " years old, therefore the price of your ticket is going to be " + ticketPrice + "€";

// Display message regarding kilometers, age and potential discount
alert(message);

// Get elements by id
let kmParagraph = document.getElementById("km");
let userAgeParagraph = document.getElementById("userAge");
let ticketPriceParagraph = document.getElementById("ticketPrice");

// Update the content using innerHTML property
kmParagraph.innerHTML = "Kilometers you want to run for " + numberOfKilometers;
userAgeParagraph.innerHTML = "User Age: " + userAge;
ticketPriceParagraph.innerHTML = "Ticket Price: " + ticketPrice + "€";
