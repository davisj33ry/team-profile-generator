// node mods
const inquirer = require("inquirer");
const fs = require("fs");

// Generate html in dist
const generateHTML = require("./src/generateHTML");

// Require in constructors
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Require in generateHTML
const showTeam = require("./src/generateHTML")

// Inquirer employee prompts
const teamArray = [];
// const role = ["Engineer", "Intern", "Manager"];
const addEmployee = () => {
  console.log(
    "Please follow prompts to add employees. Be careful to select the proper employee role"
  );
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select employee's role type from the following options:",
        choices: ["engineer", "intern", "manager"],
      },
      {
        type: "input",
        name: "employeeName",
        message: "Enter employee's name",
        validate: (nameInput) => {
          if (!nameInput) {
            console.log("Please enter employee's name.");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's ID number",
        validate: (input) => {
          if (input !== NaN) {
            return true;
          } else {
            console.log("Please enter employee's numberical ID.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email",
        validate: (nameInput) => {
          var validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (nameInput.match(validRegex)) {
            return true;
          } else {
            console.log("Please enter valid email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "ghID",
        message: "Enter employee's github handle",
        validate: (nameInput) => {
          if (!nameInput) {
            console.log("Please enter employee's github handle");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Enter employee's schoole name",
        when: (input) => input.role === "Intern",
        validate: (nameInput) => {
          if (!nameInput) {
            console.log("Please enter employee's school name");
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter employee's office number",
        when: (input) => input.role === "Manager",
        validate: (nameInput) => {
          if (nameInput !== NaN) {
            console.log(
              "Please enter employee's numberical office identifier."
            );
            return false;
          } else {
            return true;
          }
        },
      },
      {
        type: "confirm",
        name: "completeAddEmployee",
        message: "Do you have anymore employees to add?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let employee;
      let {
        role,
        employeeName,
        id,
        email,
        ghID,
        school,
        officeNumber,
        completeAddEmployee
      } = employeeData;
      if (role === "engineer") {
        employee = new Engineer(employeeName, id, email, ghID);
        console.log(employee);
      } else if (role === "intern") {
        employee = new Intern(employeeName, id, email, school);
        console.log(employee);
      } else if (role === "manager") {
        employee = new Manager(employeeName, id, email, officeNumber);
        console.log(employee);
      }
      teamArray.push(employee);
      if (completeAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// Write data to index.html file
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", showTeam(teamArray), (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Team Profile page successfully created.");
    }
  });
};

addEmployee().then(teamArray).then(writeFile);
