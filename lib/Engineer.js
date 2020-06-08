// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib");

class Engineer extends Employee {
    constructor(answers) {
        if (!answers.GitHub) {
            throw new Error("You are missing the Engineer's GitHub ID");
            }
          this.school = answers.school;
          this.role = "Engineer";
        }

    getSchool() {
        return this.school;
    } 
        
    getRole() {
        return this.role;
    }
}
