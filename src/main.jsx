/* eslint-disable no-unused-vars */
import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/main.css';
import i18n from './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
