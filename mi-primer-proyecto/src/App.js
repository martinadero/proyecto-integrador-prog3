import React from 'react';
import Tarjeta from './Components/tarjeta/tarjeta';
import Home from './screens/home/home';
import Detalle from './screens/detalle/detalle'
import Footer from './Components/footer/footer';
import { Route, Switch,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Home/>
   <Footer/>
   
       </div>
  );
}

export default App;
