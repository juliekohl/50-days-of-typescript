// Function Outputs
// function formatName(fName: string, lName: string): string {
//     let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
//     let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
//     return `${formattedFName} ${formattedLName}`;
// }
//
// formatName("JuLiE", "KoHl");

// Multiple return values
// function formatName(fName: string, lName: string): string {
//     if (fName === " " || lName === " ") {
//         console.log(1, "You didn't provide valid inputs.");
//         return "You didn't provide valid inputs.";
//     }
//
//     let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
//     let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
//
//     return `Result ${formattedFName} ${formattedLName}`;
// }
//
// formatName(" ", " Kohl");

// Exercise Days in Month
let year: number = 1992;
let month: number = 2;
let days: string | number = daysInMonth(year, month);

function isLeap(year): boolean {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            return year % 400 == 0;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

function daysInMonth(year, month) {
    let monthDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month > 12 || month < 1) {
        return "Invalid month entered";
    }

    if (month === 2 && isLeap(year)) {
        return 29;
    }

    return monthDays[month - 1];
}

console.log(days);
