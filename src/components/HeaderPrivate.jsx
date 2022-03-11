import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/headerPrivate.css';

const HeaderPrivate = () => {
    return (
        <>
        <header className='header'>
            <h1 className="header--title">Yu-Gi-Oh!</h1>
            <div className='header--buton'>
            <button className='header--buton--buton'>Sing Out</button>
            </div>
        </header>
        <ul className='header--menu'>
            <Link to="#"><li>Mis cartas</li></Link>
            <Link to="/admin/cards"><li>Generador de Cartas</li></Link>
            <Link to="#"><li>Perfil</li></Link>
        </ul>
        </>
    )
}

export default HeaderPrivate