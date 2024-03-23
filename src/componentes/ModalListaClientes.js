import './css/modalListaClientes.css';
import BotonForm from './BotonForm';
import ModalEditCliente from './ModalEditCliente';
import ModalRegCliente from './ModalRegCliente';
import { useState } from 'react';
import VentanaIngresoEquipo from './VentanaIngresoEquipo';

function ModalListaClientes({ isOpen, onClose, deDondeViene }) {

    /* se pone aquí esta función para que se inicialice antes de uarla
    en la "banderaBtnAgregar" más adelante*/

    const ManejarBtnAgregar = () => {
        if (deDondeViene === "clientes") return false;
        if (deDondeViene === "ingresoEquipo") return true;
    }

    const [abrirModalRegCliente, setAbrirModalRegCliente] = useState(false); ////modal registrar cliente
    const btnAgregarCliente = <BotonForm idImportadoDiv="btnAddCliListCli" textoBoton="+ Nuevo" classNameImportado="btnAgregar" onClickImportado={() => setAbrirModalRegCliente(true)} />;
    const [modalEditCliOpen, setModalEditCliOpen] = useState(false); //Modal Editar Cliente
    const [modalIngEquipoOpen, setModalIngEquipoOpen] = useState(false);//modal ingresar equipo
    const banderaBtnAgregar = ManejarBtnAgregar();

    const DeDondeViene = () => { //para abrir la ventana segun de donde venga la peticion de lista clientes
        if (deDondeViene === "clientes") {
            setModalEditCliOpen(true);
        }
        if (deDondeViene === "ingresoEquipo") {
            setModalIngEquipoOpen(true);
        }
    }


    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaClientes'>
                    <input className='formListaCliChilds' id='inputFiltroCli'></input>
                    <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroCli">
                        <option value="nombre">Nombre</option>
                        <option value="cedula">Cédula</option>
                        <option value="celular">Celular</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaCli">
                        <tr className='editCliFilaTabla' onClick={DeDondeViene}>
                            <td >Nombre de Cliente</td>
                            <td id='puntoCli'>*</td>
                        </tr>
                    </table>
                    <div id='contBotonesListaCli'>
                        {banderaBtnAgregar ? btnAgregarCliente : null}
                        <BotonForm idImportadoDiv="btnCancelarListCli" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose} />
                    </div>
                </div>
            </div>
            <ModalEditCliente isOpen={modalEditCliOpen} onClose={() => setModalEditCliOpen(false)} />
            <ModalRegCliente isOpen={abrirModalRegCliente} onClose={() => setAbrirModalRegCliente(false)} />
            <VentanaIngresoEquipo isOpen={modalIngEquipoOpen} onClose={() => setModalIngEquipoOpen(false)}/>
        </div>
    );
}
export default ModalListaClientes;