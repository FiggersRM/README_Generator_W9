const licenses = [
  {
    name: "No License",
    badge: "",
    link: "",
  },
  {
    name: "Apache 2.0 License",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/license/apache-2-0/",
  },
  {
    name: "Boost Software License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    link: "https://www.boost.org/LICENSE_1_0.txt",
  },
  {
    name: "BSD 3-Clause License",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    link: "https://opensource.org/license/bsd-3-clause/",
  },
  {
    name: "BSD 2-Clause License",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    link: "https://opensource.org/license/bsd-2-clause/",
  },
  {
    name: "Creative Commons CC0",
    badge:
      "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
    link: "http://creativecommons.org/publicdomain/zero/1.0/",
  },
  {
    name: "Creative Commons Attribution 4.0 International",
    badge:
      "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)",
    link: "https://creativecommons.org/licenses/by/4.0/",
  },
  {
    name: "Creative Commons Attribution-ShareAlike 4.0 International",
    badge:
      "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)",
    link: "https://creativecommons.org/licenses/by-sa/4.0/",
  },
  {
    name: "Creative Commons Attribution-NonCommercial 4.0 International",
    badge:
      "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)",
    link: "https://creativecommons.org/licenses/by-nc/4.0/",
  },
  {
    name: "Creative Commons Attribution-NoDerivates 4.0 International",
    badge:
      "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)",
    link: "https://creativecommons.org/licenses/by-nd/4.0/",
  },
  {
    name: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International",
    badge:
      "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)",
    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    name: "Creative Commons Attribution-NonCommercial-NoDerivates 4.0 International",
    badge:
      "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)",
    link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
  {
    name: "Eclipse Public License 1.0",
    badge:
      "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    link: "https://opensource.org/licenses/EPL-1.0",
  },
  {
    name: "GNU GPL v3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: "GNU GPL v2",
    badge:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    link: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  },
  {
    name: "GNU AGPL v3",
    badge:
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    link: "https://www.gnu.org/licenses/agpl-3.0",
  },
  {
    name: "GNU LPGL v3",
    badge:
      "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    link: "https://www.gnu.org/licenses/lgpl-3.0",
  },
  {
    name: "GNU FDL v1.3",
    badge:
      "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)",
    link: "https://www.gnu.org/licenses/fdl-1.3",
  },
  {
    name: "The Hippocratic License 3.0",
    badge:
      "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)",
    link: "https://firstdonoharm.dev)",
  },
  {
    name: "ISC License",
    badge:
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    link: "https://opensource.org/licenses/ISC",
  },
  {
    name: "MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    link: "https://opensource.org/licenses/MIT",
  },
  {
    name: "Mozilla Public License 2.0",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0",
  },
  {
    name: "Open Data Commons Attribution License (BY)",
    badge:
      "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)",
    link: "https://opendatacommons.org/licenses/by/",
  },
  {
    name: "Open Data Commons Open Database License (ODbl)",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
    link: "https://opendatacommons.org/licenses/odbl/",
  },
  {
    name: "Open Data Commons Public Domain Dedication and License (PDDL)",
    badge:
      "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)",
    link: "https://opendatacommons.org/licenses/pddl/",
  },
  {
    name: "Perl Artistic License 2.0",
    badge:
      "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
    link: "https://opensource.org/licenses/Artistic-2.0",
  },
  {
    name: "SIL Open Font License 1.1",
    badge:
      "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
    link: "https://opensource.org/licenses/OFL-1.1",
  },
  {
    name: "The Unlicense",
    badge:
      "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "http://unlicense.org/",
  },
  {
    name: "Zlib/libpng License",
    badge:
      "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
    link: "https://opensource.org/licenses/Zlib",
  },
];

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

let licenseSection;
function renderLicenseBadge(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (licenses[i].name === license) {
      return licenses[i].badge;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (let i = 0; i < licenses.length; i++) {
    if (licenses[i].name === license) {
      return licenses[i].link;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);
  if (license !== "No License") {
    licenseSection = `License: ${license} ${licenseBadge}

  Link: ${licenseLink}`;
    return licenseSection;
  }
  else {
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)

  ## Installation <a id='Installation'></a>
  ${data.installation}

  ## Usage <a id='Usage'></a>
  ${data.usage}

  ## License <a id='License'></a>
  ${renderLicenseSection(data.license)}

  ## Contributing <a id='Contributing'></a>
  ${data.contributors}

  ## Tests <a id='Tests'></a>
  ${data.test}

  ## Questions <a id='Questions'></a>
  GitHub profile: [github.com/${data.username}](https://github.com/${
    data.username
  })
  
  Email for further questions: ${data.email}
`;
}

module.exports = { generateMarkdown };
