const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Engineer = require("./lib/Engineer")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")

const {
    managerMakerCard,
    engineerEngineCard,
    internInterfaceCard,
    vanillaHtml
} = require("./src/htmlGen")

const theSquad = [];

function init() {
    function managerMaker() {
        inquirer.prompt ([
            {
                type: "input",
                names: 'name',
                message: "What is your manager's name?",
            },
            {
                type: "input",
                names: 'id',
                message: "What is your manager's id?",
            },
            {
                type: "input",
                names: 'email',
                message: "What is your email?",
            },
            {
                type: "input",
                names: 'officeNumber',
                message: "What is the office number?",
            },
        ])
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(id, name, email, officeNumber)
            theSquad.push(managerMakerCard(manager))
            characterSelect()
        })

    }

    function characterSelect(){
        inquirer.prompt([
            {
                type: "list",
                names: 'freshMeat',
                message: "Who you like to hire someone?",
                choices: ['Engineer','Intern',"Nah"]
            },
        ])
        .then((answers) => {
            switch (answers.freshMeat) {
                case "Engineer":
                    return engineerEngine();
                case "Intern":
                    return internInerface();
                default:
                    return generateHtml();

            }
        });
    }
    function engineerEngine() {
        inquirer.prompt ([
            {
                type: "input",
                names: 'name',
                message: "What is your engineer's name?",
            },
            {
                type: "input",
                names: 'id',
                message: "What is your engineer's id?",
            },
            {
                type: "input",
                names: 'email',
                message: "What is your email?",
            },
            {
                type: "input",
                names: 'github',
                message: "What is your github?",
            },
        ])
        .then(({name, id, email, github}) => {
            const engineer = new Engineer(id, name, email, github)
            theSquad.push(engineerEngineCard(engineer))
            characterSelect()
        })

    }
    function internInerface() {
        inquirer.prompt ([
            {
                type: "input",
                names: 'name',
                message: "What is your intern's name?",
            },
            {
                type: "input",
                names: 'id',
                message: "What is your intern's id?",
            },
            {
                type: "input",
                names: 'email',
                message: "What is your email?",
            },
            {
                type: "input",
                names: 'school',
                message: "What is your school?",
            },
        ])
        .then(({name, id, email, school}) => {
            const intern = new Intern(id, name, email, school)
            theSquad.push(internInterfaceCard(intern))
            characterSelect()
        })

    }
    function generateHtml(){
        fs.writeFile("/.dist/index.html", vanillaHtml(theSquad), (err) => {
            err ? console.log(err) : console.log("You did it!")
        })
    }

    managerMaker()
}

init()