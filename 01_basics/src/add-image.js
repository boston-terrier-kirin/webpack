import Free from '../assets/free.png';

function addImage() {
  const img = document.createElement('img');
  img.alt = 'Free';
  img.width = 300;
  img.height = 300;
  img.src = Free;

  const body = document.querySelector('body');
  body.appendChild(img);
}

export default addImage;
