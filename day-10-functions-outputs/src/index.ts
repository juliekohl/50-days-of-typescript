// Function Outputs
// function formatName(fName: string, lName: string): string {
//     let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
//     let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
//     return `${formattedFName} ${formattedLName}`;
// }
//
// formatName("JuLiE", "KoHl");

// Multiple return values
// function formatName(fName: string, lName: string): string {
//     if (fName === " " || lName === " ") {
//         console.log(1, "You didn't provide valid inputs.");
//         return "You didn't provide valid inputs.";
//     }
//
//     let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
//     let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
//
//     return `Result ${formattedFName} ${formattedLName}`;
// }
//
// formatName(" ", " Kohl");

// Exercise Days in Month
// let year: number = 1992;
// let month: number = 2;
// let days: string | number = daysInMonth(year, month);
//
// function isLeap(year): boolean {
//     if (year % 4 == 0) {
//         if (year % 100 == 0) {
//             return year % 400 == 0;
//         } else {
//             return true;
//         }
//     } else {
//         return false;
//     }
// }
//
// function daysInMonth(year, month) {
//     let monthDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//
//     if (month > 12 || month < 1) {
//         return "Invalid month entered";
//     }
//
//     if (month === 2 && isLeap(year)) {
//         return 29;
//     }
//
//     return monthDays[month - 1];
// }
//
// console.log(days);

// Quiz
// 1
// function add(n1: number, n2: number): number {
//     return n1 + n2;
// }
//
// function subtract(n1: number, n2: number): number {
//     return n1 - n2;
// }
//
// function multiply(n1: number, n2: number): number {
//     return n1 * n2;
// }
//
// function divide(n1: number, n2: number): number {
//     return n1 / n2;
// }
//
// add(2, multiply(5, divide(8, 4))); //12
// add(2, subtract(2, multiply(5, divide(8, 4)))); //-6

// 2
// function outerFunction(a: number, b: number): number {
//     function innerFunction(c: number, d: number): number {
//         return c + d;
//     }
//     return innerFunction(a, b);
// }
//
// let result = outerFunction(5, 10);
// console.log("result", result); //15

// 3
// function myFunction(a: number): string {
//     if (a < 40) {
//         return 'Terrible';
//     } else if (a < 80) {
//         return 'Pass';
//     } else {
//         return '"Great';
//     }
// }
//
// myFunction(25); // Terrible
