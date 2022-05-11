// Name: Start Case

import "@johnlindquist/kit";
const { startCase } = await npm("lodash");

let selected = await getSelectedText();

let transformed = startCase(selected);

await setSelectedText(transformed);
