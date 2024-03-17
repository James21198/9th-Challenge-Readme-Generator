function renderLicenseBadge(data) {
  let licenseType = data.license;
  if (licenseType === 'MIT') {
    data.license = `[License: MIT](https://img.shields.io/badge/license-MIT-blue)`
  }
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