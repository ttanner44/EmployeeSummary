const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


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

let employee = "";
let allDone = 0;
console.log(allDone);

do {
    promptUser().then(function(employeeType) {
        AllDone = AllDone + 1;
        console.log(allDone);
        if (employeeType.role === "Manager") {
            promptManager().then(function(managerAnswers) {
            let manager = new Manager (managerAnswers.name, managerAnswers.id, manager.Answers.email, managerAnswers.officeNumber);
            employee.push (manager);
            console.log(managerAnswers);
            console.log(allDone);
            });
        
        } else if (employeeType.role === "Intern") {
            promptIntern().then(function(internAnswers) {
            let intern = new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
            employee.push (intern);
            console.log(internAnswers);    
            console.log(allDone);
            });

        } else if (employeeType.role === "Engineer") {
            promptEngineer().then(function(engineerAnswers) {
            let engineer = new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);
            employee.push (engineer);
            console.log(engineerAnswers);
            console.log(allDone);
            });

        } else {
            allDone = 10;
            console.log(allDone);
            console.log("All Done");
        }
    });
} while (allDone < 10);


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
