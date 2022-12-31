// Import Employee constructor
const Employee = require('./Employee');

// Manager constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // using super on employee constructor
        super (name, id, email);
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
module.export = Manager;