import React, { Component } from 'react';

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            pelicula: {},
            loader: true
        }
    }

    url = 'https://api.themoviedb.org/3/movie/'
    url2 = this.props.match.params.id
    url3 = '?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1'

    componentDidMount(){
        fetch(this.url + this.url2 + this.url3)
        .then(response => response.json())
        .then(data => {
            let objeto_pelicula = {}
            objeto_pelicula.original_title = data.original_title
            objeto_pelicula.vote_average = data.vote_average
            objeto_pelicula.release_date = data.release_date
            objeto_pelicula.overview = data.overview
            objeto_pelicula.poster_path = `https://image.tmdb.org/t/p/original/${data.poster_path}`
            let lista_generos = []
            for (let i = 0; i < data.genres.length; i++) {
                lista_generos.push(data.genres[i])
            }
            objeto_pelicula.genres = lista_generos
            this.setState({
                pelicula: objeto_pelicula,
                loader: false
            })
            console.log(this.state.pelicula);
        })
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div className='detalle-pelicula'>
                <img className='imagenes' src={this.state.pelicula.poster_path} alt={""} />
                <h1>{this.state.pelicula.original_title}</h1>
                <h1>{this.state.pelicula.vote_average}</h1>
                <h1>{this.state.pelicula.release_date}</h1>
                <h1>{this.state.pelicula.overview}</h1>
                <ul>
                    {
                        this.state.pelicula.genres.map( genero => <li>{genero}</li>)
                    }
                </ul>
            </div>
        )
    }
}



export default Detalle

