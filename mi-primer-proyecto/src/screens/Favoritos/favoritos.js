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
            loader: false
        
        };
    };
        componentDidMount() {
           
            let recuperoStoragePelicula = localStorage.getItem('favoritos');
            let recuperoStorageSerie = localStorage.getItem('favoritosSerie')
            console.log(recuperoStoragePelicula)
    
            if(recuperoStoragePelicula !== null){ 
                this.setState({
                   
                    loader:false
                 })

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
               
            }

            if(recuperoStorageSerie !== null){ 
                this.setState({
                   
                    loader:false
                 })

                let seriesFavoritas =[]
                console.log(recuperoStorageSerie)
                
                let favoritosToArray = JSON.parse(recuperoStorageSerie);
                console.log(favoritosToArray)
                favoritosToArray.forEach(serie => {
                    fetch(`https://api.themoviedb.org/3/tv/${serie}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`) 
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        seriesFavoritas=seriesFavoritas.concat(data)
                       
                    })
                    .then(() => {
                        this.setState({
                            series_favoritas: seriesFavoritas,
                            loader:false
                         })
                    })
                })
            }
        }

        actualizarpelicula(id){
        let filtrarpelicula = this.state.peliculas_favoritas.filter(filtrado => filtrado.id!=id)
        this.setState({
            peliculas_favoritas: filtrarpelicula,
         })
        }
       
        actualizarserie(id){
            let filtrarserie = this.state.series_favoritas.filter(filtrado => filtrado.id!=id)
            this.setState({
                series_favoritas: filtrarserie,
             })
            }
     render() {
         console.log(this.state.peliculas_favoritas)
        return (
          <>
            
            <h1 className="home">PAGINA FAVORITOS</h1>
            {this.state.loader?
                  <h3>Cargando...</h3>:
        <div className="home-conteiner">
            <div className="home-conteiner-title">
                <h2 className="pe"> PELICULAS FAVORITAS </h2>
                
            </div>
            {this.state.peliculas_favoritas.length==0?
            <h2> No tiene peliculas favoritas, empezá a agregarlas</h2>: <div className="home-conteiner-peliculas-populares">
            {this.state.peliculas_favoritas.map((pelicula) => (
                <Tarjeta data={pelicula} key={pelicula.id} actualizar={(id) => this.actualizarpelicula(id)}/>
            ))}
        </div>}
            
            <div className="home-conteiner-title">
                <h2 className="series1">SERIES FAVORITAS</h2>
               
            </div>

            {this.state.series_favoritas.length==0?
            <h2> No tiene series favoritas, empezá a agregarlas</h2>:
            <div className="home-conteiner-peliculas-en-cartelera">
                {this.state.series_favoritas.map((serie) => (
                    <SerieTarjeta data={serie} key={serie.id}actualizar={(id) => this.actualizarserie(id)} />
                ))}
            </div>
     
            }
               </div> } 
     
          </>
        );
      }
    }









export default Favoritos;