// Import Employee constructor
const Employee = require('./Employee');

// Intern constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // using super on employee constructor
        super (name, id, email);
        this.school = school;
    }
    // Return Github ID from user input
    getSchool () {
        return this.school;
    }
    // Return role
    getRole () {
        return "intern";
    }
}

// export
module.export = Intern;