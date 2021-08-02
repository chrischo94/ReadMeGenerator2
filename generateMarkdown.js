// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(readMeContent) {
  if (readMeContent.license === "MIT"){
    return `![MIT](https://img.shields.io/badge/license-MIT-red)`;
} else if (readMeContent.license === "Apache") {
  return `![Apache](https://img.shields.io/badge/license-Apache-lightgreen)`;
} else if (readMeContent.license === "GPL") {
  return `![GPL](https://img.shields.io/badge/license-GPL-blue)`;
} else if (readMeContent.license === "MPL") {
  return `![MPL](https://img.shields.io/badge/license-MPL-green)`;
} else {
  return "";
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(readMeContent) {
  if (readMeContent.license === "MIT"){
    return `https://choosealicense.com/licenses/mit/#`;
} else if (readMeContent.license === "Apache") {
  return `https://choosealicense.com/licenses/apache-2.0/`;
} else if (readMeContent.license === "GPL") {
  return `https://choosealicense.com/licenses/gpl-3.0/`;
}else if (readMeContent.license === "MPL") {
  return `https://choosealicense.com/licenses/mpl-3.0/`;
} else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(readMeContent) {
  if("MIT"){
    let mitRes = "This product uses a MIT license"
    return mitRes
  } else if ("Apache") {
    let apacheRes = "This product uses an Apache License"
    return apacheRes
  } else if ("GPL") {
    let gplRes = "This product uses a GPL License"
    return gplRes
  } else if ("GPL") {
    let mplRes = "This product uses a MPL License"
    return mplRes
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readMeContent) {
  return `# ${readMeContent.projectTitle} ${renderLicenseBadge(readMeContent)}

  ## Description 
  ${readMeContent.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * 
  ## Installation
  ${readMeContent.installation}

  ## Usage 
  ${readMeContent.usage}

  ## License
  ${renderLicenseSection(readMeContent)}

  ## Demo
  <img src="assets/demo/${readMeContent.demo}>

  ## Questions
  For additional questions feel free to contact: ${readMeContent.emailAddress}
  GitHub: https://github.com/${readMeContent.username}
  `;
  }
  
  module.exports = generateMarkdown