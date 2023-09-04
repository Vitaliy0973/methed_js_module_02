'use strict';

const listBooks = document.querySelector('.items');
const blocksItem = document.querySelectorAll('.item');
const titles = listBooks.querySelectorAll('h2');
const listContents = listBooks.querySelectorAll('.props__list');

document.querySelector('.ads').remove();

blocksItem[2].querySelector('.item__title').replaceWith(titles[4]);

blocksItem[4].querySelector('.props__list').before(titles[5]);

blocksItem[5].querySelector('.props__list').before(titles[2]);

titles[3].textContent = 'This и прототипы объектов';

blocksItem[3].querySelector('.props__list').replaceWith(listContents[4]);

blocksItem[4].querySelector('.content').append(listContents[3]);

listContents[0].querySelector('li:nth-child(3)').after(listContents[2].
  querySelector('.props__item_four'));

listContents[5].querySelectorAll('.props__item_two').forEach(node => {
  listContents[2].append(node);
});

listBooks.prepend(blocksItem[3]);
listBooks.prepend(blocksItem[2]);
listBooks.prepend(blocksItem[1]);
