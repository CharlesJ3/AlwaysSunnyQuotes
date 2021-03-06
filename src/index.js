import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Characters from './Characters.js';
import * as serviceWorker from './serviceWorker';
import Cast from './Cast.js';
import Header from './Header.js';
import 'tachyons';

ReactDOM.render(
  <div>
    <Header />
    <Characters />
    <Cast />
  </div>,  
  
  document.getElementById('root'));
serviceWorker.unregister();
