import './css/empleados.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import { useState } from 'react';
import ModalRegEmpleado from './ModalRegEmpleado';
import ModalListaEmpleados from './ModalListaEmpleados';

function Empleados() {

    const [modalRegEmpleadoOpen, setModalRegEmpleadoOpen] = useState(false);
    const [modalListaEmpleadoOpen, setModalListaEmpleadoOpen] = useState(false);

    const AbrirModalLista = () => {
        setModalListaEmpleadoOpen(true);
    }

    const AbrirModalReg = () => {
        setModalRegEmpleadoOpen(true);
    }

    return (
        <div id="contenedorPrincipalEmpleados">
            <Cabezal titulo="Empleados" cerrarSesion={false} atras={true} />
            <div id="contenedorBotonesEmpleados">
                <div id="contBtnRegisEmpleados"><BotonGeneral onClickImportado={AbrirModalReg} idImportado="btnRegisEmpleados" texto="Registrar Empleado" /></div>
                <div id="contBtnListaEmpleados"><BotonGeneral onClickImportado={AbrirModalLista} idImportado="btnListaEmpleados" texto="Lista de Empleados" /></div>

            </div>
            <ModalRegEmpleado isOpen={modalRegEmpleadoOpen} onClose={() => setModalRegEmpleadoOpen(false)}>
            </ModalRegEmpleado>
            <ModalListaEmpleados isOpen={modalListaEmpleadoOpen} onClose={() => setModalListaEmpleadoOpen(false)} vieneDeUsuarios={false}>
            </ModalListaEmpleados>
        </div>
    )
}
export default Empleados;