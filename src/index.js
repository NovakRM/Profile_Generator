//dependencies
const fs = require("fs")
const util = require("util")
const Employee = require("../lib/Employee")
const Manager = require("../lib/Employee")
const Engineer = require("../lib/Employee")
const Intern = require("../lib/Employee")
const inquirer = require("inquirer")

//promisify file writing
const writeFileAsync = util.promisify(fs.writeFile);

//empty array for results 
//projects hypothetically could have multiple managers probably should account for that
let employees = []

buildTeam =()=> {
    buildManager =()=>{
    inquirer
    .prompt(managerQuestions)
    .then((response)=>{
            if (response.teamChoices === "complete"){
            //completed team
                const manager = new Manager(response.Name, response.id, response.email, response.office)
                employees.push(manager) //push to array
                buildPage() //add results to page
            }else if(response.teamChoices === "engineer"){
            //if adding engineer, still push manager to array
                const manager = new Manager(response.Name, response.id, response.email, response.office)
                employees.push(manager)
                buildEngineer()
            }else if(response.teamChoices === "intern"){
            //if adding intern, still push manager to array
                const manager = new Manager(response.Name, response.id, response.email, response.office)
                employees.push(manager)
                buildIntern()
            }
        })
    }

    buildEngineer =()=> {
        inquirer
        .prompt(engineerQuestions)
        .then((response)=>{
            if (response.teamChoices === "complete"){
            //completed team
                const engineer = new Engineer(response.Name, response.id, response.email, response.github)
                employees.push(engineer) //push to array
                buildPage() //add results to page
            }else if(response.teamChoices === "engineer"){
            //if adding engineer, still push intern to array
                const engineer = new Engineer(response.Name, response.id, response.email, response.github)
                employees.push(engineer)
                buildEngineer()
            }else if(response.teamChoices === "intern"){
            //if adding another intern, still push intern to array
                const engineer = new Engineer(response.Name, response.id, response.email, response.github)
                employees.push(engineer)
                buildIntern()
            }
        })
    }

    buildIntern =()=> {
        inquirer
        .prompt(internQuestions)
        .then((response)=>{
            if (response.teamChoices === "complete"){
            //completed team
                const intern = new Intern(response.Name, response.id, response.email, response.school)
                employees.push(intern) //push to array
                buildPage() //add results to page
            }else if(response.teamChoices === "engineer"){
            //if adding engineer, still push intern to array
                const intern = new Intern(response.Name, response.id, response.email, response.school)
                employees.push(intern)
                buildEngineer()
            }else if(response.teamChoices === "intern"){
            //if adding another intern, still push intern to array
                const intern = new Intern(response.Name, response.id, response.email, response.school)
                employees.push(intern)
                buildIntern()
            }
        })
    }
}

//write file
// const buildPage = (response) =>
//   `<!DOCTYPE html>
//   <html>
//       <head>
//           <meta charset="utf-8">
//           <script src="https://use.fontawesome.com/a590d3a2e5.js"></script>
//           <meta http-equiv="X-UA-Compatible" content="IE=edge">
//           <title>Team Egg</title>]
//           <meta name="description" content="">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css">
//           <link rel="stylesheet" href="./style.css">
//       </head>
//       <body>
//           <div class="container">
//               <div class="sidebar">
//                   <div class="img"></div>
//                   <div class="badge"><i class="fas fa-egg fa-3x"></i></div>
              
//                   <div class="title">
//                       <h1>${this.teamName}</h1>
//                       <hr>
//                       <p>Meet the members of ${this.teamName}</p>
//                   </div>
                  
//                   <div class="nav">
  
//                   </div>
//               </div>
//               <div class="team">
                
//               </div>
//           </div>
//       </body>
//   </html>`

