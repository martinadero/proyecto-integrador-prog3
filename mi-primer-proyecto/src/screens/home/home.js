import React, { Component } from 'react';
import './style.css';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            props: props ,
            canciones: [],
            resultadoDeBusqueda: [],
            valor: props.value, 
        };
    }


    componentDidMount() {
        //Buscamos datos
        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}/')
            .then(res => res.json())
            .then(data => this.setState({
                canciones: data.results,
                loader: false
            }))
            .catch(err => console.log(err))

        fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}/') //CAMBIAR ESTE LINK//
            .then(response => response.json())
            .then(data => this.setState({
                canciones: data.results,
                loader: false

            }))
            .catch(error => console.log(error));
    }

}

export default Home;