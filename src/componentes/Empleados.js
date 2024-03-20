import './css/empleados.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Empleados() {
    return (
        <div id="contenedorPrincipalEmpleados">
            <Cabezal titulo="Empleados" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesEmpleados">
                <div id="contBtnRegisEmpleados"><BotonGeneral idImportado="btnRegisEmpleados" texto="Registrar Empleado" /></div>
                <div id="contBtnListaEmpleados"><BotonGeneral idImportado="btnListaEmpleados" texto="Lista de Empleados" /></div>

            </div>
        </div>
    )
}
export default Empleados;