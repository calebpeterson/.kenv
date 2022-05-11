// Name: Capitalize

import "@johnlindquist/kit";
const { capitalize } = await npm("lodash");

let selected = await getSelectedText();

let transformed = capitalize(selected);

await setSelectedText(transformed);
