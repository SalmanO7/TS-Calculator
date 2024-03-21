import inquirer from 'inquirer';
let result = await inquirer.prompt([
    { massage: "Enter Your First Number", type: "number", name: "firstNumber" },
    { massage: "Enter Your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Which operation you want to perform",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (result.operation == "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
else if (result.operation == "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
else if (result.operation == "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
else if (result.operation == "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
else {
    console.log("Not Any Number Found");
}
