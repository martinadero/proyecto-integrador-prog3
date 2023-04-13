import React from "react";
import './notfound.css'
import Header from "../../Components/header/header";


function NotFound(props){
  return(
    <div className="not">
    <Header/> 
        <h1 className="home">Esta pagina no existe, por favor cliquea alguna seccion en el header para redirigirte a alguna pagina que exista</h1>
      
    </div>
)
}

export default NotFound
