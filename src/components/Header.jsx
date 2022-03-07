import React from 'react';

import '../styles/header.css';

const Header = () => {
    return (
        <header className='header'>
            <h1 className="header--title">Yu-Gi-Oh!</h1>
            {/* <ul className='header--li'>
                <Link to="/"><li>Inicio</li></Link>
                <Link to="/pagina1"><li>Pagina 1</li></Link>
                <Link to="/pagina2"><li>Pagina 2</li></Link>
                <Link to="/pagina3"><li>Pagina 3</li></Link>
                <Link to="/pagina4"><li>Pagina 4</li></Link>
            </ul> */}
        </header>
    )
}

export default Header