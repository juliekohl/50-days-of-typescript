// Randomisation
Math.floor(Math.random() * 5);
let loveScore: number = Math.floor(Math.random() * 100);
console.log(`Your love score is ${loveScore}`);

let randomSide: number = Math.floor(Math.random() * (1 + 1));

if (randomSide === 1) {
    console.log("Heads");
} else {
    console.log("Tails");
}
