// Objects
// interface programmingDictionary {
//     [index: string]: number | string;
// }

const programmingDictionary: object = {
    bug: "An error in a program that prevents the program from running as expected.",
    function: "A piece of code that you can easily call over and over again.",
};
// console.log(programmingDictionary); // return all object

// Retrieve item
// console.log(programmingDictionary.function); // return value
// console.log(programmingDictionary['function']); // return value

// Add item
// programmingDictionary.loop = "The action of doing something over and over again."
// programmingDictionary['loop'] = "The action of doing something over and over again."
// console.log(programmingDictionary); // add new key and value

// Create an empty dictionary
// const emptyDictionary: object = {};
// console.log(emptyDictionary); // {}

// Edit an item
// programmingDictionary.bug = "Update an item, this bug here!"
// programmingDictionary['bug'] = "Update an item, this bug here!"
// console.log(programmingDictionary);

// Loop through a dictionary
// let key = 'bug';
// console.log(key in programmingDictionary); // true
//
// for (let key in programmingDictionary){
//     console.log(1, key); // key
//     console.log(2, programmingDictionary[key]); // value
// }

// Exercise Grading Program
let studentScores: object = {
    Harry: 81,
    Ron: 78,
    Hermione: 99,
    Draco: 74,
    Neville: 67,
};

let studentGrades: object = {};

for (let student in studentScores) {
    let score: number = studentScores[student];

    if (score > 90){
        studentGrades[student] = "Outstanding";
        console.log(studentGrades[student] = "Outstanding");
    } else if (score > 80) {
        studentGrades[student] = "Exceeds Expectations";
        console.log(studentGrades[student] = "Exceeds Expectations");
    } else if (score > 70) {
        studentGrades[student] = "Acceptable";
        console.log(studentGrades[student] = "Acceptable");
    } else {
        studentGrades[student] = "Fail";
        console.log(studentGrades[student] = "Fail");
    }
}
console.log(studentGrades);
