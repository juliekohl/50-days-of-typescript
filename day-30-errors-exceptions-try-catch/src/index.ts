// Try catch error
// BMI Example
function bmi(height, weight) {
    try {
        if (height > 3) {
            throw "Human Height should not be over 3 meters."
        }

        let result: number = weight / height ** 2;
        console.log(result);
    } catch (e) {
        console.log("error:", e);
    }
}

bmi( 50, 600); // "Human Height should not be over 3 meters."


