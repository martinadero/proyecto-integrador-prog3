import React, { Component } from "react";
import Tarjeta from "../../Components/tarjeta/tarjeta";
import Header from "../../Components/header/header";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas_populares: [],
      peliculas_en_cartelera: [],
      resultadoDeBusqueda: [],
      loader: true,
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
        }
        this.setState({
          peliculas_populares: lista_peliculas_populares,
          loader: false,
        });
      })
      .catch((error) => console.log(error));
  }
  filtrar() {
    console.log("esta funcionando");
  }


  componentDidMount() {
    //Buscamos datos
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=1845c94396255a256363182ed898e8fc&language=en-US&page=1") 
      .then((response) => response.json())
      .then((data) => {
        let lista_peliculas_populares = []
        for (let i = 0; i < 4; i++) {
            lista_peliculas_populares.push(data.results[i])
        }
        this.setState({
          peliculas_populares: lista_peliculas_populares,
          loader: false,
        });
      })
      .catch((error) => console.log(error));
  }
  filtrar() {
    console.log("esta funcionando");
  }
 render() {
    return (
      <>
        <Header />
        <h1 className="home">Pagina del home</h1>
        <div className="home-conteiner">
            <div className="home-conteiner-title">
                <h2>Peliculas Populares</h2>
                <Link to="/ver-mas/populares" style={{ textDecoration: 'none' }}><p>Ver todas</p></Link>
            </div>
            <div className="home-conteiner-peliculas-populares">
                {this.state.peliculas_populares.map((pelicula) => (
                    <Tarjeta data={pelicula} key={pelicula.id} />
                ))}
            </div>
            <div className="home-conteiner-title">
                <h2>Peliculas en Cartelera</h2>
                <Link to="/ver-mas/cartelera" style={{ textDecoration: 'none' }}><p>Ver todas</p></Link>
            </div>
            <div className="home-conteiner-peliculas-en-cartelera">
                {this.state.peliculas_en_cartelera.map((pelicula) => (
                    <Tarjeta data={pelicula} key={pelicula.id} />
                ))}
            </div>
        </div>
      </>
    );
  }
}







export default Home;