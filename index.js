const inquirer = require("inquirer");
const fs = require("fs");
const generateReadme = require("./assets/generateReadme");

inquirer
  .prompt([
    { type: "input", message: "TITLE OF MY PROJECT: ", name: "title" },
    { type: "input", message: "DESCRIPTION: ", name: "description" },
    // { type: "input", message: "TABLE OF CONTENT: ", name: "tableofcontent" },
    { type: "input", message: "INSTALLATION: ", name: "installation" },
    { type: "input", message: "USAGE: ", name: "usage" },
    {
      type: "list",
      message: "LICENSE: ",
      name: "license",
      choices: ["Apache", "OpenBSD", "Rust", "WordPress"],
    },
    { type: "input", message: "CONTRIBUTING: ", name: "contributing" },
    { type: "input", message: "TESTS: ", name: "tests" },
    { type: "input", message: "GitHubLink ", name: "github" },
    { type: "input", message: "Email ", name: "email" },
  ])
  .then((Response) => {
    console.log(Response);
    const template = generateReadme(Response);
    fs.writeFile("./output/ReadMe.md", template, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });

//   .then((input) => {
//     return generateHtml(input);
//   })
//   .then((data) => {
//   });
