import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import SulaApp from './components/SulaApp';
import AdminPage from './components/AdminPage';


const App = () => {
 
  
    return (
    <BrowserRouter basename="/">
          <Route path="/" exact component={SulaApp} />
          <Route path="/admin" exact component={AdminPage} />
    </BrowserRouter>
  );
}

export default App;