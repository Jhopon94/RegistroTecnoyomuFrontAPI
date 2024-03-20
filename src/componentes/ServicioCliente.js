import './css/servicioCliente.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function ServicioCliente() {
    return (
        <div id="contenedorPrincipalSC">
            <Cabezal titulo="Servicio al Cliente" cerrarSesion={true} atras={false} />
            <div id="contenedorBotonesSC">
                <div id="contBtnClientes"><BotonGeneral idImportado="btnClientes" texto="Gestión Clientes" /></div>
                <div id="contBtnEquipos"><BotonGeneral idImportado="btnEquipos" texto="Gestión Equipos" /></div>
            </div>
        </div>
    )
}
export default ServicioCliente;