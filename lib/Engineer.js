// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // if (!gitHub) {
        //     throw new Error("You are missing the Engineer's GitHub ID");
        //     }
          super (name, id, email);
          this.github = github;
        }

    getGithub() {
        return this.github;
    } 
        
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
