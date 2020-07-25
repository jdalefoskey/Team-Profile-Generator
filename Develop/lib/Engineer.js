// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, email, id, role, gitHubUserName) {
        super(name, email, id, role);
        this.gitHubUserName = gitHubUserName;
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
    getHub() {
        return this.gitHubUserName;
    }
};

module.exports = Engineer;