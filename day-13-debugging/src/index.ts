// DEBUGGING
// Describe Problem
// function myFunction(): void {
//     const range: number[] = [...Array(21).keys()];
//
//     for (let i in range) {
//         if (range[i] === 20) {
//             console.log("You got it");
//         }
//     }
// }
//
// myFunction();

// Reproduce the Bug
// let diceImgs: string[] = ["❶", "❷", "❸", "❹", "❺", "❻"];
// let diceNum: number = Math.floor(Math.random() * 5);
// console.log(diceImgs[diceNum]);

// Play Computer
// let year: number = 1993;
//
// if (year > 1980 && year < 1994) {
//     console.log("You are a millennial.");
// } else if (year >= 1994){
//     console.log("You are a Gen Z.");
// }

// Fix the Errors
// let age: number = 18;
//
// if (age >= 18) {
//     console.log(`You can drive at age ${age}.`);
// } else {
//     console.log(`You can't drive at age ${age}.`);
// }

// Print is Your Friend
// let pages: number = 0;
// let wordPerPage: number = 0;
//
// pages = 40;
// wordPerPage = 250;
//
// let totalWords: number = pages * wordPerPage;
// console.log(totalWords);

// Use a Debugger
// function mutate(aList: number[]): void {
//     let bList: number[] = [];
//     for (let item in aList) {
//         let newItem: number = aList[item] * 2;
//         bList.push(newItem);
//     }
//
//     console.log(bList);
// }
//
// mutate([1, 2, 3, 5, 8, 13]); // [2,4,6,10,16,26]

// Debugging Odd or Even
// let number: number = 3;
// if (number % 2 === 0) {
//     console.log("This is an even number.");
// } else {
//     console.log("This is an odd number.");
// }

// Debugging Leap Year
// let year: number = 1992;
// if (year % 4 === 0) {
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
//     console.log("Not leap year.");
// }

// Debugging FizzBuzz
const range: number[] = [...Array(101).keys()];

for (let number in range) {
    if (range[number] % 3 === 0 && range[number] % 5 === 0) {
        console.log("FizzBuzz");
    } else if (range[number] % 3 === 0) {
        console.log("Fizz");
    } else if (range[number] % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(range[number]);
    }
}
