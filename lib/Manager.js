// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib");

class Manager extends Employee {
    constructor(answers) {
        if (!answers.officeNumber) {
            throw new Error("You are missing the manager's office number.");
            }
          this.officeNumber = answers.officeNumber;
          this.role = "Manager";
        }
       
    getRole() {
        return this.role;
    }
}
