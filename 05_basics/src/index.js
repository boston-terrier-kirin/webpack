import _ from 'lodash';

document.getElementById('button1').addEventListener('click', buttonClicked);

function buttonClicked() {
  const el = document.getElementById('header');
  el.innerHTML = 'UPDATED';

  const listItems = ['Apple', 'Orange', 'Banana'];
  const ul = document.getElementById('shopping-list');

  _.forEach(listItems, function (item) {
    const li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
}
