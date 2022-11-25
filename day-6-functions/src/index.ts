// Function
// function myFunction(): void {
//     console.log("Hello");
//     console.log("Bye");
// }
//
// myFunction();

// While
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     alert( i );
//     i++;
// }

// let i = 3;
// while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
//     alert( i );
//     i--;
// }

const cars: string[] = ["BMW", "Volvo", "Saab", "Ford"];
let car: number = 0;
let text = " ";

while (cars[car]) {
    text += cars[car];
    car++;
}
