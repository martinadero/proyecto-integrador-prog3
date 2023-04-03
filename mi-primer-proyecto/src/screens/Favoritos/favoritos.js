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
};
//AGREGAR RENDER//

export default Favoritos;