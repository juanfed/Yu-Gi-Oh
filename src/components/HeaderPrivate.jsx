import React from 'react';


import '../styles/headerPrivate.css';

const HeaderPrivate = () => {
    return (
        <header className='header'>
            <h1 className="header--title">Yu-Gi-Oh!</h1>
            <div className='header--buton'>
            <button className='header--buton--buton'>Sing Out</button>
            </div>
        </header>
    )
}

export default HeaderPrivate