import './css/reparacion.css'
import Cabezal from "./Cabezal";

const Reparacion = () =>{
    return(
        <div id="contenedorPrincipalReparacion">
            <Cabezal titulo="Reparación" cerrarSesion={true}  atras={false}/>
            <input id="etBusquedaReparacion" placeholder="Buscar por Nombre"></input>
            <table id="tablaReparacion">
                <thead>
                    <tr>
                        <th>Id Equipo</th>
                        <th>Nombre del Cliente</th>
                        <th>Tipo de Ingreso</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default Reparacion;