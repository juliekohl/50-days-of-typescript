// For Loop with lists
// let fruits: string[] = ["Apple", "Peach", "Pear"];
// console.log(fruits);

// for (let fruit in fruits) {
//   console.log("fruit", fruits[fruit]);
//   console.log(fruits[fruit] + " Pie");
//   console.log(fruits);
// }

// fruits.map(fruit => console.log(fruit));

// fruits.map(fruit => console.log(fruit + " Pie"));

// Average Height
// let studentHeights: string[] = "156 178 165 171 187".split(" ");
// studentHeights.map(studentScores => console.log(2, Number(studentScores)));
//
// let totalHeight: number = 0;
// for (let height in studentHeights) {
//     console.log("height", Number(studentHeights[height]));
//     totalHeight += Number(studentHeights[height]);
//     console.log(`total height = ${totalHeight}`);
// }
//
// let NumberOfStudents: number = 0;
// for (let student in studentHeights) {
//     console.log("Number of students", Number(studentHeights[student]));
//     NumberOfStudents += 1;
//     console.log(`Number of students = ${NumberOfStudents}`);
// }
//
// let average_height: number = Math.round(totalHeight / NumberOfStudents);
// console.log("average_height", average_height);

// High Score
// let studentScores: number[] = [78, 65, 89, 86, 55, 100, 64, 89, 90];
// studentScores.map(score => {
//     let heighestScore: number = 0;
//     for (let score in studentScores) {
//         if (studentScores[score] > heighestScore) {
//             heighestScore = studentScores[score];
//         }
//     };
//     console.log(`The highest score in the class is: ${heighestScore}`);
// });

// Random
// const range: number[] = [...Array(10).keys()];
// console.log(range); // [0,1,2,3,4,5,6,7,8,9]

// const start: number = 0;
// const end: number = 9;
// const step: number = 1;
// const arrayLength: number = Math.floor(((end - start) / step)) + 1;
// const range: number[] = [...Array(arrayLength).keys()].map(x => (x * step) + start);
// console.log("range", range); // [0,1,2,3,4,5,6,7,8,9]

// const start: number = 1;
// const end: number = 11;
// const range: number[] = [...Array(end - start + 1).keys()].map(x => x + start);
// console.log("range", range); // [1,2,3,4,5,6,7,8,9,10,11]

// const start: number = 1;
// const end: number = 11;
// const step: number = 3;
// const arrayLength: number = Math.floor(((end - start) / step)) + 1;
// const range: number[] = [...Array(arrayLength).keys()].map(x => (x * step) + start);
// console.log("range", range); // [1,4,7,10]

// total
// const start: number = 1;
// const end: number = 100;
// const range: number[] = [...Array(end - start + 1).keys()].map(x => x + start);
//
// let sum: number = 0;
// for (let number in range) {
//     console.log("number", range[number]);
//     sum += range[number]
// }
// console.log("sum", sum); // 5050

// Add even numbers
// const start: number = 2;
// const end: number = 101;
// const step: number = 2;
// const arrayLength: number = Math.floor(((end - start) / step)) + 1;
// const range: number[] = [...Array(arrayLength).keys()].map(x => (x * step) + start);
// let evenSum: number = 0;
// for (let number in range) {
//     console.log("number", range[number]);
//     evenSum += range[number];
// }
// console.log("evenSum", evenSum); // 2550

// OR
// const start: number = 2;
// const end: number = 101;
// const range: number[] = [...Array(end - start + 1).keys()].map(x => x + start);
//
// let evenSum: number = 0;
// for (let number in range) {
//     console.log("number", range[number]);
//     if (range[number] % 2 === 0) {
//         evenSum += range[number]
//     }
// }
// console.log("evenSum", evenSum); // 2550
