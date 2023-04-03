import React from 'react';
import './header.css';

import {Link, Route, Switch} from 'react-router-dom';

function Header(props){

    return(
        <nav className='navbar'>
            <div className='logo-home'>
                <img className='logo' src='./img/image.png'></img>
                <Link to='/'>Home</Link>
            </div>
            <div className="list-header">
                <Link to='/home'>Home</Link>
                <Link to='/vertodas'>Ver todas</Link>
                <Link to='/favoritos'>Favoritos</Link>
            </div>
        </nav>
    )
}

export default Header