// Function Outputs
// function formatName(fName: string, lName: string): string {
//     let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
//     let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
//     return `${formattedFName} ${formattedLName}`;
// }
//
// formatName("JuLiE", "KoHl");

// Multiple return values
function formatName(fName: string, lName: string): string {
    if (fName === " " || lName === " ") {
        console.log(1, "You didn't provide valid inputs.");
        return "You didn't provide valid inputs.";
    }

    let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
    let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();

    return `Result ${formattedFName} ${formattedLName}`;
}

formatName(" ", " Kohl");
