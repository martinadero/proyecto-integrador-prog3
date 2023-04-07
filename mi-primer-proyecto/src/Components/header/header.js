import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';

function Header(props){

    return(
        <nav className='navbar'>
            <div className='homelogo'>
                <Link to='/'><img className='logo' src='./img/logo.png' alt='' /></Link>
            </div>
            <div className='search'>
                <form className='search-form'>
                    <input type='text' placeholder='Buscar' onChange={props.filtrar} className='search-form_input'></input>
                    <button onClick={props.filtrar} className='search-form_button'>&#128269;</button>
                </form>
            </div>
            <div className="headerlist">
                <Link to='/' style={{ textDecoration: 'none' }}><p>Home</p></Link>
                <Link to='/favoritos' style={{ textDecoration: 'none' }}><p>Favoritos</p></Link>
            </div>
        </nav>
    )
}

export default Header