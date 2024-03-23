import './css/servicioCliente.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import { Link } from 'react-router-dom';

function ServicioCliente() {
    return (
        <div id="contenedorPrincipalSC">
            <Cabezal titulo="Servicio al Cliente" cerrarSesion={true} atras={false} />
            <div id="contenedorBotonesSC">
                <div id="contBtnClientes"><Link to="/Clientes"><BotonGeneral idImportado="btnClientes" texto="Gestión Clientes" /></Link></div>
                <div id="contBtnEquipos"><Link to="/Equipos"><BotonGeneral idImportado="btnEquipos" texto="Gestión Equipos" /></Link></div>
            </div>
        </div>
    )
}
export default ServicioCliente;