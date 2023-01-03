import './hello-world-button.scss';

class HelloWorldButton {
  buttonClassName = 'hello-world-button';

  render() {
    const button = document.createElement('button');
    const body = document.querySelector('body');

    button.innerHTML = 'Hello World';
    button.classList.add(this.buttonClassName);
    button.onclick = () => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    };

    body.appendChild(button);
  }
}

export default HelloWorldButton;
