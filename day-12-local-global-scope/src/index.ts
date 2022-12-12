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
let gameLevel: number = 3;

function createEnemy(): void {
    let enemies: string[] = ["Skeleton", "Zombie", "Alien"];
    if (gameLevel < 5 ) {
        let newEnemy: string = enemies[0];
        console.log("newEnemy", newEnemy); // skeleton
    }

    // console.log("newEnemy2", newEnemy); // error var is not defined

}

createEnemy();
