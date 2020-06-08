// TODO: Write code to define and export the Employee class

class Employee {
    constructor(answers) {
    if (!answers.name) {
        throw new Error("You are missing the employee's name.");
        }
        if (!answers.id) {
        throw new Error("You are missing the employee's ID.");
        }
        if (!answers.email) {
        throw new Error("You are missing the employee's email.");
        }
        if (!answers.role) {
            throw new Error("You are missing the employee's role.");
            }
      this.name = answers.name;
      this.id = answers.id;
      this.email = answers.email;
      this.role = "Employee";
    }
   
    getName() {
      return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }  
    getRole() {
        return this.role;
    }
  }
  
  module.exports = Employee;