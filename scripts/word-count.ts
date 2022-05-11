// Name: Word Count
// Description: Count the number of words in the current selection

import "@johnlindquist/kit"

const selected = await getSelectedText();

const { size, words } = await npm('lodash');

const count = size(words(selected));

const w = await widget(
    `<div style="text-align: center;">
      <h1>${count}</h1>
      <div>words in the current selection</div>
    </div>`,
    { ttl: 2000 }
);