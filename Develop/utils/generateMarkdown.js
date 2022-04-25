// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenses = ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl'];
  const licenseBadge = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)', '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'];
  const licenseLink = ['Apache: https://opensource.org/licenses/Apache-2.0', 'GNU: https://www.gnu.org/licenses/gpl-3.0', 'ISC: https://opensource.org/licenses/ISC', 'MIT: https://opensource.org/licenses/MIT', 'Mozilla: https://opensource.org/licenses/MPL-2.0', 'Open Data Commons: https://opendatacommons.org/licenses/by/', 'Perl: https://opensource.org/licenses/Artistic-2.0'];
  let link = '';
  let badge = '';

  for (let i = 0; i < licenses.length; i++) {
    if(license.includes(licenses[i])){
      badge += `${licenseBadge[i]} `;
      link += `${licenseLink[i]} `;
    }    
  }
  return [badge, link];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const [badge, link] = renderLicenseBadge(data.license);

  return `# ${data.title}
  ${badge}
## Description

> Motivation for making this project\

>${data.motivation}

> Why I built this project\

>${data.why}

> The problem this project solves\

>${data.problem}

> What I learned\

>${data.learn}

> Why this project stands out\

>${data.stand}
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}
## Usage
${data.usage}
## Contribute
${data.contribute}
## License
${link}
## Tests
${data.test}
## Questions

![Github Contact](https://github.com/${data.github}/)\

Send an email of any questions or concerns here:\

![Email](mailto:${data.email}?subject=[GitHub])
`;
}

module.exports = generateMarkdown;
