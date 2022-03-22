import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/headerPrivate.css';

const HeaderPrivate = () => {
    useNavigate();
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
            <Link to="/admin/cards"><li>Generador de Cartas</li></Link>
            <Link to="/admin/mycards"><li>Mis cartas</li></Link>
            <Link to="/admin/profile"><li>Perfil</li></Link>
            <Link to="/admin/contact"><li>Contacto</li></Link>
        </ul>
        </>
    )
}

export default HeaderPrivate