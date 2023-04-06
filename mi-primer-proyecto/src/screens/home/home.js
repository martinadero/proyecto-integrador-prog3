import React, { Component } from 'react';
import Tarjeta from '../../Components/tarjeta/tarjeta';
import './home.css'; 


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
           peliculas: [],
            resultadoDeBusqueda: [],
            loader:true
         };
    }
componentDidMount() {
        //Buscamos datos
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1') //CAMBIAR ESTE LINK//
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                 this.setState({
                peliculas: data.results,
                loader: false
             })})
            .catch(error => console.log(error));
    }
    filtrar(){
        console.log('esta funcionando');
    }
    render(){
        console.log(this.state.peliculas);
        return(
            <>
          <h1 className='home' >Pagina del home</h1>
           {
            this.state.peliculas.map((pelicula)=>
            <Tarjeta 
            data = {pelicula}
            key={ pelicula.id} 
           />

            )
           }
         </>
         )
    }

}

export default Home;