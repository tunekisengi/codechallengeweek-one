// Declare variables for marks and username
let marks = 50;
let username = 'kisengi';

// Define the calculatingGrade function
function calculatingGrade() {
    let grade;
    switch (true) {
        case marks >= 80 && marks <= 100:
            grade = 'A';
            break;
        case marks >= 60 && marks <= 79:
            grade = 'B';
            break;
        case marks >= 49 && marks <= 59:
            grade = 'C';
            break;
        case marks >= 40 && marks <= 48:
            grade = 'D';
            break;
        case marks < 40 && marks >= 0:
            grade = 'E';
            break;
        case marks > 100 || marks <= -1:
            console.error('Invalid input, kindly provide valid marks.');
            break;
        default:
            return 'Unable to calculate grade, please input your marks.';
    }
    return grade;
}

// Call the calculatingGrade function and store the result in grademessage variable
let grademessage = calculatingGrade();

console.log(`Hello ${username}, your current grade is ${grademessage}.`);