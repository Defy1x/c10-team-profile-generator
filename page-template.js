const fs = require("fs");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function renderHTML(teamMembers) {
  let HTML = `
  <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./starwars-glyphicons/css/starwars-glyphicons.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            <style>
              body{
                background-color: black;
              }
              .jumbotron {
                background-color: black;
              }
              h1   {
                padding-bottom: 20px;
                color: white;
              }
              p    {color: #616161;}
              main {
                display: flex;
                justify-content: space-evenly;
                flex-wrap: wrap;
              }
              .card{
                margin: 10px;
              }
            </style>
            <title>Build Your Fleet</title>
        </head>
        <body>
          <div class="jumbotron">
            <header>
                <h1 class="text-center"><i class="swg swg-deathstar"></i> Your Imperial Fleet <i class="swg swg-atat"></i></h1>
            </header>
            <main>`;

  teamMembers.forEach((employee) => {
    HTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${employee.name}</h3>
                <h3 class="card-subtitle mb-2 text-muted">${getRole(employee)}</h3>
                <p class="card-text">
                    ID: ${employee.id}
                </p>
                <p class="card-text">
                    Email:<a href="mailto:${employee.email}" class="card-link"> ${employee.email}</a>
                </p>
                <p class="card-text">
                    ${getOther(employee)}
                </p>
            </div>
        </div>
        `;
  });

  HTML += `
    </div>
    </main>
    </body>
    </html>`;

  generateMainHtml(HTML);
}

function getRole(employee) {
  switch (employee.role) {
    case "Manager":
      return `<h3>${employee.role} <i class="swg swg-darthvader"></i><h3>`;
    case "Engineer":
      return `<h3>${employee.role} <i class="swg swg-bobbafett"></i> <h3>`;
    case "Intern":
      return `<h3>${employee.role} <i class="swg swg-stormtrooper"></i><h3>`;
  }
}

function getOther(employee) {
  switch (employee.role) {
    case "Manager":
      return `<span>Office #: ${employee.officeNumber}</span>
      `;
    case "Engineer":
      return `<span>Github:<a href="https://github.com/${employee.github}" target="_blank" class="card-link"> github.com/${employee.github}</a></span>
      `;
    case "Intern":
      return `<span>School: ${employee.school}</span>`;
  }
}

function generateMainHtml(HTML) {
  fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(OUTPUT_DIR);
    fs.writeFileSync("team.html", HTML);
  });

}

module.exports.renderHTML = renderHTML;
