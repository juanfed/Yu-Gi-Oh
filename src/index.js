import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import App from './App';
import Inicio from './pages/Inicio';

import NoFound from './components/NoFound';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/Yu-Gi-Oh' element={<Inicio />}/>
      </Route>
      <Route path='*' element={<NoFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


