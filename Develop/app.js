const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const appendFileAsync = util.promisify(fs.appendFile);
const render = require("./lib/htmlRenderer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

let employees = [];
let classes = [];
let newperson;

getAnswers();

// Write code to use inquirer to gather information about the development team members,

function getAnswers() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "id",
        message: "What is employee id?",
      },
      {
        type: "checkbox",
        name: "role",
        message: "What is your role?",
        choices: ["engineer", "intern", "manager"],
      },
    ])
    .then(function (data) {
      let person = {};
      person.name = data.name;
      person.email = data.email;
      person.id = data.id;
      person.role = data.role;

      if (data.role == "intern") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "school",
              message: "What is your school name?",
            },
          ])
          .then(function (data) {
            person.school = data.school;
            employees.push(person);
            addNew();
          });
      } else if (data.role == "engineer") {
        inquirer
          .prompt([
            {
              type: "input",
              name: "github",
              message: "What is your github username?",
            },
          ])
          .then(function (data) {
            person.github = data.github;
            employees.push(person);
            addNew();
          });
      } else {
        inquirer
          .prompt([
            {
              type: "input",
              name: "office",
              message: "What is your office number?",
            },
          ])
          .then(function (data) {
            person.office = data.office;
            employees.push(person);
            addNew();
          });
      }

      function addNew() {
        inquirer
          .prompt([
            {
              type: "checkbox",
              name: "newperson",
              message: "Would you like to add another person?",
              choices: ["yes", "no"],
            },
          ])
          .then(function (data) {
            if (data.newperson == "yes") {
              getAnswers();
            } else if (data.newperson == "no") {
              createClasses();
            }
          });
      }
    });
}

function createClasses() {
  for (let i = 0; i <= employees.length; i++) {
    if (employees[i].role == "intern") {
      let newperson = new Intern(
        employees[i].name,
        employees[i].email,
        employees[i].id,
        employees[i].role,
        employees[i].school
      );
      employees.push(newperson);
    } else if (employees[i].role == "engineer") {
      let newperson = new Engineer(
        employees[i].name,
        employees[i].email,
        employees[i].id,
        employees[i].role,
        employees[i].github
      );
      employees.push(newperson);
    } else {
      let newperson = new Manager(
        employees[i].name,
        employees[i].email,
        employees[i].id,
        employees[i].role,
        employees[i].office
      );
      employees.push(newperson);
    }
    console.log(employees);
  }
}

// var filename = data.name.toLowerCase().split(' ').join('') + '.json';

// fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
// 	if (err) {
// 		return console.log(err);
// 	}

// 	console.log('Success!');
// });
//   })
// };

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// function generateHTML(answers) {

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
