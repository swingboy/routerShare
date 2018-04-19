import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import App from './App';
// import { BrowserRouter, HashRouter } from 'react-router-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';

// ReactDOM.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// 	, document.getElementById('root'));



render(<HashRouter>
	<App />
</HashRouter>, document.getElementById('root'));
