// Namespaces Local vs. Global Scope
//Scope
// let enemies: number = 1;
//
// function increaseEnemies(): void {
//     enemies = 2;
//
//     console.log(`enemies inside function: ${enemies}`); // 2
// }
//
// console.log(`enemies outside function: ${enemies}`); //1
//
// increaseEnemies();
// console.log(`enemies outside function: ${enemies}`); //2

// Local Scope
// function drinkPotion(): void {
//     let potionStrength: number = 2;
//     console.log(potionStrength); // 2
// }
//
// drinkPotion();
// // console.log(potionStrength); // error var is not defined

// Global Scope
// let playerHealth: number = 10;
//
// function drinkPotion(): void {
//     let potionStrength: number = 2;
//     console.log(potionStrength); // 2
// }
//
// drinkPotion();
// console.log(playerHealth); // 10

// There is no Block Scope
// let gameLevel: number = 3;
//
// function createEnemy(): void {
//     let enemies: string[] = ["Skeleton", "Zombie", "Alien"];
//     if (gameLevel < 5 ) {
//         let newEnemy: string = enemies[0];
//         console.log("newEnemy", newEnemy); // skeleton
//     }
//
//     // console.log("newEnemy2", newEnemy); // error var is not defined
//
// }
//
// createEnemy();

// Modify a Global Variable
// let enemies: number = 1;
//
// function increaseEnemies(): number {
//     console.log(`enemies inside function: ${enemies}`); // 1
//     return enemies ++;
// }
//
// console.log(`enemies outside function: ${enemies}`); // 2
//
// increaseEnemies();
// console.log(`enemies outside function: ${enemies}`); // 2

// Constants & Global Scope
// const pi: number = 3.14159;
// let url: string = "https://www.google.com";
// const twitter: string = "@JCochenski";

// Project - Number Guessing Game
const easyLevelTurns: number = 10;
const hardLeverTurns: number = 5;

function checkAnswer(guess, answer, turns): number {
    if (guess > answer) {
        console.log("Too high.");
        return turns --;
    } else if (guess < answer) {
        console.log("Too low.");
        return turns --;
    } else {
        console.log(`You got it! The answer was ${answer}.`);
        return answer;
    }
}

function setDifficulty(): number {
    let level: string = "hard";

    if (level === "easy") {
        console.log("easy", easyLevelTurns);
        return easyLevelTurns;
    } else {
        console.log("hard", hardLeverTurns);
        return hardLeverTurns;
    }
}

function game(): void {
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 1 and 100.");

    let answer: number =  Math.floor(Math.random() * 100);
    console.log("answer", answer);

    let turns: number = setDifficulty();
    let guess: number = 0;

    if (guess !== answer) {
        console.log(`You have ${turns} attempts remaining to guess the number.`);
        guess = 72;

        turns = checkAnswer(guess, answer, turns);
        if (turns === 0) {
            console.log("You've run out of guesses, you lose.");
        }
    } else if (guess !== answer) {
        console.log("Guess again.");
    }
}

game();
