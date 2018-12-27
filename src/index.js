import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

serviceWorker.register();
