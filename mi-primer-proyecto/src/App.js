import React from "react";
import Home from "./screens/home/home";
import Detalle from "./screens/detalle/detalle";
import VerTodas from "./screens/vertodas/vertodas";
import Footer from "./Components/footer/footer";

import { Route, Switch } from "react-router-dom";
import Favoritos from "./screens/Favoritos/favoritos";
import Detalleserie from "./screens/detalleserie/detalleserie";
import NotFound from "./screens/notfound/notfound";
import { FaHeart } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/ver-mas/:id" component={VerTodas} />
        <Route path="/detallePelicula/id/:id" component={Detalle} />
        <Route path="/detalleSerie/id/:id" component={Detalleserie} />
        <Route path="/favoritos"  component={Favoritos} />
        <Route path="*"  component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;