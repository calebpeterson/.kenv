// Name: Kebab Case

import "@johnlindquist/kit";
const { kebabCase } = await npm("lodash");

let selected = await getSelectedText();

let transformed = kebabCase(selected);

await setSelectedText(transformed);
