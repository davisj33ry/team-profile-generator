// Employee class
class Employee {
    constructor (employeeName, id, email) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email
    }
    // Return role from user input
    getRole () {
        return this.role;
    }
    // Return name from user input
    getName () {
        return this.employeeName;
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