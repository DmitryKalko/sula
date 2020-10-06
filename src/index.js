import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

//import SulaApp from './components/SulaApp';
//import AdminPage from './components/AdminPage';

ReactDOM.render(
<BrowserRouter basename="/sula">
     <App />
</BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
