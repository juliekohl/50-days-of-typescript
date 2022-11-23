// Conditional

// console.log("Welcome to the rollercoaster!");
// let height: number = 157
//
// if (height >= 120) {
//     console.log("You can ride the rollercoaster!");
// } else {
//     console.log("Sorry, you have to grow taller before you can ride.");
// }

// Exercises
// let number: number = 777;
//
// if (number % 2 == 0) {
//     console.log("This is an even number.");
// } else {
//     console.log("This is an odd number.");
// }

// Nested if, else if, else
// console.log("Welcome to the rollercoaster!");
// let height: number = 121;
//
// if (height >= 120) {
//     console.log("You can ride the rollercoaster!");
//     let age: number = 10;
//
//     if (age < 12) {
//         console.log("Please pay $5.");
//     } else if (age <= 18) {
//         console.log("Please pay $7.");
//     } else {
//         console.log("Please pay $12.");
//     }
// } else {
//     console.log("Sorry, you have to grow taller before you can ride.");
// }

// Exercises BMI
let height: number = 1.57;
let weight: number = 43;
let bmi: number = (weight / height ** 2);
let bmiRound: number = Math.round(bmi);

if (bmiRound < 18.5){
    console.log(`Youe BMI is ${bmiRound}, you are underweight.`);
} else if (bmiRound < 25) {
    console.log(`Youe BMI is ${bmiRound}, you have a normal weight.`);
} else if (bmiRound < 30) {
    console.log(`Youe BMI is ${bmiRound}, you are slightly overweight.`);
} else if (bmiRound < 35) {
    console.log(`Youe BMI is ${bmiRound}, you are obese.`);
} else {
    console.log(`Youe BMI is ${bmiRound}, you are clinically obese.`);
}
