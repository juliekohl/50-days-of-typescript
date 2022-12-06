// Function
// function greet(): void {
//     console.log("Hello");
// }
//
// greet(); // "Hello"

// function greet(name: string): void {
//     console.log(`Hello ${name}!`);
// }
//
// greet("Julie");

function greet(name: string, location: string): void {
    console.log(`Hello ${name}!`);
    console.log(`What is it like in ${location}!`);
}

greet("Julie", "Paris");
