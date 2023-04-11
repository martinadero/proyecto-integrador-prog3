import React, { Component } from "react";
import Tarjeta from "../../Components/tarjeta/tarjeta";
import './vertodas.css'

class verTodas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas_populares: [],
      series_populares: [],
      loader: true,
      page:2
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

      fetch("https://api.themoviedb.org/3/tv/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1") 
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({
          series_populares:data.results,
          loader: false,
        });
      })
      .catch((error) => console.log(error));
  }
cargar_mas_peliculas(){
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.page}`) //CAMBIAR ESTE LINK//
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peliculas_populares: this.state.peliculas_populares.concat(data.results),
          loader: false,
          page:this.state.page+1  
        });
      })
      .catch((error) => console.log(error));


}

cargar_mas_series(){
  fetch(`https://api.themoviedb.org/3/tv/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=${this.state.page}`) //CAMBIAR ESTE LINK//
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          series_populares: this.state.series_populares.concat(data.results),
          loader: false,
          page:this.state.page+1  
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
      <button className="X" onClick={() => this.cargar_mas_peliculas()}>Ver más</button>


                    </div>
                </>:
                <>
                    <h1>Series populares</h1>
                    <div className="home-conteiner-peliculas-en-cartelera">
                        {/* map peliculas_en_cartelera */}
                        {this.state.series_populares.map((serie) => (
                            <Tarjeta data={serie} key={serie.id} />

                        ))}
                        <button className="X" onClick={() => this.cargar_mas_series()}>Ver más</button>
                    </div>
                </>
            }
        </div>
    )
  }
}

export default verTodas