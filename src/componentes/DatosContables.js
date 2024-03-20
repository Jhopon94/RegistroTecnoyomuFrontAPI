import './css/datosContables.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function DatosContables() {
    return (
        <div id="contenedorPrincipalDatosContables">
            <Cabezal titulo="Datos Contables"  cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesDatosContables">
                <div id="contBtnConsIng" className='tresBotones'><BotonGeneral idImportado="btnConsIng" texto="Consultar Ingresos" /><div> </div></div>
                <div id="contBtnConsCompras" className='tresBotones'><div> </div><BotonGeneral idImportado="btnConsCompras" texto="Consultar Compras" /></div>
                <div className='auxTresBotones' ></div>
               <div id="contBtnDeudores" className='tresBotones'><BotonGeneral idImportado="btnDeudores" texto="Deudores" /></div>
            </div>
        </div>
    )
}
export default DatosContables;