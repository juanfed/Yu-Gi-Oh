import React from 'react';
import Login from '../components/Login';
import imagenFondo from '../images/img1.jpg';
import '../styles/inicio.css';

const Inicio = () => {
    return (
        <main className='inicio'>
            <figure className='inicio--figure'>
                <img src={imagenFondo} alt="imagen1" className='inicio--figure--img' />
            </figure>
            <div className='inicio--login'>
                <Login />
            </div>
        </main>
    )
}

export default Inicio