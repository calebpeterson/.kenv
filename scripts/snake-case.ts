// Name: Snake Case

import "@johnlindquist/kit";
const { snakeCase } = await npm("lodash");

let selected = await getSelectedText();

let transformed = snakeCase(selected);

await setSelectedText(transformed);
