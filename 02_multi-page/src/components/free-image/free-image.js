import './free-image.scss';
import Free from './free.png';

class FreeImage {
  render() {
    const img = document.createElement('img');
    const body = document.querySelector('body');

    img.src = Free;
    img.alt = 'Free';
    img.classList.add('free-img');

    body.appendChild(img);
  }
}

export default FreeImage;
