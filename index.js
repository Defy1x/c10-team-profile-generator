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
  //start the program
  function addManager(){
    //adds a manager
    inquirer.prompt(managerQuestions).then((managerData) => {
      //gets manager questions and then calls them back
      let manager = new Manager (
        managerData.managerName,
        managerData.managerID,
        managerData.managerEmail,
        managerData.managerOfficeNumber,
      );
      teamMembers.push(manager);
      //pushes manager to array
      console.log(teamMembers)
      goToMenu()
    });
  }

    function goToMenu(){
      //lets user add other team members
      inquirer.prompt(menuQuestions).then((menuData) => {
        if (menuData.addTeamMember === "Add an engineer"){
          engineerPrompt();
          //calls engineer function when picked
        }
       if (menuData.addTeamMember === "Add an intern"){
         internPrompt();
         //calls intern prompt when picked
       }
       else {
         return
       }
    }
  )};

    function engineerPrompt(){
      //starts function to get engineer info
      inquirer.prompt(engineerQuestions).then((engineerData) => {
        let engineer = new Engineer (
          engineerData.engineerName,
          engineerData.engineerID,
          engineerData.engineerEmail,
          engineerData.engineerGithub,
        );
        teamMembers.push(engineer);
        //pushes engineer to array
        console.log(teamMembers)
        goToMenu()
      }
    )};

    function internPrompt(){
      //starts function to get intern info
      inquirer.prompt(internQuestions).then((internData) => {
        let intern = new Intern (
          internData.internName,
          internData.internID,
          internData.internEmail,
          internData.internSchool,
        );
        teamMembers.push(intern);
        //pushes intern to array
        console.log(teamMembers)
        goToMenu()
      }
    )};

 addManager();
}
init();
