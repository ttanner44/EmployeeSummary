const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const writeFileAsync = util.promisify(fs.writeFile);


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What type of employee are you adding?",
            choices: ['Manager', 'Engineer', 'Intern', 'All Done'],
        },
    ]);
}

function promptManager() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?"
          },
          {
            type: "number",
            name: "id",
            message: "What is the Manager's ID Number?"
          },
          {
            type: "input",
            name: "email",
            message: "what is the Managers's email?"
          },
          {
            type: "number",
            name: "officeNumber",
            message: "what is the Managers's office number?"
          },
    ]);
  }

  function promptEngineer() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?"
          },
          {
            type: "number",
            name: "id",
            message: "What is the Engineer's ID Number?"
          },
          {
            type: "input",
            name: "email",
            message: "what is the Engineer's email?"
          },
          {
            type: "input",
            name: "github",
            message: "what is the engineer's github ID?"
          },
    ]);
  }

  
  function promptIntern() {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?"
          },
          {
            type: "number",
            name: "id",
            message: "What is the Intern's ID Number?"
          },
          {
            type: "input",
            name: "email",
            message: "what is the Intern's email?"
          },
          {
            type: "input",
            name: "github",
            message: "Where is the Intern going to school?"
          },
    ]);
  }

let employee = [];
let allDone = 0;
console.log(allDone);

  
function prompt () {

  do {

    allDone = allDone + 1;

    promptUser().then(function(employeeType) {
      
      switch (employeeType.role) {
        
        case "Manager": 
          promptManager().then(function(managerAnswers) {
            employee.push (new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber));
            console.log(employee); 
            }) 
            break;

        case "Intern": 
          promptIntern().then(function(internAnswers) {
            employee.push (new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school));
            console.log(employee);
            })
            break;

        case "Engineer": 
          promptEngineer().then(function(engineerAnswers) {
            employee.push (new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github));
            console.log(employee);
            }) 
            break;
          
        default:
          allDone = 10;
          console.log(employee)
      }
    });

  } while (allDone < 10);

}

prompt ();

module.exports = employee;

// htmlRenderer (employee);

// writeFileAsync(outputPath, html);
