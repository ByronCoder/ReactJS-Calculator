import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import './styles/css/App.css';
import Calculator from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
