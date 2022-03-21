import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom" // version 6
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Home from './pages/Home';

import NoFound from './components/NoFound';
import Cards from './pages/Cards';
import Private from './Layouts/Private';
import MyCards from './pages/MyCards';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
// import { fakeAuthProvider } from "./auth";


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element={<App />} >
          <Route path='/Yu-Gi-Oh' element={<Home />} />
        </Route>
        <Route path='/admin' element={<Private />} >
          <Route path='/admin/cards' element={<Cards />} />
          <Route path='/admin/mycards' element={<MyCards />} />
          <Route path='/admin/contact' element={<Contact />} />
          <Route path='/admin/profile' element={<Profile />} />
        </Route>
        <Route path='*' element={<NoFound />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);


