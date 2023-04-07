import React, { Component } from "react";
import Tarjeta from "../../Components/tarjeta/tarjeta";
import './vertodas.css'

class verTodas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas_populares: [],
      peliculas_en_cartelera: [],
      loader: true,
    };
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1") //CAMBIAR ESTE LINK//
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas_populares: data.results,
          loader: false,
        });
      })
      .catch((error) => console.log(error));

    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas_en_cartelera: data.results,
          loader: false,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return(
        <div>
            {
                this.props.match.params.id === 'populares' ?
                <>
                    <h1>Peliculas Populares</h1>
                    <div className="home-conteiner-peliculas-populares">
                        {/* map peliculas_populares */}
                        {this.state.peliculas_populares.map((pelicula) => (
                            <Tarjeta data={pelicula} key={pelicula.id} />
                        ))}
                    </div>
                </>:
                <>
                    <h1>Peliculas en Cartelera</h1>
                    <div className="home-conteiner-peliculas-en-cartelera">
                        {/* map peliculas_en_cartelera */}
                        {this.state.peliculas_en_cartelera.map((pelicula) => (
                            <Tarjeta data={pelicula} key={pelicula.id} />
                        ))}
                    </div>
                </>
            }
        </div>
    )
  }
}

export default verTodas