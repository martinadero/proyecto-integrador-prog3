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
    };



}

export default Home;