import React, { Component } from 'react';
import Header from '../../Components/header/header';
import SerieTarjeta from '../../Components/serieTarjeta/serieTarjeta';
import Tarjeta from '../../Components/tarjeta/tarjeta';
import './favoritos.css';
import { Link } from "react-router-dom";

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
           peliculas_favoritas: [],
           series_favoritas:[],
            loader: true
        
        };
    };
        componentDidMount() {
           
            let recuperoStoragePelicula = localStorage.getItem('favoritos');
            let recuperoStorageSerie = localStorage.getItem('favoritosSerie')
    
            if(recuperoStoragePelicula !== null){ 
                let peliculasFavoritas =  []
                let favoritosToArray = JSON.parse(recuperoStoragePelicula);
                favoritosToArray.forEach(pelicula => {
                    fetch(`https://api.themoviedb.org/3/movie/${pelicula}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`) 
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        peliculasFavoritas=peliculasFavoritas.concat(data)
                    })
                    .then(() => {
                        console.log(peliculasFavoritas)
                        this.setState({
                            peliculas_favoritas: peliculasFavoritas,
                            loader:false
                         })
                    })
                    
                })
                console.log(peliculasFavoritas)
               
            }else{
                this.setState({
                   
                    loader:false
                 })

            }

            if(recuperoStorageSerie !== null){ 
                let seriesFavoritas =[]
                
                let favoritosToArray = JSON.parse(recuperoStorageSerie);
                favoritosToArray.forEach(serie => {
                    fetch(`https://api.themoviedb.org/3/movie/${serie}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`) 
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        seriesFavoritas=seriesFavoritas.push(data)
                       
                    })
                    
                })
                this.setState({
                    series_favoritas: seriesFavoritas,
                    loader:false
                 })
            }else{
                this.setState({
                   
                    loader:false
                 })

            }

            
        }
       
     render() {
         console.log(this.state.peliculas_favoritas)
        return (
          <>
            <Header />
            <h1 className="home">PAGINA FAVORITOS</h1>
            {this.state.loader?
                  <h3>Cargando...</h3>:
        <div className="home-conteiner">
            <div className="home-conteiner-title">
                <h2 className="pe"> PELICULAS FAVORITAS </h2>
                
            </div>
            <div className="home-conteiner-peliculas-populares">
                {this.state.peliculas_favoritas.map((pelicula) => (
                    <Tarjeta data={pelicula} key={pelicula.id} />
                ))}
            </div>
            <div className="home-conteiner-title">
                <h2 className="series1">SERIES FAVORITAS</h2>
               
            </div>
            <div className="home-conteiner-peliculas-en-cartelera">
                {this.state.series_favoritas.map((serie) => (
                    <SerieTarjeta data={serie} key={serie.id} />
                ))}
            </div>
        </div> }
     
          </>
        );
      }
    }








export default Favoritos;