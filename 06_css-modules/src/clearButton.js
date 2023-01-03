import style from './clearButton.css';

const button = document.createElement('button');
button.innerHTML = 'Clear';
button.classList.add(style.button);
button.classList.add('btn');
button.onclick = function () {
  alert('Clear');
};

document.body.appendChild(button);
