// Import Employee constructor
const Employee = require('./Employee');

// Intern constructor
class Intern extends Employee {
    constructor (employeeName, id, email, school) {
        // using super on employee constructor
        super (employeeName, id, email);
        this.school = school;
    }
    // Return school from user input
    getSchool () {
        return this.school;
    }
    // Return role
    getRole () {
        return "Intern";
    }
}

// export
module.exports = Intern;