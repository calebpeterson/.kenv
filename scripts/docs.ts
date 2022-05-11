// Name: Dev Docs
// Description: Open DevDocs.io

import "@johnlindquist/kit"

let query = await arg("DevDocs.io query");
let url = `https://devdocs.io/#q=${query}`;

await $`open ${url}`;