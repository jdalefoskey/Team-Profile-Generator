// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, email, id, role) {
      this.name = name;
      this.email = email;
      this.id = id;
      this.role = role;
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