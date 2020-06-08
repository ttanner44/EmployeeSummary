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
        type: "input",
        name: "name",
        message: "What is your employee's name?"
      },
      {
        type: "number",
        name: "Id",
        message: "What is your employee's ID Number??"
      },
      {
        type: "input",
        name: "email",
        message: "What is your employee's email?"
      },
      {
        type: "list",
        name: "role",
        message: "What is the project name?",
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
      },
    ]);
  }

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

let anotherEmployee = true;

while (anotherEmployee = true) {

    promptUser()
    .then(function(answers) {
        If (answers.role="manager") {
            promptManager(answers);
        } else if (answers.role="intern") {
            promptIntern(answers);
        } else if 

    })



} 

promptUser()


  .then(function(answers) {
    const queryUrl = `https://api.github.com/users/${answers.github}`;
    axios
      .get(queryUrl)
      .then(function(res) {
        answers.image = res.data.avatar_url;
        if (res.data.email !== null) {
          answers.email = res.data.email;
        } else {
          answers.email = "timtanner@tanner-companies.com";
        };
        // console.log(answers);
        const data = generateMD(answers);
        writeFileAsync("readme.md", data);
        console.log("Successfully wrote to readme.md");
      });
  })
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
