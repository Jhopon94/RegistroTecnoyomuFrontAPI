import './css/inventario.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Inventario() {
    return (
        <div id="contenedorPrincipalInventario">
            <Cabezal titulo="Inventario" cerrarSesion={true}/>
            <div id="contenedorBotonesInventario">
                <div id="contBtnRegisItems"><BotonGeneral idImportado="btnRegisItems" texto="Registrar Item" /></div>
                <div id="contBtnListaItems"><BotonGeneral idImportado="btnListaItems" texto="Lista de Items" /></div>

            </div>
        </div>
    )
}
export default Inventario;