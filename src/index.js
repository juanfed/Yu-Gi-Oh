import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import App from './App';
import Inicio from './pages/Inicio';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import Pagina4 from './pages/Pagina4';

import NoFound from './components/NoFound';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} >
        <Route path='/' element={<Inicio />}/>
        <Route path='/pagina1' element={<Pagina1 />}/>
        <Route path='/pagina2' element={<Pagina2 />}/>
        <Route path='/pagina3' element={<Pagina3 />}/>
        <Route path='/pagina4' element={<Pagina4 />}/>
      </Route>
      <Route path='*' element={<NoFound />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


