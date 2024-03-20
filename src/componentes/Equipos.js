import './css/equipos.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Equipos() {
    return (
        <div id="contenedorPrincipalEquipos">
            <Cabezal titulo="Equipos" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesEquipos">
                <div id="contBtnRegisIngEquipo" className='tresBotones'><BotonGeneral idImportado="btnRegisIngEquipo" texto="Registrar Ingreso" /><div> </div></div>
                <div id="contBtnEqIng" className='tresBotones'><div> </div><BotonGeneral idImportado="btnEqIng" texto="Equipos Ingresados" /></div>
                <div className="auxTresBotones" ></div>
               <div id="contBtnEqEntreg" className='tresBotones'><BotonGeneral idImportado="btnEqEntreg" texto="Equipos Entregados" /></div>
            </div>
        </div>
    )
}
export default Equipos;