import './css/modalListaUsuarios.css';
import BotonForm from './BotonForm';
import ModalEditUsuario from './ModalEditUsuario';
import { useState } from 'react';

function ModalListaUsuarios({ isOpen, onClose}) {
    const [modalEditUsuOpen, setModalEditUsuOpen] = useState(false);

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaUsuarios'>
                    <input className='formListaUsuChilds' id='inputFiltroUsu'></input>
                    <select name='filtrarListaUsu' className='formListaUsuChilds' id="selectFiltroUsu">
                        <option value="nombre">Nombre</option>
                        <option value="cedula">Cédula</option>
                        <option value="tipoUsuario">Tipo de Usuario</option>
                    </select>
                    <table className='formListaUsuChilds' id="tablaListaUsu">
                        <tr className='editUsuFilaTabla' onClick={() => setModalEditUsuOpen(true)}>
                            <td >Nombre de Usuario (Empleado)</td>
                        </tr>
                    </table>
                    <BotonForm idImportadoDiv="btnCancelarListUsu" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose}/>
                </div>
            </div>
            <ModalEditUsuario isOpen={modalEditUsuOpen} onClose={() => {setModalEditUsuOpen(false)}} />
        </div>
    );
}
export default ModalListaUsuarios;