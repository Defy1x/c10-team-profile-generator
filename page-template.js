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
            <link rel="stylesheet" href="style.css" />
            <title>Build a team/title>
        </head>
        <body>
            <header>
                <h1>Your Team</h1>
            </header>
            <main>`;

  teamMembers.forEach((employee) => {
    HTML += `
        <section class="card">
            <div class="name">
                <h2>${employee.name}</h2>
                <span>${getRole(employee)}</span>
            </div>
            <div class="employee-info">
                <div class="id">
                    <span>ID: </span>
                    <span>${employee.id}</span>
                </div>
                <div class="email">
                    <span>Email: </span>
                    <span><a href="mailto:${employee.email}">${employee.email}</a></span>
                </div>
                <div class="extra">
                    ${getOther(employee)}
                </div>
            </div>
        </section>
        `;
  });

  HTML += `</main>
    </body>
    </html>`;

  generateMainHtml(HTML);
}

function getRole(employee) {
  switch (employee.role) {
    case "Manager":
      return `<h3>${employee.role}<h3>`;
    case "Engineer":
      return `<h3>${employee.role}<h3>`;
    case "Intern":
      return `<h3>${employee.role}<h3>`;
  }
}

function getOther(employee) {
  switch (employee.role) {
    case "Manager":
      return `<span><a href="tel:+${employee.phone}">${employee.phone}</a></span>
      `;
    case "Engineer":
      return `<span><a href="https://github.com/${employee.github}">github.com/${employee.github}</a></span>
      `;
    case "Intern":
      return `<span>${employee.school}</span>`;
  }
}

function generateMainHtml(HTML) {
  fs.mkdir(OUTPUT_DIR, { recursive: true }, (err) => {
    err ? console.error(err) : process.chdir(OUTPUT_DIR);
    fs.writeFileSync("team.html", HTML);
  });

}

module.exports.renderHTML = renderHTML;
