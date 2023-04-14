import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

function Header(_props){

    return(
        <nav className='navbar'>
            <div >
                <Link className='homelogo' to='/'><img className='logo' src='./img/logo.png' alt='' /></Link>
            </div>
            <div className='search'>
             
            </div>
            <div >
                <ul className='headerlist'>
                <Link className='textoheader' to='/' style={{ textDecoration: 'none' }}><p>HOME</p></Link>
                <Link className='textoheader' to='/favoritos' style={{ textDecoration: 'none' }}><p>FAVORITOS</p></Link>
                <Link className='textoheader' to='/ver-mas/populares' style={{ textDecoration: 'none' }}><p>VER TODAS LAS PELICULAS</p></Link>
                <Link className='textoheader' to='/ver-mas/series_populares' style={{ textDecoration: 'none' }}><p>VER TODAS LAS SERIES</p></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Header