#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log((chalk.yellowBright)(",,,,,,,WELCOME TO FAJ QUIZ SYSTEM,,,,,,"));
console.log((chalk.yellowBright)("You are required to gain maximum 4 points for the window."));
let points = 0;
//Question # 01
let Question1 = await inquirer.prompt([
    {
        name: "one",
        message: chalk.blueBright("Typescript is a superset off?"),
        type: "list",
        choices: ["Python", "Javascript", "c++", "Java"]
    }
]);
if (Question1.one == "Javascript") {
    console.log((chalk.greenBright)("Your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("Your answer is incorrect!"));
}
//Question # 02
let Question2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.blueBright("Capital of Pakistan?"),
        type: "list",
        choices: ["Karachi", "Lahore", "Islamabad", "KPK"]
    }
]);
if (Question2.two == "Islamabad") {
    console.log((chalk.greenBright)("Your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("Your answer is incorrect!"));
}
//Question # 03
let Question3 = await inquirer.prompt([
    {
        name: "three",
        message: chalk.blueBright(" Who is the founder of Chatgpt?"),
        type: "list",
        choices: ["Mark Zuckerberg", "Elon Musk", "Sam Altman", "Bill Gates"]
    }
]);
if (Question3.three == "Sam Altman") {
    console.log((chalk.greenBright)("Your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("Your answer is incorrect!"));
}
//Question # 04 
let Question4 = await inquirer.prompt([
    {
        name: "four",
        message: chalk.blueBright(" Typescript is develop and maintain by?"),
        type: "list",
        choices: ["Google", "Microsoft", "Facebook", "Mozilla"]
    }
]);
if (Question4.four == "Microsoft") {
    console.log((chalk.greenBright)("Your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("Your answer is incorrect!"));
}
//Question # 05
let Question5 = await inquirer.prompt([
    {
        name: "five",
        message: chalk.blueBright(" Who is the governor of Sindh?"),
        type: "list",
        choices: ["Bilawal Bhutto Zardari", "Sardar Saleem Haider khan", "Kamran Khan Tessori", "Maryum Nawaz"]
    }
]);
if (Question5.five == "Kamran Khan Tessori") {
    console.log((chalk.greenBright)("Your answer is correct!"));
    points++;
}
else {
    console.log((chalk.redBright)("Your answer is incorrect!"));
}
//Output conditions
if (points >= 4) {
    console.log((chalk.greenBright)("Congratulations!"));
    console.log((chalk.greenBright)(`Your point: ${points}`));
}
else {
    console.log((chalk.redBright)("Your loss! try next time"));
    console.log((chalk.redBright)(`Your point: ${points}`));
}
