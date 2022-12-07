// Objects
// interface programmingDictionary {
//     [index: string]: number | string;
// }

// const programmingDictionary: object = {
//     bug: "An error in a program that prevents the program from running as expected.",
//     function: "A piece of code that you can easily call over and over again.",
// };
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
// for (let key in programmingDictionary) {
//     console.log(1, key); // key
//     console.log(2, programmingDictionary[key]); // value
// }

// Exercise Grading Program
// let studentScores: object = {
//     Harry: 81,
//     Ron: 78,
//     Hermione: 99,
//     Draco: 74,
//     Neville: 67,
// };
//
// let studentGrades: object = {};
//
// for (let student in studentScores) {
//     let score: number = studentScores[student];
//
//     if (score > 90){
//         studentGrades[student] = "Outstanding";
//         console.log(studentGrades[student] = "Outstanding");
//     } else if (score > 80) {
//         studentGrades[student] = "Exceeds Expectations";
//         console.log(studentGrades[student] = "Exceeds Expectations");
//     } else if (score > 70) {
//         studentGrades[student] = "Acceptable";
//         console.log(studentGrades[student] = "Acceptable");
//     } else {
//         studentGrades[student] = "Fail";
//         console.log(studentGrades[student] = "Fail");
//     }
// }
// console.log(studentGrades);

// Nesting Lists and Dictionaries
// Nesting
// let capitals: object = {
//     france: "Paris",
//     germany: "Berlin",
// };
// console.log(capitals["france"]); // Paris return value

// Nesting a List in a Dictionary
// let travelLog: object = {
//     france: ["Paris", "Lille", "Dijon"],
//     germany: ["Berlin", "Hamburg", "Stuttgart"],
// };
// console.log(travelLog["germany"]); // germany return value ["Berlin","Hamburg","Stuttgart"]

// Nesting Dictionary in a Dictionary
// let travelLog: object = {
//     france: {"citiesVisited": ["Paris", "Lille", "Dijon"], "totalVisits": 12},
//     germany: {"citiesVisited": ["Berlin", "Hamburg", "Stuttgart"], "totalVisits": 5},
// };
// console.log(travelLog["france"]); // france return value

// Nesting Dictionaries in Lists
// let travelLog: [{}, {}] = [
//     {
//         country: "France",
//         citiesVisited: ["Paris", "Lille", "Dijon"],
//         totalVisits: 12,
//     },
//     {
//         country: "Germany",
//         citiesVisited: ["Berlin", "Hamburg", "Stuttgart"],
//         totalVisits: 5,
//     },
// ];
// console.log(1, travelLog[0]); // France return value
// console.log(2, travelLog[0]["citiesVisited"]); // citiesVisited return value ["Paris","Lille","Dijon"]

// Exercise Dictionary in List
interface TravelLocation {
    country: string;
    visits: number;
    cities: string[];
}

let travelLog: TravelLocation[] = [
    {
        country: "France",
        visits: 12,
        cities: ["Paris", "Lille", "Dijon", "Nice"],
    },
    {
        country: "Germany",
        visits: 5,
        cities: ["Berlin", "Hamburg", "Stuttgart", "Munich"],
    },
];

function addNewCountry( name: string, visitCount: number, citiesVisited: string[] ): void {
    let newCountry: TravelLocation = {
        country: name,
        visits: visitCount,
        cities: citiesVisited,
    };

    travelLog.push(newCountry);
}

addNewCountry("Poland", 3, ["Warsaw", "kraków"]);
console.log(travelLog);
