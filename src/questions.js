let managerQuestions =  [
    {
        type: "input",
        message: "What's your manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's your manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What's' your manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your manager's office number?",
        name: "office"
    },
    {
        type: "list",
        choices: ["engineer", "intern", "complete team"],
        message: "Add another team member?",
        name: "teamChoices"
    }
]

let engineerQuestions =  [
    {
        type: "input",
        message: "What's your enigneer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's your enigneer's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What's your enigneer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What's your enigneer's github?",
        name: "github"
    },
    {
        type: "list",
        choices: ["engineer", "intern", "complete team"],
        message: "Add another team member?",
        name: "teamChoices"
    }
]

let internQuestions =  [
    {
        type: "input",
        message: "What's your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What's your intern's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What's your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What's your intern's school?",
        name: "school"
    },
    {
        type: "list",
        choices: ["engineer", "intern", "complete team"],
        message: "Add another team member?",
        name: "teamChoices"
    }
]

//export question sets
module.exports =  {managerQuestions, engineerQuestions, internQuestions}