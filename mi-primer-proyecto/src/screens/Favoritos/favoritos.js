import React, { Component } from 'react';
import './favoritos.css';
import { Link } from 'react-router-dom';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            canciones: [],
            borrar: [],
            loader: true
        };
    };
}

componentDidMount() {
    let recuperoStorage = localStorage.getItem('favoritos');
    let favoritosToArray;

    if (recuperoStorage !== null) {
        favoritosToArray = JSON.parse(recuperoStorage);
        let peliculas = []
        
        for(let i = 0; i < favoritosToArray.length; i++){
            if(favoritosToArray[i] !== null){
                fetch(`https://api.themoviedb.org/3/movie/${favoritosToArray[i]}?api_key=1845c94396255a256363182ed898e8fc&language=en-US`)
                .then(res => res.json())
                .then(data => {
                    canciones.push(data)
                    this.setState({
                        canciones: canciones,
                        loader: false
                    });
                })
                .catch(err => console.log(err))
            }
        }
        
    };
    
    if (JSON.parse(recuperoStorage).length === 0){
        this.setState({
            loader: false
        })
    }
    
}

borrar(id){
    let recuperoStorage = localStorage.getItem('favoritos');
    let favoritosToArray = JSON.parse(recuperoStorage);

    let sacarFav = favoritosToArray.indexOf(id);
    favoritosToArray.splice(sacarFav, 1);

    let favoritosToString = JSON.stringify(favoritosToArray);
    localStorage.setItem('favoritos', favoritosToString);
}

//AGREGAR RENDER//

export default Favoritos;