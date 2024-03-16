function markdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderlicenseLink(data.license)}
* [Contributing](#contributing)

*[Tests](#tests)

* [Questions](#questions)

## Installation

To install the necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run a test, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about my repo, open an issue or contact me directly at ${data.email}.
You can also find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = markdown;