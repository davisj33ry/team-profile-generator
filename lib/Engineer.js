// Import Employee constructor
const Employee = require('./Employee');

// Engineer constructor
class Engineer extends Employee {
    constructor (employeeName, id, email, ghID) {
        // using super on employee constructor
        super (employeeName, id, email);
        this.ghID = ghID;
    }
    // Return Github ID from user input
    getGHID () {
        return this.ghID;
    }
    // Return role
    getRole () {
        return "Engineer";
    }
}

// export
module.exports = Engineer;