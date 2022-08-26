const fs = require("fs");

function bageSelection(bage) {
  if (bage === "Apache") {
    return "![Apache](https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white)";
  } else if (bage === "OpenBSD") {
    return "![OpenBSD](https://img.shields.io/badge/-OpenBSD-%23FCC771?style=for-the-badge&logo=openbsd&logoColor=black)";
  } else if (bage === "Rust") {
    return "![Rust](https://img.shields.io/badge/rust-%23000000.svg?style=for-the-badge&logo=rust&logoColor=white)";
  } else {
    return "![WordPress](https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white)";
  }
}

module.exports = function (data) {
  const template = `
  # Title of the Project:

  # ${data.title}
  
  ## Description:
  
  ## _${data.description}_
  
  ## Table of Content: 
  
  1. [Installation Instructions](#installation)
  2. [Usage Information](#usage)
  3. [License Information](#License)
  4. [Contribution](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## installation:
  
  ## ${data.installation}
  
  ## Usage:
  
  ## ${data.usage}
  
  ## License: ${bageSelection(data.license)}
  
  ## _${data.license}_
  
  ## contributing:
  
  ## ${data.contributing}
  
  ## Tests:
  
  ## ${data.tests}
  
  ## Questions:
  
  you can finde my GitHub at:
  
  ## [${data.github}](https://github.com/${data.github})
  
  If you have any questions please email me at:
  
  ## ${data.email}
  `;

  console.log(template);
  return template;
};
