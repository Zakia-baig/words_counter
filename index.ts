#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta("\n\t\t WORDS COUNTER\n"));
console.log(chalk.magenta("=".repeat(50)));

let answers= await inquirer.prompt({
    name: "sentence",
    type:"input",
    message:chalk.green.bold("Enter your sentence!")

});
let words= answers.sentence.trim().split(" ");
console.log(chalk.bold.green("Sentence Words:"));
console.log(chalk.bold(words));
console.log(chalk.bold.yellow(`\n Words count:${words.length}`));
