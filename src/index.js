import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import App from './App';
import Home from './pages/Home';

import NoFound from './components/NoFound';
import Cards from './pages/Cards';
import Private from './Layouts/Private';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/Yu-Gi-Oh' element={<Home />}/>
      </Route>
      <Route path='/admin' element={<Private />} >
        <Route path='/admin/cards' element={<Cards />}/>
      </Route>
      <Route path='*' element={<NoFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


