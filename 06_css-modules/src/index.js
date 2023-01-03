import style from './index.css';
import './clearButton';

const button = document.getElementById('button1');
const h1 = document.getElementById('header');

console.log(style);

button.classList.add('btn');
button.classList.add(style.button);
h1.classList.add(style.header);
