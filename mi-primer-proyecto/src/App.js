import React from "react";
import Home from "./screens/home/home";
import Detalle from "./screens/detalle/detalle";
import VerTodas from "./screens/vertodas/vertodas";
import Footer from "./Components/footer/footer";

import { Route, BrowserRouter } from "react-router-dom";
import Favoritos from "./screens/Favoritos/favoritos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/ver-mas/:id" component={VerTodas} />
        <Route path="/detallePelicula/id/:id" component={Detalle} />
        <Route path="/favoritos"  component={Favoritos} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;