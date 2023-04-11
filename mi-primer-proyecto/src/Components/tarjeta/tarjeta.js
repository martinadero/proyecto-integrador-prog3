import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './tarjeta.css';

class Tarjeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false, 
            textoVerMas: 'Ver Más'
        };
    }
    verMas(){
        if(this.state.verMas){
            this.setState({
                verMas: false,
                textoVerMas: 'Ver más'
            })
        } else {
            this.setState({
                verMas: true,
                textoVerMas: 'Ver menos'
            })            
        }
    }
    render() {
        console.log(this.props);
        return (
                <div className='tarjetas'>
                    <h3 className='textotarjeta'>{this.props.data.title}</h3>
                    <h3 className='textotarjeta'>{this.props.data.vote_average}</h3>
                    <h3 className='textotarjeta'>{this.props.data.release_date}</h3>
    
                    < Link className='t1' to={`/detallePelicula/id/${this.props.data.id}`} >
                    <img className='imagenes' src={`https://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt={this.props.data.poster_path} />
                    </Link>
                    <h3 className= {`${this.state.verMas?'Mostrar':'Ocultar'}`}>{this.props.data.overview}</h3>
                    <button className="X" onClick={() => this.verMas()}>{this.state.textoVerMas}</button>
                </div>
       
        )
    }

}

export default Tarjeta;