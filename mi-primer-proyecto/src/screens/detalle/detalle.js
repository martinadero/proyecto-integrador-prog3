import React, { Component } from 'react';

class Detalle extends Component{
    constructor(props){
        super(props);
        this.state = {
            props : props,
            loader: true,
            detalle: {}
        }
    }

    
    url2 = this.props.match.params.id
    url3 = '?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US&page=1'

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=a0959ac201dc94da76d17af9fee2bfd2&language=en-US`) 
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                detalle: data
            })
    })
        .catch(error => console.log(error));
    }
    render() {
        console.log(this.state.detalle.poster_path)
        return (
            this.state.detalle.length === 0 ?
            <h3>Cargando...</h3>:
            <div className='detalle-pelicula'>
         <img className='imagenes' src={`https://image.tmdb.org/t/p/original/${this.state.detalle.poster_path}`}  /> 
                <h1>{this.state.detalle.original_title}</h1>
                <h1>{this.state.detalle.vote_average}</h1>
                <h1>{this.state.detalle.release_date}</h1>
        <h1>{this.state.detalle.overview}</h1> 
            </div>
        )
    }
}



export default Detalle

