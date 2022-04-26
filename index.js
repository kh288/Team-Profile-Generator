const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const inquirer = require(`inquirer`);
const fs = require(`fs`);

const htmlGenerate1 = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="sample.css">
    <title>Team Profile</title>
</head>
<body class="text-center bg-light">
    <!-- Top Bar -->
    <div class="bg-secondary text-light p-3">
        <h1>My Team</h1>
    </div>
    <div class="justify-content">
        <!-- Main Area content -->
        <div class="d-md-flex p-3">
            <div class="row gap-3">
                <!-- Generated content goes -->`;

let htmlEmployee = [];

const htmlGenerate2 = 
`            </div>
        </div>

    </div>
</body>
</html>`;

const managerQuestions = [{
    type: `input`,
    message: `Whats the Manager's name?: `,
    name: `name`,
},{
    type: `input`,
    message: `Whats the Manager's id?: `,
    name: `id`,
},{
    type: `input`,
    message: `Whats the Manager's email?: `,
    name: `email`,
},{
    type: `input`,
    message: `Enter an office number: `,
    name: `officeNumber`,
},{
    type: `list`,
    message: `Another Employee?`,
    choices: [`Manager`, `Engineer`, `Intern`, `Exit`],
    name: `role`
}];

const engineerQuestions = [{
    type: `input`,
    message: `Whats the Engineer's name?: `,
    name: `name`,
},{
    type: `input`,
    message: `Whats the Engineer's id?: `,
    name: `id`,
},{
    type: `input`,
    message: `Whats the Engineer's email?: `,
    name: `email`,
},{
    type: `input`,
    message: `Enter your github username: `,
    name: `github`,
},{
    type: `list`,
    message: `Another Employee?`,
    choices: [`Manager`, `Engineer`, `Intern`, `Exit`],
    name: `role`
}];

const internQuestions = [{
    type: `input`,
    message: `Whats the Intern's name?: `,
    name: `name`,
},{
    type: `input`,
    message: `Whats the Intern's id?: `,
    name: `id`,
},{
    type: `input`,
    message: `Whats the Intern's email?: `,
    name: `email`,
},{
    type: `input`,
    message: `Enter the school you attended: `,
    name: `school`,
},{
    type: `list`,
    message: `Another Employee?`,
    choices: [`Manager`, `Engineer`, `Intern`, `Exit`],
    name: `role`
}];

// Returns an employee object that turns into a manger, engineer, or intern
function managerPrompt() {
    inquirer.prompt(managerQuestions)
    .then((answer) => {
        var manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        const htmlManager =
        `<div class="card col-4 p-3 bg-secondary text-light border">
        <h2 id="name">${manager.getName()}</h2>
        <h3 id="role">${manager.getRole()}</h3>
        <ul class="list-group list-group-flush rounded">
            <li id="id" class="list-group-item bg-white">ID: ${manager.getId()}</li>
            <li id="email" class="list-group-item bg-white">Email: ${manager.getEmail()}</li>
            <li id="office-number" class="list-group-item bg-white">Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>`;
        htmlEmployee.push(htmlManager);

        switch(answer.role) {
            case(`Exit`):
                console.log("Done! Creating your HTML file now!");
                generateHTML();
                return;
            case(`Manager`):
                managerPrompt();
                return;
            case(`Engineer`):
                engineerPrompt();
                return;
            case(`Intern`):
                internPrompt();
                return;
            default:
                console.log("Error, not a proper selection");
        }
    });
}

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
    .then((answer) => {
        var engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        const htmlEngineer =
            `<div class="card col-4 p-3 bg-secondary text-light border">
            <h2 id="name">${engineer.getName()}</h2>
            <h3 id="role">${engineer.getRole()}</h3>
            <ul class="list-group list-group-flush rounded">
                <li id="id" class="list-group-item bg-white">ID: ${engineer.getId()}</li>
                <li id="email" class="list-group-item bg-white">Email: ${engineer.getEmail()}</li>
                <li id="office-number" class="list-group-item bg-white">Github: ${engineer.getGithub()}</li>
            </ul>
            </div>`;
        htmlEmployee.push(htmlEngineer);

        switch(answer.role) {
            case(`Exit`):
                console.log("Done! Creating your HTML file now!");
                generateHTML();
                return;
            case(`Manager`):
                managerPrompt();
                return;
            case(`Engineer`):
                engineerPrompt();
                return;
            case(`Intern`):
                internPrompt();
                return;
            default:
                console.log("Error, not a proper selection");
        }
    });
}

function internPrompt() {
    inquirer.prompt(internQuestions)
    .then((answer) => {
        var intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        const htmlIntern =
            `<div class="card col-4 p-3 bg-secondary text-light border">
            <h2 id="name">${intern.getName()}</h2>
            <h3 id="role">${intern.getRole()}</h3>
            <ul class="list-group list-group-flush rounded">
                <li id="id" class="list-group-item bg-white">ID: ${intern.getId()}</li>
                <li id="email" class="list-group-item bg-white">Email: ${intern.getEmail()}</li>
                <li id="office-number" class="list-group-item bg-white">School: ${intern.getSchool()}</li>
            </ul>
            </div>`;
        htmlEmployee.push(htmlIntern);

        switch(answer.role) {
            case(`Exit`):
                console.log("Done! Creating your HTML file now!");
                generateHTML();
                return;
            case(`Manager`):
                managerPrompt();
                return;
            case(`Engineer`):
                engineerPrompt();
                return;
            case(`Intern`):
                internPrompt();
                return;
            default:
                console.log("Error, not a proper selection");
        }
    });
}

function generateHTML() {
    const html = `${htmlGenerate1}${htmlEmployee}${htmlGenerate2}`;
    // console.log(typeof html);
    fs.writeFile(`./dist/generated.html`, html, (error) => {
        if (error) {
            console.log("Couldn't write to file");
        }
    })
}

function intro() {
    console.log("Welcome to the Team Profile Generator!");
    console.log("We start by adding a manager first!");
}

function init() {
    managerPrompt();
}

intro();
init();

// Initial Prompt sequence:

// Employee Name
// Employee Role
// Employee ID
// Employee email

// Manager:
// Office number

// Engineer:
// github

// Intern:
// school

// const employeeQuestions = [{
//     type: `input`,
//     message: `Whats the employee's name?: `,
//     name: `name`,
// },{
//     type: `list`,
//     message: `Choose your Employee's role: `,
//     choices: [`Manager`, `Engineer`, `Intern`],
//     name: `role`,
// },{
//     type: `input`,
//     message: `Whats the employee's id?: `,
//     name: `id`,
// },{
//     type: `input`,
//     message: `Whats the employee's email?: `,
//     name: `email`,
// }];

// async function again() {
//     inquirer
//     .prompt([{
//         type: `list`,
//         message: `Add another Employee?`,
//         choices: [`Yes`, `No`],
//         name: `again`,
//     }]).then((response) => {
//         if (response.again === `Yes`) {
//             init();
//             return;
//         } else {
//             console.log(`Your HTML file shall be generated`);
//             return;
//         }
//     })
// }

// switch(response.role) {
//     case(`Manager`):
//         var man = managerPrompt();
//         var manager = new Manager(response.name, response.role, response.id, response.email, man);
//         const htmlManager =
//             `<div class="card col-4 p-3 bg-secondary text-light border">
//             <h2 id="name">${manager.getName()}</h2>
//             <h3 id="role">${manager.getRole()}</h3>
//             <ul class="list-group list-group-flush rounded">
//                 <li id="id" class="list-group-item bg-white">ID: ${manager.getId()}</li>
//                 <li id="email" class="list-group-item bg-white">Email: ${manager.getEmail()}</li>
//                 <li id="office-number" class="list-group-item bg-white">Office Number: ${manager.officeNumber}</li>
//             </ul>
//             </div>`;
//         htmlEmployee.push(htmlManager);
//         // again();
//         break;
//     case(`Engineer`):
//         var githubName = await engineerPrompt();
//         var engineer = new Engineer(response.name, response.role, response.id, response.email, githubName);
//         const htmlEngineer =
//             `<div class="card col-4 p-3 bg-secondary text-light border">
//             <h2 id="name">${engineer.getName()}</h2>
//             <h3 id="role">${engineer.getRole()}</h3>
//             <ul class="list-group list-group-flush rounded">
//                 <li id="id" class="list-group-item bg-white">ID: ${engineer.getId()}</li>
//                 <li id="email" class="list-group-item bg-white">Email: ${engineer.getEmail()}</li>
//                 <li id="office-number" class="list-group-item bg-white">Github: ${engineer.getGithub()}</li>
//             </ul>
//             </div>`;
//         htmlEmployee.push(htmlEngineer);
//         // again();
//         break;
//     case(`Intern`):
//         var school = await internPrompt();
//         var intern = new Intern(response.name, response.role, response.id, response.email, school);
//         const htmlIntern =
//             `<div class="card col-4 p-3 bg-secondary text-light border">
//             <h2 id="name">${intern.getName()}</h2>
//             <h3 id="role">${intern.getRole()}</h3>
//             <ul class="list-group list-group-flush rounded">
//                 <li id="id" class="list-group-item bg-white">ID: ${intern.getId()}</li>
//                 <li id="email" class="list-group-item bg-white">Email: ${intern.getEmail()}</li>
//                 <li id="office-number" class="list-group-item bg-white">School: ${intern.getSchool()}</li>
//             </ul>
//             </div>`;
//         htmlEmployee.push(htmlIntern);
//         // again();
//         break;
//     }

    // inquirer.prompt([{
    //     type: `list`,
    //     message: `Add an Employee?`,
    //     choices: [`Yes`, `No`],
    //     name: `add`,
    // }])
    // .then(result => {
    //     if (result.add === `Yes`) {
    //         employeePrompt();
    //     }
    //     return result
    // }).then(result => {
    //     if (result.add === `No`) {
    //         generateHTML();
    //     } else {
    //         init();
    //     }
    // })

// Only gets prompted if manager is selected
// async function managerPrompt() {
//     inquirer
//     .prompt(managerQuestions)
//     .then((response) => {
//         return response.officeNumber;
//     })
// }

// Only gets prompted if engineer is selected
// async function engineerPrompt() {
//     inquirer
//     .prompt(engineerQuestions)
//     .then((response) => {
//         return response.officeNumber;
//     })
// }

// Only gets prompted if intern is selected
// async function internPrompt() {
//     inquirer
//     .prompt(internQuestions)
//     .then((response) => {
//         return response.officeNumber;
//     })
// }