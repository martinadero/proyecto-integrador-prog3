import React, { Component } from 'react';
import "./detalle.css";

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            props : props,
            loader: true,
            detalle: {},
            favorito:false,
            textoFavorito:'Agregar a favoritos',

        }
    }

    
   

    componentDidMount(){
        let id 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`) 
        .then(response => response.json())
        .then(data => {
            console.log(data)
            id = data.id
            this.setState({
                detalle: data
            })
    })
    .then(()=>{
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray;
        };
        console.log(favoritos)
        console.log(id)

        if(favoritos.includes(id)){
            this.setState({
                favorito: true,
                textoFavorito:'Quitar de favoritos',

            });
        } 

    })
        .catch(error => console.log(error));
        
    }
   

    modificarFavoritos(id){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        };
        
        if(this.state.favorito){
            let sacarFav = favoritos.indexOf(id);
            favoritos.splice(sacarFav, 1);

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
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);
       
    }
    render() {
        console.log(this.state.detalle.poster_path)
        return (
            this.state.detalle.length === 0 ?
            <h3>Cargando...</h3>:
            <div className='detalle-pelicula'>
         <img className='imagenes' src={`https://image.tmdb.org/t/p/original/${this.state.detalle.poster_path}`}  /> 
                <h1> * MOVIE NAME:   {this.state.detalle.original_title}</h1>
                <h1> * {this.state.detalle.vote_average}</h1>
                <h1> * RELEASE DATE:   {this.state.detalle.release_date}</h1>
        <h1> * SINTHESIS: {this.state.detalle.overview}</h1> 
        <button className="X" onClick={() => this.modificarFavoritos(this.state.detalle.id)}>{this.state.textoFavorito}</button>
            </div>
        )
    }
}



export default Detalle

