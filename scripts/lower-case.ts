// Name: Lower Case

import "@johnlindquist/kit"

let selected = await getSelectedText();

let transformed = selected.toLowerCase();

await setSelectedText(transformed);