import './css/clientes.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Clientes() {
    return (
        <div id="contenedorPrincipalClientes">
            <Cabezal titulo="Clientes" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesClientes">
                <div id="contBtnRegisClientes"><BotonGeneral idImportado="btnRegisClientes" texto="Registrar Cliente" /></div>
                <div id="contBtnListaClientes"><BotonGeneral idImportado="btnListaClientes" texto="Lista de Clientes" /></div>

            </div>
        </div>
    )
}
export default Clientes;