import React from 'react';
import App from './App'

import 'element-theme-default';
import ReactDOM from "react-dom";
import './index.css';
import './CSS/login.css';
import 'bulma/css/bulma.css';
import './CSS/singleframe.css';
import './CSS/searchhead.css';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactDOM.render(<App />, document.getElementById('app'));
