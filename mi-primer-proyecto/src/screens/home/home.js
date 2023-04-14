import React, { Component } from "react";
import Tarjeta from "../../Components/tarjeta/tarjeta";
import Header from "../../Components/header/header";
import { Link } from "react-router-dom";
import "./home.css";
import SerieTarjeta from "../../Components/serieTarjeta/serieTarjeta";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas_populares: [],
      resultadoDeBusquedaPeliculas: [],
      resultadoDeBusquedaSeries: [],
      series_populares:[],
      loader: true,
      busqueda:'',
      mensajePelicula:'',
      mensajeSerie:'',
      busco:false
    };
  }
  componentDidMount() {
    //Buscamos datos
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1") 
      .then((response) => response.json())
      .then((data) => {
        let lista_peliculas_populares = []
        for (let i = 0; i < 4; i++) {
            lista_peliculas_populares.push(data.results[i])
        } //No USAR FOR, USAR MAP Y FILTER//
        this.setState({
          peliculas_populares: lista_peliculas_populares,
          loader: false,
        });
      })
      .catch((error) => console.log(error));

      fetch("https://api.themoviedb.org/3/tv/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1") 
      .then((response) => response.json())
      .then((data) => {
        let lista_peliculas_populares = []
        for (let i = 0; i < 4; i++) {
            lista_peliculas_populares.push(data.results[i])
        } 
        this.setState({
          series_populares: lista_peliculas_populares,
          loader: false,
        });
      })
      .catch((error) => console.log(error));
  }
  buscador(event) {
 
   event.preventDefault()
   this.setState({
    busco:true
   })
       
   if (this.state.busqueda=='') {
    console.log('No estoy buscando nada');
    this.setState({
      busco:false
    })
  } else {
      console.log('Estamos aca');
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
            .then(response => response.json())
            .then(data => { 
              console.log(data);
                this.setState({
                    resultadoDeBusquedaPeliculas: data.results
                });
                if (data.results.length === 0) {
                    this.setState({
                        mensajePelicula: 'No se enontraron resultados'
                    })

                }

            })
            .catch(error => console.log(error))

            fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.busqueda}&api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    resultadoDeBusquedaSeries: data.results
                });
                if (data.results.length === 0) {
                    this.setState({
                        mensajeSeries: 'No se enontraron resultados'
                    })

                }

            })
            .catch(error => console.log(error))

    }
}
evitarSubmit(e){
  this.setState(
    {
        busqueda: e.target.value,
        mensajePelicula: '',
        mensajeSerie: '',
        resultadosDeBusquedaPeliculas: [],
        resultadosDeBusquedaSeries: [],


    })
   
 
  } 

 render() {
  console.log(this.state.resultadoDeBusquedaPeliculas);
  console.log(this.state.resultadoDeBusquedaSeries);
  
  console.log(this.state.mensajePelicula);
    return (
      <>
        
       <h1 className="home">PAGINA HOME</h1>
       <form  onSubmit={(event)=>this.buscador(event)}>
                <input type="text" name= "name" onChange={(e)=>this.evitarSubmit(e)} value={this.state.busqueda}  />
            </form>
        {this.state.loader?
                  <h3>Cargando...</h3>:
                  this.state.busco==''? <div className="home-conteiner">
                  <div className="home-conteiner-title">
                      <h2 className="pe"> PELICULAS </h2>
                      <Link to="/ver-mas/populares" style={{ textDecoration: 'none' }}><p className="ver">VER TODAS</p></Link>
                  </div>
                  <div className="home-conteiner-peliculas-populares">
                      {this.state.peliculas_populares.map((pelicula) => (
                          <Tarjeta data={pelicula} key={pelicula.id} />
                      ))}
                  </div>
                  <div className="home-conteiner-title">
                      <h2 className="series1">SERIES</h2>
                      <Link to="/ver-mas/series_populares" style={{ textDecoration: 'none' }}><p className="ver1">VER TODAS</p></Link>
                  </div>
                  <div className="home-conteiner-peliculas-en-cartelera">
                      {this.state.series_populares.map((serie) => (
                          <SerieTarjeta data={serie} key={serie.id} />
                      ))}
                  </div>
              </div>:
              <>
               <div className="home-conteiner-title">
               <h2 className="pe"> PELICULAS BUSCADAS </h2>
               <Link to="/ver-mas/populares" style={{ textDecoration: 'none' }}><p className="ver">VER TODAS</p></Link>
           </div>
           <div className="home-conteiner-peliculas-populares">
               {this.state.resultadoDeBusquedaPeliculas.map((pelicula) => (
                   <Tarjeta data={pelicula} key={pelicula.id} />
               ))}
           </div>
           <div className="home-conteiner-title">
               <h2 className="series1">SERIES BUSCADAS</h2>
               <Link to="/ver-mas/series_populares" style={{ textDecoration: 'none' }}><p className="ver1">VER TODAS</p></Link>
           </div>
           <div className="home-conteiner-peliculas-en-cartelera">
               {this.state.resultadoDeBusquedaSeries.map((serie) => (
                   <SerieTarjeta data={serie} key={serie.id} />
               ))}
           </div>
           </>
        }
      </>
    );
  }
}



export default Home;