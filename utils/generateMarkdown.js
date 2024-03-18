function renderLicenseBadge(license) {
  let licenseBadge = ""

  switch(license) {
    case 'MIT': 
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license-MIT-blue)`
      break;
     case 'APACHE 2.0': 
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license/apache-2.0-blue)`
      break;
    case 'GPL 3.0':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/license-GPLv3-blue)`
      break;
    case 'BSD 3':
      licenseBadge = `![Static Badge](https://img.shields.io/badge/BSD-3-Purple)`
      break;
    case 'None':
      licenseBadge = `No License Used`
      break;
  }
  return licenseBadge
}


function markdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contribution

${data.contribution}

## Tests

${data.test}

## Questions

If you have any further questions about my repo, you can open an issue or contact me directly at ${data.email}.
You can also find more of my previous work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = markdown;