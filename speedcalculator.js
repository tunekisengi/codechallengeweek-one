// Declare variables for speed and merit
let speed = 75;
let merit;

// Define the speedcalculator function
function speedcalculator() {
    // Check speed against the limit and calculate merit points accordingly
    if (speed <= 70) {
        // If speed is within the limit, return 'Ok'
        return 'Ok';
    } else if (speed > 70) {
        // If speed exceeds the limit, calculate merit points using the formula
        merit = ((speed - 70) / 5);
        // Check if merit points are greater than 12
        if (merit > 12) {
            // If merit points exceed 12, return 'License suspended'
            return `License suspended`;
        }
    }
    // Return the calculated merit points
    return `points: ${merit}`;
}

// Call the speedcalculator function and log the result to the console
console.log(speedcalculator())
//To run the code type node speedcalculator.js