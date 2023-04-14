import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './serieTarjeta.css';

class SerieTarjeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verMas: false, 
            textoVerMas: 'Ver Más',
            favorito:false,
            textoFavorito:'Agregar a favoritos',
        };
    }
    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritosSerie');

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray;
        };

        if(favoritos.includes(this.props.data.id)){
            this.setState({
                favorito: true,
                textoFavorito:'Quitar de favoritos',

            });
        } 
    }

    modificarFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritosSerie');

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        };
        
        if(this.state.favorito){
            let sacarFav = favoritos.indexOf(id);
            favoritos.splice(sacarFav, 1);
            if (this.props.actualizar != undefined) {
                this.props.actualizar(this.props.data.id)
            }
     this.setState({
                favorito: false,
                textoFavorito: 'Agregar a favoritos'
            })
        } else { 
             favoritos.push(id);
            this.setState({
                 favorito: true,
                textoFavorito:'Quitar de favoritos',
            })            
        }

         let favoritosToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritosSerie', favoritosToString);

        console.log(localStorage);
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
        
        return (
                <div className='tarjetas'>
                    <h3 className='textotarjeta'>{this.props.data.original_name}</h3>
                  
    
                    < Link className='t1' to={`/detalleSerie/id/${this.props.data.id}`} >
                    <img className='imagenes' src={`https://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt={this.props.data.poster_path} />
                    </Link>
                    <h3 className= {`${this.state.verMas?'Mostrar':'Ocultar'}`}>{this.props.data.overview}</h3>
                    <button className="X" onClick={() => this.verMas()}>{this.state.textoVerMas}</button>
                    <button className="X" onClick={() => this.modificarFavoritos(this.props.data.id)}>{this.state.textoFavorito}</button>
                </div>
       
        )
    }

}

export default SerieTarjeta;