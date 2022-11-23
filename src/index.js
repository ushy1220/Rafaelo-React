import createRoot from 'react-dom';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';


createRoot.render(
  <App />,
  document.querySelector('#root')
);