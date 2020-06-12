// Initiating required files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const util = require("util");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer");

// Promisify writeFileAsync
const writeFileAsync = util.promisify(fs.writeFile);

// Initial prompt "What type of employee?"
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

// Questions if a Manager
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

  // Questions if an Engineer
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
  
  // Questions if an Intern
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
            name: "school",
            message: "Where is the Intern going to school?"
          },
    ]);
  }

// Initiating employee array
let employee = [];
  
// Main Function
function prompt () {

    // Prompt for initial 
    promptUser().then(function(employeeType) {
      

      // Switch initiates the righ type questions depending upon employee type
      switch (employeeType.role) {
        
        // Initiaties Manager Questions; then pushes answers to employee array; then re-initiates prompt function
        case "Manager": 
          promptManager().then(function(managerAnswers) {
            employee.push (new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber));
            prompt(); 
            }) 
            break;

        // Initiaties Intern Questions; then pushes answers to employee array; then re-initiates prompt function
        case "Intern": 
          promptIntern().then(function(internAnswers) {
            employee.push (new Intern (internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school));
            prompt(); 
            }) 
            break;

        // Initiaties Engineer Questions; then pushes answers to employee array; then re-initiates prompt function      
        case "Engineer": 
          promptEngineer().then(function(engineerAnswers) {
            employee.push (new Engineer (engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github));
            prompt(); 
            }) 
            break;

        // All done with employees; initiate HTML call and write file.   
        default:
          const employeeHtml = render (employee);
          writeFileAsync(path.join(__dirname, "./output/team.html"), employeeHtml)
          .catch ((err)=> {
          });
      }
    });
}

// Initial call of the function
prompt ();

module.exports = employee;

