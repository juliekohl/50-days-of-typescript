// Randomisation
// Math.floor(Math.random() * 5);
// let loveScore: number = Math.floor(Math.random() * 100);
// console.log(`Your love score is ${loveScore}`);
//
// let randomSide: number = Math.floor(Math.random() * (1 + 1));
//
// if (randomSide === 1) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
// }

// Offset and appending items to lists
// let statesOfAmerica: string[] = [
//     "Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut", "Massachusetts", "Maryland",
//     "South Carolina", "New Hampshire", "Virginia", "New York", "North Carolina", "Rhode Island", "Vermont",
//     "Kentucky", "Tennessee", "Ohio", "Louisiana", "Indiana", "Mississippi", "Illinois", "Alabama", "Maine",
//     "Missouri", "Arkansas", "Michigan", "Florida", "Texas", "Iowa", "Wisconsin", "California", "Minnesota",
//     "Oregon", "Kansas", "West Virginia", "Nevada", "Nebraska", "Colorado", "North Dakota", "South Dakota",
//     "Montana", "Washington", "Idaho", "Wyoming", "Utah", "Oklahoma", "New Mexico", "Arizona", "Alaska", "Hawaii"
// ];
// console.log(statesOfAmerica);
// console.log(statesOfAmerica[0]); // Delaware
//
// statesOfAmerica.splice(3, 1, "Georgya"); // replace to Georgia for Georgya
// console.log(1, statesOfAmerica);
//
// let dirtyDozen: string[] = ["Strawberries", "Spinach", "Kale", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears", "Tomatoes", "Celery", "Potatoes"];
// let concat: string[] = statesOfAmerica.concat(dirtyDozen);
// console.log(concat);
//
// console.log("push", statesOfAmerica.push(...dirtyDozen)); // 62
// console.log("new", statesOfAmerica); // add new array to the end

// Exercise Banker Roulette
// let friendsNames: string = "Juliana, Angie, Kelly, Nathi, Gio";
// let splitNames: string[] = friendsNames.split(", ");
// let randomChoice: number = Math.floor(Math.random() * splitNames.length);
// // console.log("randomChoice to pay", randomChoice, splitNames[randomChoice]); // 4 Gio
// console.log(splitNames[randomChoice] + " is going to buy the meal today!");

// let personPay: string = splitNames[randomChoice];
// console.log(personPay + " is going to buy the meal today!"); // pick out random person

// Index Errors and Nested Lists
let fruits: string[] = ["Strawberries", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears"];
console.log("fruits[6]", fruits[6]); // Pears
console.log("fruits[7]", fruits[7]); // undefined

let len_fruits: number = fruits.length;
console.log(len_fruits); // 7
console.log("fruits[len_fruits]", fruits[len_fruits]); // undefined
console.log("fruits[len_fruits - 1]", fruits[len_fruits - 1]); // Pears

let vegetables: string[] = ["Spinach", "Kale", "Tomatoes", "Celery", "Potatoes"];
let dirtyDozen: [string[], string[]] = [fruits, vegetables];

console.log(dirtyDozen); // [[f], [v]]
