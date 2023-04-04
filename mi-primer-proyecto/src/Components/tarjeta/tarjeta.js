import React, { Component } from 'react';
import './tarjeta.css';

class Tarjeta extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        };
    }
componentDidMount() {
  
    }
  render(){
       console.log(this.props);
        return(
            <>
         <div>
        <h3>{this.props.data.title}</h3>
        <h3>{this.props.data.vote_average}</h3>
        <h3>{this.props.data.release_date}</h3>
        <img src={`https://image.tmdb.org/t/p/original/${this.props.data.poster_path}`} alt={this.props.data.poster_path} />

         </div>
        
       </>
       
        )
    }

}

export default Tarjeta;