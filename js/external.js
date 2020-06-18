
    "use strict";
console.log("Hello from external Javascript")

alert("Welcome to my Website");
let play = confirm("Do you want to play favourite color game");
if (play === true) {
    let color = prompt("what is your favourite color");
    if (color === "blue") {
        alert("Great! blue is my favourite color too!");
    } else {
        alert("Sorry! blue is not my favourite color!")
    }
}
 // Alternate method

let color =prompt("what is your favourite color");
alert("Great! " + color + "is my favourite color too.")

//Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

    var littleM = parseInt(prompt("How many days did you rent little Mermaid ? ") );
    var brotherBear = parseInt(prompt("How many days did you rent Brother bear ?"));
    var hercules = parseInt(prompt("How many days did you rent little Mermaid ?"));

    var totalPay = (littleM + brotherBear + hercules) * 3;

    alert("You owe : $" + totalPay);

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

    var googlePay = 400;
    var amazonPay = 380;
    var facebookPay = 350;

    var goggleHours = parseInt(prompt("How many hours did you worked for Goggle"));
    var amazonHours = parseInt(prompt("How many hours did you worked for Amazon"));
    var facebookHours = parseInt(prompt("How many hours did you worked for Facebook"));

    var totalGogglePay= alert("The total goggle pay is : $" + (googlePay * goggleHours));
    var totalAmazonPay= alert("The total Amazon pay is : $" + (amazonPay * amazonHours));
    var totalFacebookPay= alert("The total Facebook pay is : $" + (facebookPay * facebookHours));

    var totalSalary= (totalGogglePay + totalAmazonPay + totalFacebookPay);

   alert (("The total salary is : $")  + totalSalary);


//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

    var enrolled;
    var notFull = true;
    var notConflict = true;

    enrolled = notFull && notConflict;

    alert("Student can enrolled:" + enrolled);


//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

    var productOffer;
    var buysMoreThan2 = parseInt(prompt("How many items did you purchase ? "));
    var offerHasNotExpired = confirm("press OK if the offer is not expired. ");
    var premiumMember = confirm("Are you a premium member, press OK for yes");

   productOffer = ((buysMoreThan2 && offerHasNotExpired) || premiumMember);

   alert("Offer Applied : " + productOffer);

