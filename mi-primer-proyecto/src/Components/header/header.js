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
            <div className="headerlist">
                <Link className='textoheader' to='/' style={{ textDecoration: 'none' }}><p>HOME</p></Link>
                <Link className='textoheader' to='/favoritos' style={{ textDecoration: 'none' }}><p>FAVORITOS</p></Link>
                <Link className='textoheader' to='./vertodas' style={{ textDecoration: 'none' }}><p>VER TODAS</p></Link>
            </div>
        </nav>
    )
}

export default Header