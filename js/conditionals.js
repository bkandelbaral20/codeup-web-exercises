"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(colors) {
   if(colors === "red"){
       return ("Strawberries are red");
   }
    else if(colors === "blue"){
       return ("blue is the color of the sky");
    }
   else if(colors === "cyan"){
   return ("I do not know about cyan");
       } else {
        return ("I have no idea about " + colors + " color");
    }
}
console.log(analyzeColor('blue') );
console.log(analyzeColor('red') );
console.log(analyzeColor('cyan') );
console.log(analyzeColor('green') );



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var color = (random);
function favouriteColors (colors) {
    switch (colors) {
        case "red":
            console.log("Strawberries are red");
            break;

        case "blue":
            console.log("blue is the color of the sky");
            break;

        case "orange":
            console.log("Organges are orange");
            break;

        case "yellow":
            console.log("Sun is are Yellow");
            break;

        default:
            console.log("I have no idea about " + color);
    }
}
    favouriteColors(color);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let color = prompt("Please select a color");
    alert(analyzeColor(color));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
const calculateTotal = function(luckyNumbers, totalAmount){
    switch(luckyNumbers ) {
    case 1:
        return (totalAmount - totalAmount * .1).toFixed(2);

    case 2:
        return (totalAmount - totalAmount * .25).toFixed(2);

    case 3:
        return (totalAmount - totalAmount * .35).toFixed(2);

    case 4:
        return (totalAmount - totalAmount *.5).toFixed(2);

    case 5:
        return 0;

    default:
        return (totalAmount.toFixed(2));
    }
}

console.log(calculateTotal(0,100));
console.log(calculateTotal(1,100));
console.log(calculateTotal(2,100));
console.log(calculateTotal(3,100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = parseFloat(prompt("What is your total Amount ?"));
alert("YOur lucky number is " + luckyNumber);
alert("Your bill before discount is: " +  totalBill);

let totalAfterDiscount = calculateTotal(luckyNumber,totalBill);
alert("Your price after discount is :" + totalAfterDiscount);


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

 let enterNumber = confirm("Would you like to enter a number");
    if (enterNumber) {
        const userInput = parseInt(prompt("Please enter a valid number"));

        if (isNaN(userInput)){
            alert("you did not enter a number ");
        }
        //if user input is a number
        else {
         if (userInput % 2 === 0) {
            alert("It is even number");
        } else {
            alert("it is odd number");
        }
        if (userInput > 0) {
            alert("it is positive number")
        } else {
            alert("it is negative number");
        }
        alert("The number you entered is " + (userInput + 100) + "with 100 added to it");
    }
}
