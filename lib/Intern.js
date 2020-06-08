// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib");

class Intern extends Employee {
    constructor(answers) {
        if (!answers.school) {
            throw new Error("You are missing the Intern's school.");
            }
          this.school = answers.school;
          this.role = "Intern";
        }

    getSchool() {
        return this.school;
    } 
        
    getRole() {
        return this.role;
    }
}
