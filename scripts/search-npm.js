// Menu: Search NPM
// Description: Search NPM for packages
// Author: Jacob A. Swain
// Twitter: @jacobswain
// Email:

import "@johnlindquist/kit";

const baseUrl = "https://www.npmjs.com/search/suggestions?q=";
const toData = (res) => res.data;

const term = await arg("Package name:");

let preview = async ({ name, description, version, links }) =>
  md(`
  ## ${name}
  - Description: ${description}  
  - Version: ${version}  

  #### Links
  ${links.npm ? `- [npm](${links.npm})` : ""}
  ${links.repository ? `- [repository](${links.repository})` : ""}
  ${links.repository ? `- [homepage](${links.homepage})` : ""}
`);

const results = await get(`${baseUrl}${term}`)
  .then(toData)
  .then((results) =>
    results.map(({ name, description, version, links }) => ({
      name,
      description,
      value: links.npm,
      preview: async () => preview({ name, description, version, links }),
    }))
  );

let url = await arg("Select package:", results);

await $`open ${url}`;
