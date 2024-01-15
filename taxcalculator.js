// TAX CALCULATOR

// Declare all the variables using a single let statement
let totalTaxes, payeAmount, NHIF, netSalary, taxmssg, nssfDeductions;

// Declare and initialize gross salary
let grossSalary = 20000; 

// Define the taxCalculator function
function taxCalculator() {
    // Define a nested function for calculating paye
    const payecalculator = function() {
        // Calculate paye based on gross salary using different tax brackets
        if (grossSalary <= 24000) {
            paye = grossSalary * 0.01;
        } else if (grossSalary > 24001 && grossSalary <= 32333) {
            paye = grossSalary * 0.25;
        } else if (grossSalary > 32334 && grossSalary <= 500000) {
            paye = grossSalary * 0.30;
        } else if (grossSalary >= 500001 && grossSalary < 800000) {
            paye = grossSalary * 0.325;
        } else if (grossSalary >= 800000) {
            paye = grossSalary * 0.35;
        }

        return paye;
    };

    // Define a nested function for calculating NSSF deductions
    const NSSFCalculator = function() {
        nssfDeductions = grossSalary * 0.06;
        return nssfDeductions;
    };

    // Define a nested function for calculating NHIF deductions using a switch statement
    const nhifCalculator = function (){
        switch(true){
            case grossSalary < 6000:
                nhif = 150;
                break; 
            case grossSalary >= 6000 && grossSalary <= 7999:
                nhif = 300;
                break;    
            case grossSalary >= 8000 && grossSalary <= 11999:
                nhif = 400;
                break;    
            case grossSalary >= 12000 && grossSalary <= 14999:
                nhif = 500;
                break;    
            case grossSalary >= 15000 && grossSalary <= 19999:
                nhif = 600;
                break;    
            case grossSalary >= 20000 && grossSalary <= 24999:
                nhif = 750;
                break;    
            case grossSalary >= 25000 && grossSalary <= 29999:
                nhif = 850;
                break;    
            case grossSalary >= 30000 && grossSalary <= 34999:
                nhif = 900;
                break;  
            case grossSalary >= 35000 && grossSalary <= 39999:
                nhif = 950;
                break;  
            case grossSalary >= 40000 && grossSalary <= 44999:
                nhif = 1000;
                break;    
            case grossSalary >= 45000 && grossSalary <= 49999:
                nhif = 1100;
                break;
            case grossSalary >= 50000 && grossSalary <= 59999:
                nhif = 1200;
                break;
            case grossSalary >= 60000 && grossSalary <= 69999:
                nhif = 1300;
                break;
            case grossSalary >= 70000 && grossSalary <= 79999:
                nhif = 1400;
                break;
            case grossSalary >= 80000 && grossSalary <= 89999:
                nhif = 1500;
                break;
            case grossSalary >= 90000 && grossSalary <= 99999:
                nhif = 1600;
                break;
            case grossSalary >= 100000:
                nhif = 1700;
                break;
            default:
                nhif = 0;
        
     
        }
        return nhif;   
}

    // Call the nested functions to calculate paye, NSSF, and NHIF deductions
    payeAmount = payecalculator();
    nssfDeductions = NSSFCalculator();
    NHIF = nhifCalculator();

    // Calculate total taxes and net salary
    totalTaxes = paye + NHIF + nssfDeductions;
    netSalary = grossSalary - totalTaxes;

    // Return a formatted message with the calculated values
    return `Hello, your gross salary is ${grossSalary}, NHIF is ${NHIF}, your paye is ${paye} and your nssf deduction is ${nssfDeductions}. Hence your total taxation is ${totalTaxes} and your Net salary is ${netSalary}`;
}

// Call the taxCalculator function and store the result in the taxmssg variable
taxmssg = taxCalculator();

// Log the formatted message to the console
console.log(taxmssg);
// you can play around with the values for gross salary to get different answers