import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './tarjeta.css';

class Tarjeta extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props);
        return (
            < Link to={`/detallePelicula/id/${this.props.data.id}`} >
                <div className='tarjetas'>
                    <h3 className='textotarjeta'>{this.props.data.title}</h3>
                    <h3 className='textotarjeta'>{this.props.data.vote_average}</h3>
                    <h3 className='textotarjeta'>{this.props.data.release_date}</h3>
                    <img className='imagenes' src={`https://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt={this.props.data.poster_path} />
                </div>
            </Link>
        )
    }

}

export default Tarjeta;