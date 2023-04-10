import React, { Component } from 'react';
import './serieTarjeta.css';

class serieTarjeta extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        console.log(this.props);
        return (
                <div className='tarjetas'>
                    <h3 className='textotarjeta'>{this.props.data.overview}</h3>
                    <h3 className='textotarjeta'>{this.props.data.name}</h3>
                    <h3 className='textotarjeta'>{this.props.data.first_air_date}</h3>
                    <img className='imagenes' src={`poster_path: "/64xJnzk6z6Oj6dKha2h4JxgDy6x.jpg"}`} alt={this.props.data.poster_path} />
                </div>
        )
    }
}


export default serieTarjeta