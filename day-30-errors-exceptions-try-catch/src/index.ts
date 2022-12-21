// Try catch error
// BMI Example
// function bmi(height: number, weight: number): void {
//     try {
//         if (height > 3) {
//             throw "Human Height should not be over 3 meters."
//         }
//
//         let result: number = weight / height ** 2;
//         console.log(result);
//     } catch (e) {
//         console.log("error:", e);
//     }
// }
//
// bmi( 50, 600); // "Human Height should not be over 3 meters."

// Make pai error
let fruits: string[] = ["Apple", "Pear", "Orange"];

function makePie(fruit: number): void {
    try {
        if (fruits[fruit] === undefined) {
            throw "Fruit pie.";
        }
        console.log(`${fruits[fruit]} pie.`);

    } catch (e) {
        console.log("error:", e);
    }
}

console.log(makePie(4));
