import './css/modalListaClientes.css';
import BotonForm from './BotonForm';
import ModalEditCliente from './ModalEditCliente';
import { useState } from 'react';

function ModalListaClientes({ isOpen, onClose}) {
    const [modalEditCliOpen, setModalEditCliOpen] = useState(false);

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
                        <tr className='editCliFilaTabla' onClick={() => setModalEditCliOpen(true)}>
                            <td >Nombre de Cliente</td>
                            <td id='puntoCli'>*</td>
                        </tr>
                    </table>
                    <BotonForm idImportadoDiv="btnCancelarListCli" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose}/>
                </div>
            </div>
            <ModalEditCliente isOpen={modalEditCliOpen} onClose={() => setModalEditCliOpen(false)} />
        </div>
    );
}
export default ModalListaClientes;