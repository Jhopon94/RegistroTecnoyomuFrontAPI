import './css/contabilidad.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Contabilidad() {
    return (
        <div id="contenedorPrincipalContabilidad">
            <Cabezal titulo="Contabilidad" cerrarSesion={true}  atras={false}/>
            <div id="contenedorBotonesContabilidad">
                <div id="contBtnContables"><BotonGeneral idImportado="btnContables" texto="Datos Contables" /></div>
                <div id="contBtnInventario"><BotonGeneral idImportado="btnInventario" texto="Inventario" /></div>
            </div>
        </div>
    )
}
export default Contabilidad;