import Heading from './components/heading/heading';
import HelloWorldButton from './components/hello-world-button/hello-world-button';

const heading = new Heading();
const helloWorldButton = new HelloWorldButton();

heading.render();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('production');
} else {
  console.log('development');
}
