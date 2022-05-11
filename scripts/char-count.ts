// Name: Character Count
// Description: Count the number of characters in the current selection

import "@johnlindquist/kit"

const selected = await getSelectedText();

const { size } = await npm('lodash');

const count = size(selected);

const w = await widget(
    `<div style="text-align: center;">
      <h1>${count}</h1>
      <div>characters in the current selection</div>
    </div>`,
    { ttl: 2000 }
);