// Name: Upper Case

import "@johnlindquist/kit"

let selection = await getSelectedText();

let transformed = selection.toUpperCase();

await setSelectedText(transformed);