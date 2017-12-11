import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Wrap the react app in a router from React-Router
 */
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
