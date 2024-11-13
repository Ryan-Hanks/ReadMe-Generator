// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]`;
  } else if (license === 'Apache 2.0') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-green.svg)]`;
  } else {
    return 'No License';
  };

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license === 'MIT'){
    return '(https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0'){
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `${renderLicenseBadge(license) + renderLicenseLink(license)}`;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Contents:
  -[Installation](##Installation)
  -[Usage](##Usage)
  -[License](##License)
  -[Contacts](##Contacts)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contacts
  - [Email:](${data.email})
  - [Github Profile:](https://www.github.com/${data.github})
`;
}

module.exports = generateMarkdown;
