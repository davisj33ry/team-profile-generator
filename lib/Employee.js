// Employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    // Return name from user input
    getName () {
        return this.name;
    }
    // Return ID from user input
    getID () {
        return this.id;
    }
    // Return Eamil from user input
    getEmail () {
        return this.email;
    }
    // Return role
    getRole () {
        return "Employee";
    }
}

//  Export
module.exports = Employee;