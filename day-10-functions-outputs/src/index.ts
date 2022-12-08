// Functions Outputs
function formatName(fName: string, lName: string): string {
    let formattedFName: string = fName.charAt(0).toUpperCase() + fName.slice(1).toLowerCase();
    let formattedLName: string = lName.charAt(0).toUpperCase() + lName.slice(1).toLowerCase();
    return formattedFName + " " + formattedLName;
}

formatName("JuLiE", "KoHl");
