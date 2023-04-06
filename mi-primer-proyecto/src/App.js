import React from 'react';
import Tarjeta from './Components/tarjeta/tarjeta';
import Home from './screens/home/home';
import Detalle from './screens/Detalle/detalle'
import Footer from './Components/footer/footer';
import { Route, Switch,Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Switch>
       <Route path='/' component={Home}/>
       <Route path='/detallePelicula/id/:id'component={Detalle} />
    </Switch>
      
   <Footer/>
   
       </div>
  );
}

export default App;
