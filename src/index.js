import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './style/index.css';

const root = <App/>

ReactDOM.render(
  root,
  document.getElementById('root')
);
registerServiceWorker();
