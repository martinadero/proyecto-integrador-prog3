import { Component } from "react"
import BarraBusqueda from "./BarraBusqueda"
import ResultadosBusqueda from "./ResultadosBusqueda"
import { API_ENDPOINTS } from "../../constants"


class Buscador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            busqueda: ''
        }
    }
    searchInDatabes() {
        fetch(API_ENDPOINTS.albums)
        .then(response => response.json())
        .then(data => {console.log(data);})
    }
    render() {
        return (
            <>
                <BarraBusqueda />
                {
                    this.state.busqueda !== '' &&
                    <ResultadosBusqueda />
                }
            </>



        )
    }
}
export default Buscador