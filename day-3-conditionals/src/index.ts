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
// let height: number = 1.57;
// let weight: number = 43;
// let bmi: number = (weight / height ** 2);
// let bmiRound: number = Math.round(bmi);
//
// if (bmiRound < 18.5){
//     console.log(`Youe BMI is ${bmiRound}, you are underweight.`);
// } else if (bmiRound < 25) {
//     console.log(`Youe BMI is ${bmiRound}, you have a normal weight.`);
// } else if (bmiRound < 30) {
//     console.log(`Youe BMI is ${bmiRound}, you are slightly overweight.`);
// } else if (bmiRound < 35) {
//     console.log(`Youe BMI is ${bmiRound}, you are obese.`);
// } else {
//     console.log(`Youe BMI is ${bmiRound}, you are clinically obese.`);
// }

// Exercise Leap Year
// let year: number = 1992;
//
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("Leap year.");
//         } else {
//             console.log("Not leap year.");
//         }
//     } else {
//         console.log("Leap year.");
//     }
// } else {
//     console.log("Not leap year");
// }

// Multiple if statements
// console.log("Welcome to the rollercoaster!");
// let height: number = 157;
//
// if (height >= 120) {
//     console.log("You can ride the rollercoaster!");
//     let age: number = 37;
//     let bill: number = 0;
//     let photo: number = 0;
//
//     if (age < 12) {
//         bill = 5;
//         photo = 3;
//         console.log(`Child tickets are ${bill + photo}`);
//     } else if (age <= 18) {
//         bill = 7;
//         photo = 3;
//         console.log(`Youth tickets are ${bill + photo}`);
//     } else {
//         bill = 12;
//         photo = 3;
//         console.log(`Adult tickets are ${bill + photo}`);
//     }
//
// } else {
//     console.log("Sorry, you have to grow taller before you can ride.");
// }

// Exercise Pizza Order
// console.log("Welcome to Python Pizza Deliveries!");
// let size: string = "L";
// let add_pepperoni: string = "Y";
// let extra_cheese: string = "Y";
//
// let bill: number = 0;
//
// if (size === "S") {
//     bill = 15;
// } else if (size === "M") {
//     bill = 20;
// } else {
//     bill = 25;
// }
//
// if (add_pepperoni == "Y") {
//     if (size === "S") {
//         bill += 2;
//     } else {
//         bill += 3;
//     }
// }
//
// if (extra_cheese === "Y") {
//     bill += 1;
// }
//
// console.log(`You final bill is: ${bill}`);

// logical Operators
console.log("Welcome to the rollercoaster!");
let height: number = 157;

if (height >= 120) {
    console.log("You can ride the rollercoaster!");
    let age: number = 50;
    let bill: number = 0;
    let photo: number = 0;

    if (age < 12) {
        bill = 5;
        photo = 3;
        console.log(`Child tickets are ${bill + photo}`);
    } else if (age <= 18) {
        bill = 7;
        photo = 3;
        console.log(`Youth tickets are ${bill + photo}`);
    } else if (age >= 45 && age <= 55) {
        console.log("Everything is going to be ok. Have a free ride on us!");
    } else {
        bill = 12;
        photo = 3;
        console.log(`Adult tickets are ${bill + photo}`);
    }

} else {
    console.log("Sorry, you have to grow taller before you can ride.");
}
