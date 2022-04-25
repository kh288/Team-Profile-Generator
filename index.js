const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const inquirer = require(`inquirer`);

var htmlEmployee = [];

const htmlGenerate = 
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
                <!-- Generated content goes -->
                
            </div>
        </div>

    </div>
</body>
</html>`;

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

const employeeQuestions = [{
    type: `input`,
    message: `Whats the employee's name?: `,
    name: `name`,
},{
    type: `list`,
    message: `Choose your Employee's role: `,
    choices: [`Manager`, `Engineer`, `Intern`],
    name: `role`,
},{
    type: `input`,
    message: `Whats the employee's id?: `,
    name: `id`,
},{
    type: `input`,
    message: `Whats the employee's email?: `,
    name: `email`,
}];

const managerQuestions = [{
    type: `input`,
    message: `Enter an office number: `,
    name: `officeNumber`,
}];

const engineerQuestions = [{
    type: `input`,
    message: `Enter your github username: `,
    name: `github`,
}];

const internQuestions = [{
    type: `input`,
    message: `Enter the school you attended: `,
    name: `school`,
}];

// Only gets prompted if manager is selected
function managerPrompt() {
    inquirer
    .prompt(managerQuestions)
    .then((response) => {
        return response.officeNumber;
    })
}

// Only gets prompted if engineer is selected
function engineerPrompt() {
    inquirer
    .prompt(engineerQuestions)
    .then((response) => {
        return response.officeNumber;
    })
}

// Only gets prompted if intern is selected
function internPrompt() {
    inquirer
    .prompt(internQuestions)
    .then((response) => {
        return response.officeNumber;
    })
}

// Returns an employee object that turns into a manger, engineer, or intern
function employeePrompt() {
    inquirer
    .prompt(employeeQuestions)
    .then((response) => {
        switch(response.role) {
            case(`Manager`):
                var office = managerPrompt();
                var manager = new Manager(response.name, response.role, response.id, response.email, office);
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
                break;
            case(`Engineer`):
                var githubName = engineerPrompt();
                var engineer = new Engineer(response.name, response.role, response.id, response.email, githubName);
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
                break;
            case(`Intern`):
                var school = internPrompt();
                var intern = new Intern(response.name, response.role, response.id, response.email, school);
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
                break;
        }
    })
}

function generateHTML(employee) {
    // switch(employee.role) {
    //     case(`Manager`):

    //     case(`Engineer`):

    //     case(`Intern`):

}

function again() {
    inquirer
    .prompt([{
        type: `list`,
        message: `Add another Employee?`,
        choices: [`Yes`, `No`],
        name: `again`,
    }]).then((response) => {
        if (response.again === `Yes`) {
            init();
            return;
        } else {
            console.log(`Your HTML file shall be generated`);
            return;
        }
    })
}

function intro() {
    console.log("Welcome to the Team Profile Generator!");
    console.log("Please fill out the following prompts to create a team");
}

function init() {
    employeePrompt();
    // generateHTML(htmlEmployee)
}

intro();
init();