import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css' // node package
import './index.sass';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

