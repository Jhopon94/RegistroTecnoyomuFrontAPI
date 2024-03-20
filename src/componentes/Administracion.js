import './css/administracion.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import { Link } from 'react-router-dom';

function Administracion() {


    return (
        <div id="contenedorPrincipalAdmon">
            <Cabezal titulo="Administración" cerrarSesion={true} atras={false}/>
            <div id="contenedorBotonesAdmon">
                <div id="contBtnEmpleados"><Link to="/Empleados"><BotonGeneral idImportado="btnEmpleados" texto="Gestión Empleados" /></Link></div>
                <div id="auxEspaciado"></div>
                <div id="contBtnUsuarios"><Link to="/Usuarios"><BotonGeneral idImportado="btnUsuarios" texto="Gestión Usuarios" /></Link></div>
               <div id="contBtnClientes"><Link to="/Clientes"><BotonGeneral idImportado="btnClientes" texto="Gestión Clientes" /></Link></div>
                <div id="contBtnEquipos"><Link to="/Equipos"><BotonGeneral idImportado="btnEquipos" texto="Gestión Equipos" /></Link></div>
                <div id="contBtnContable"><Link to="/Contabilidad" state={"admon"}><BotonGeneral idImportado="btnContable" texto="Gestión Contable" /></Link></div>
            </div>
        </div>
    )
}
export default Administracion;