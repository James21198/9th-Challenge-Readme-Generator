function markdown(data) {
  return `# 9th-Challenge-Readme-Generator ${data.title}

## Description

${data.description}

## What have you learned?

${data.learn}

## What was your motivation

${data.motivation}

## Why did you build this project?

${data.project}

## What problem does this solve for you?

${data.problem}

## Questions

If you have any further questions about my repo, you can open an issue or contact me directly at ${data.email}.
You can also find more of my previous work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = markdown;