import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/headerPrivate.css';

const HeaderPrivate = () => {
    const navigate = useNavigate();
    const salir = () =>{
        setTimeout(()=>{
            navigate("/Yu-Gi-Oh")
        }, 500)
    }
    return (
        <>
        <header className='header'>
            <h1 className="header--title">Yu-Gi-Oh!</h1>
            <div className='header--buton'>
            <button className='header--buton--buton' onClick={salir}>Sing Out</button>
            </div>
        </header>
        <ul className='header--menu'>
            <li><Link to="/admin/cards">Generador de Cartas</Link></li>
            <li><Link to="/admin/mycards">Mis cartas</Link></li>
            <li><Link to="/admin/profile">Perfil</Link></li>
            <li><Link to="/admin/contact">Contacto</Link></li>
        </ul>
        </>
    )
}

export default HeaderPrivate