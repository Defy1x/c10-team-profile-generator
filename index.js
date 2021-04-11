const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const engineerQuestions = require('./src/engineer-questions')
const internQuestions = require('./src/intern-questions')
const managerQuestions = require('./src/manager-questions')
const menuQuestions = require('./src/questions-menu.js')
const buildTemplate = require('./page-template.js')

let teamMembers = []

function init(){
  function addManager(){
    inquirer.prompt(managerQuestions).then((managerData) => {
      let manager = new Manager (
        managerData.managerName,
        managerData.managerID,
        managerData.managerEmail,
        managerData.managerOfficeNumber,
      );
      teamMembers.push(manager);
      console.log(teamMembers)
      goToMenu()
    });
  }

    function goToMenu(){
      inquirer.prompt(menuQuestions).then((menuData) => {
        if (menuData.addTeamMember === "Add an engineer"){
          engineerPrompt();
          console.log("picked an engineer")
        }
       if (menuData.addTeamMember === "Add an intern"){
         internPrompt();
         console.log("picked an intern")
       }
       else {
         console.log("finished")
         return
       }
    }
  )};

 addManager();
}
init();
