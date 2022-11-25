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

// High Score
let studentHeights: string[] = "156 178 165 171 187".split(" ");
studentHeights.map(studentScores => console.log(2, Number(studentScores)));

let totalHeight: number = 0;
for (let height in studentHeights) {
    console.log("height", Number(studentHeights[height]));
    totalHeight += Number(studentHeights[height]);
    console.log(`total height = ${totalHeight}`);
}

let NumberOfStudents: number = 0;
for (let student in studentHeights) {
    console.log("Number of students", Number(studentHeights[student]));
    NumberOfStudents += 1;
    console.log(`Number of students = ${NumberOfStudents}`);
}

let average_height: number = Math.round(totalHeight / NumberOfStudents);
console.log("average_height", average_height);
