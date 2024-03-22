import './css/clientes.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalRegCliente from './ModalRegCliente';
import ModalListaClientes from './ModalListaClientes';
import { useState } from 'react';

function Clientes() {

const [abrirModalRegCliente, setAbrirModalRegCliente] = useState(false);
const [abrirModalListaCLientes, setAbrirModalListaCLientes] = useState(false);

    return (
        <div id="contenedorPrincipalClientes">
            <Cabezal titulo="Clientes" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesClientes">
                <div id="contBtnRegisClientes"><BotonGeneral idImportado="btnRegisClientes" texto="Registrar Cliente" onClickImportado={() => setAbrirModalRegCliente(true)}/></div>
                <div id="contBtnListaClientes"><BotonGeneral idImportado="btnListaClientes" texto="Lista de Clientes" onClickImportado={() => setAbrirModalListaCLientes(true)}/></div>

            </div>
            <ModalRegCliente isOpen={abrirModalRegCliente} onClose={() => setAbrirModalRegCliente(false)} />
            <ModalListaClientes isOpen={abrirModalListaCLientes} onClose={() => setAbrirModalListaCLientes(false)} />
        </div>
    )
}
export default Clientes;