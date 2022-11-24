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
let statesOfAmerica: string[] = [
    "Delaware", "Pennsylvania", "New Jersey", "Georgia", "Connecticut", "Massachusetts", "Maryland",
    "South Carolina", "New Hampshire", "Virginia", "New York", "North Carolina", "Rhode Island", "Vermont",
    "Kentucky", "Tennessee", "Ohio", "Louisiana", "Indiana", "Mississippi", "Illinois", "Alabama", "Maine",
    "Missouri", "Arkansas", "Michigan", "Florida", "Texas", "Iowa", "Wisconsin", "California", "Minnesota",
    "Oregon", "Kansas", "West Virginia", "Nevada", "Nebraska", "Colorado", "North Dakota", "South Dakota",
    "Montana", "Washington", "Idaho", "Wyoming", "Utah", "Oklahoma", "New Mexico", "Arizona", "Alaska", "Hawaii"
];
console.log(statesOfAmerica);
console.log(statesOfAmerica[0]); // Delaware

statesOfAmerica.splice(3, 1, "Georgya"); // replace to Georgia for Georgya
console.log(1, statesOfAmerica);

let dirtyDozen: string[] = ["Strawberries", "Spinach", "Kale", "Nectarines", "Apples", "Grapes", "Peaches", "Cherries", "Pears", "Tomatoes", "Celery", "Potatoes"];
let concat: string[] = statesOfAmerica.concat(dirtyDozen);
console.log(concat);

console.log("push", statesOfAmerica.push(...dirtyDozen)); // 62
console.log("new", statesOfAmerica); // add new array to the end