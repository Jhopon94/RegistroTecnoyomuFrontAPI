import './css/administracion.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Administracion() {
    return (
        <div id="contenedorPrincipalAdmon">
            <Cabezal titulo="Administración" cerrarSesion={true}/>
            <div id="contenedorBotonesAdmon">
                <div id="contBtnEmpleados"><BotonGeneral idImportado="btnEmpleados" texto="Gestión Empleados" /></div>
                <div id="auxEspaciado"></div>
                <div id="contBtnUsuarios"><BotonGeneral idImportado="btnUsuarios" texto="Gestión Usuarios" /></div>
               <div id="contBtnClientes"><BotonGeneral idImportado="btnClientes" texto="Gestión Clientes" /></div>
                <div id="contBtnEquipos"><BotonGeneral idImportado="btnEquipos" texto="Gestión Equipos" /></div>
                <div id="contBtnContable"><BotonGeneral idImportado="btnContable" texto="Gestión Contable" /></div>
            </div>
        </div>
    )
}
export default Administracion;