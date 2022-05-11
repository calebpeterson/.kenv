// Name: Camel Case
// Description: Convert selected text to camel case

import "@johnlindquist/kit";
const { camelCase } = await npm("lodash");

let selected = await getSelectedText();

let transformed = camelCase(selected);

await setSelectedText(transformed);
