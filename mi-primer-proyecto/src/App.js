import React from 'react';
import Home from './screens/home/home';
import Detalle from './screens/detalle/detalle'
import Footer from './Components/footer/footer';
import { Route, Switch,} from 'react-router-dom';
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
