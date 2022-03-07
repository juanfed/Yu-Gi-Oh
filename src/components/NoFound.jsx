import React from 'react';
import error from '../assets/error2.jpg';
import { Link } from 'react-router-dom';
import '../styles/noFound.css';

const NoFound = () => {
  return (
    <div className='NoFound'>
      <h1>Error 404 pagina no encontrada</h1>
      <div className='NoFound--img'>
        <figure>
          <img src={error} alt="noFound" />
        </figure>
      </div>

      <Link to="/"><h2>Volver a Inicio</h2></Link>
    </div>
  )
}

export default NoFound