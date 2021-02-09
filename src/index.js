//dependencies
const fs = require("fs")
const util = require("util")
const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")
const Engineer = require("../lib/Engineer")
const Intern = require("../lib/Intern")
const inquirer = require("inquirer")
let {managerQuestions, engineerQuestions, internQuestions} = require("./questions")

//promisify file writing
// const writeFileAsync = util.promisify(fs.writeFile)

//empty array for results 
let employees = []

buildManager =()=> {
    inquirer.prompt(managerQuestions)
    .then((response)=>{
        const manager = new Manager(response.name, response.id, response.email, response.office)
        employees.push(manager)
        //doesnt appear these are breaking it
        // console.log(manager) //- logging correctly
        // console.log(employees) //- logging correctly

        //doesnt seem to be reaching the switch statement
        //IT WAS BECAUSE CHECKBOXES ACT DIFFERENTLY FROM LISTS. Checkboxes are strings, need to be join()'d 
        switch (response.teamChoices){
        //new engineer
            case "engineer":
                buildEngineer()
            break
        //new intern
            case "intern":
                buildIntern()
            break
        //completed team
            case "complete team":
                return buildpage()
                console.log('done!')
            break
        }
    })
}

buildEngineer =()=> {
    inquirer.prompt(engineerQuestions)
    .then((response)=>{
        const engineer = new Engineer(response.name, response.id, response.email, response.github)
        employees.push(engineer)
        switch (response.teamChoices){
        //new engineer
            case "engineer":
                buildEngineer()
            break
        //new intern
            case "intern":
                buildIntern()
            break
        //completed team
            case "complete team": 
                buildpage()
                console.log("done!")
            break        
        }
    })
}

buildIntern =()=> {
    inquirer.prompt(internQuestions)
    .then((response)=>{
        const intern = new Intern(response.name, response.id, response.email, response.school)
        employees.push(intern)
        switch (response.teamChoices){
        //new engineer
            case "engineer":
                buildEngineer()
            break
        //new intern
            case "intern":
                buildIntern()
            break
        //completed team
            case "complete team": 
                buildPage()
                console.log("done!")
            break            
        }
    })
}

//need to run initialization after functions have been defined. Could promisify?
console.log("Welcome to the team page builder! Let's get started")
buildManager()

//write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 
        (err)=>
            err? console.log(err): console.log("Success!"))
}

//takes objects from employee array and build cards
buildCards = (response) =>{   
    let page = []
    for (let i=0; i<employees.length; i++){
        switch(employees[i].role){
        case "manager":
            page.push(
                `<div class="person">
                    <div class="color">
                        <!-- probably would be a this.color thing for this items class? -->
                    </div>
                    <div class="idBadge"><i class="fa fa-bullhorn" aria-hidden="true"></i></div>
                    <div class="deets">
                        <div class="name">${employees[i].name} || ${employees[i].role}</div>
                        <div class="email">${employees[i].email}</div>
                        <div class="info">${employees[i].office}</div>
                    </div>
                </div>`
                )
          break
          case "engineer":
            page.push(
                `<div class="person">
                    <div class="color">
                        <!-- probably would be a this.color thing for this items class? -->
                    </div>
                    <div class="idBadge"><i class="fa fa-coffee" aria-hidden="true"></i></div>
                    <div class="deets">
                        <div class="name">${employees[i].name} || ${employees[i].role}</div>
                        <div class="email">${employees[i].email}</div>
                        <div class="info">${employees[i].github}</div>
                    </div>
                </div>`
                )
          break
          case "intern":
            page.push(
                `<div class="person">
                    <div class="color">
                        <!-- probably would be a this.color thing for this items class? -->
                    </div>
                    <div class="idBadge"><i class="fa fa-book" aria-hidden="true"></i></div>
                    <div class="deets">
                        <div class="name">${employees[i].name} || ${employees[i].role}</div>
                        <div class="email">${employees[i].email}</div>
                        <div class="info">${employees[i].school}</div>
                    </div>
                </div>`
            )
          break
        }
    }
    return page.join("") 
}

function buildPage(egg){
    writeToFile("../dist/index.html",
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <script src="https://use.fontawesome.com/a590d3a2e5.js"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Egg</title>]
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css">
            <link rel="stylesheet" href="../dist/style.css">
        </head>
        <body>
            <div class="container">
                <div class="sidebar">
                    <div class="img"></div>
                    <div class="badge"><i class="fas fa-egg fa-3x"></i></div>
                
                    <div class="title">
                        <h1>Team Egg</h1>
                        <hr>
                        <p>Meet the members of Team Egg!</p>
                    </div>
                    
                    <div class="nav">
    
                    </div>
                </div>
                <div class="team">
                    ${buildCards()}
                </div>
            </div>
        </body>
    </html>`
    )
}