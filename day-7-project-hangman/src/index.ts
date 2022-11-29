// The Hangman Game
let wordList: string[] = [
    'cesar',
    'juliana',
    'love'
];

let chosenWordIndex: number = Math.floor(Math.random() * wordList.length);
let chosenWord: string = wordList[chosenWordIndex];
let chosenWordChar: string[] = chosenWord.split('');
let display: string = " ";
let endOfGame: boolean = false;
let lives: number = 6;

console.log(`The solutions is ${chosenWord}`);

for (let _ in chosenWordChar) {
    console.log("blanks", chosenWordChar[_]);
    display += " _ ";
    console.log(`The blank is ${display}`);
}

if (endOfGame === false) {
    if (" - " !== display) {
        endOfGame = true;
        console.log("You win!");
    }
}
