// Import Employee constructor
const Employee = require('./Employee');

// Manager constructor
class Manager extends Employee {
    constructor (employeeName, id, email, officeNumber) {
        // using super on employee constructor
        super (employeeName, id, email);
        this.officeNumber = officeNumber;
    }
    // Return Office Number from user input
    getOfficeNumber () {
        return this.officeNumber;
    }
    // Return role
    getRole () {
        return "Manager";
    }
}

// export
module.exports = Manager;