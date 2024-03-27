#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Enter your first number",
        type: "number",
    },
    {
        name: "secondNumber",
        message: "Enter your second number",
        type: "number",
    },
    {
        name: "operator",
        message: "Select one of the operator to perform operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(chalk.blue(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.red(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log(chalk.green(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.yellow(answer.firstNumber / answer.secondNumber));
}
else {
    console.log(chalk.red("  'ERROR' "));
}
console.log(chalk.bgCyan(answer));
