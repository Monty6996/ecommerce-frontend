/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { defaults } from 'axios';
import './styles.css';

defaults.baseURL = process.env.REACT_APP_BASE_URL;

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
