// Values used for calculating compound interest
let P = 100000;
let r = 10;
let n = 1;
let t = 3;

// Convert rate from percentage to decimal
r = r / 100;

// Calculate the total amount
let A = P * Math.pow((1 + r / n), n * t);

// Calculate compound interest
let compoundInterest = A - P;

// Display the result in console
console.log("The compound interest after " + t + " years is ₹" + compoundInterest);

// Display the result on the webpage

document.getElementById("result").innerHTML =
    "Compound Interest = ₹" + compoundInterest.toFixed(2);