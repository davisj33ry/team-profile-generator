// Import Employee constructor
const Employee = require('./Employee');

// Engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, ghID) {
        // using super on employee constructor
        super (name, id, email);
        this.ghID = ghID;
    }
    // Return Github ID from user input
    getGHID () {
        return this.getGHID;
    }
    // Return role
    getRole () {
        return "engineer";
    }
}

// export
module.export = Engineer;