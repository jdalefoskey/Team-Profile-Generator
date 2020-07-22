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

const OUTPUT_DIR = path.resolve(__dirname,"output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


let teamMembers = [];

getAnswers();

// Write code to use inquirer to gather information about the development team members,

function getAnswers () {
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    },
    {
      type: "input",
      name: "id",
      message: "What is employee id?"
    },
    {
      type: "input",
      name: "school",
      message: "What school do you attend?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "office",
      message: "What is your office number?"
    },
    {
      type: "checkbox",
      name: "role",
      message: "What is your role?",
      choices: [ 'engineer', 'intern', 'manager']
    },
    {
      type: "input",
      name: "add",
      message: "Do you need to add another team member?"
    }
  ])
  .then(function(data) {
    // lets you add additional team members as required
    let yes = "yes";
    teamMembers.push(data);
    if (data.add === "yes") {
      getAnswers();
      // and to create objects for each team member (using the correct classes as blueprints!)
     } else {
      objectByClass();
    };
  });
};

function objectByClass () {

  if (teamMembers.role === "engineer"){
    teamMembers.className = Engineer;

  } else if (teamMembers.role === "intern") {
    teamMembers.className = Intern;

  } else {
    teamMembers.className = Manager;
   

  };

  for (i=0; i <teamMembers.length; i++) {
    console.log(teamMembers[i]);
  };

};


 
    
 

    
      
      
    
		// var filename = data.name.toLowerCase().split(' ').join('') + '.json';

		// fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {
		// 	if (err) {
		// 		return console.log(err);
		// 	}

		// 	console.log('Success!');
		// });
//   })
// };

// and to create objects for each team member (using the correct classes as blueprints!)
// function promptUser() {
//     return inquirer.prompt([
//       {
//         type: "input",
//         name: "name",
//         message: "What is your name?"
//       },
//       {
//         type: "input",
//         name: "email",
//         message: "What is your email address?"
//       },
//       {
//         type: "input",
//         name: "id",
//         message: "What is employee id?"
//       },
//       {
//         type: "input",
//         name: "school",
//         message: "What school do you attend?"
//       },
//       {
//         type: "input",
//         name: "github",
//         message: "Enter your GitHub Username"
//       },
//       {
//         type: "input",
//         name: "office",
//         message: "What is your office number?"
//       },
//       {
//         type: "input",
//         name: "role",
//         message: "What is your role?"
//       },
//       {
//         type: "input",
//         name: "add",
//         message: "Do you need to add another team member?"
//       }
//     ]);
    
    
//   }

  
  

// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// function generateHTML(answers) {
  
//   teamMembers.push(answers);
//   console.log(teamMembers);
   
  
 

//   return `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//     <title>Document</title>
//   </head>
//   <body>
//     <div class="jumbotron jumbotron-fluid">
//     <div class="container">
      

//     ////////// insert cards here
//     </div>
//     </div>
//   </body>
//   </html>`;
//   }

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// promptUser()
//   .then(function(answers) {
//     let yes = "yes";
//     let no = "no";
//   if (answers.add === yes) {
//     promptUser();
//     generateHTML(answers)
//   }; 
//     // const html = generateHTML(answers);

//     //  return writeFileAsync(outputPath,html);
//   })
//   .then(function(answers) {
//      console.log(teamMembers);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
  

//   console.log(teamMembers);
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
