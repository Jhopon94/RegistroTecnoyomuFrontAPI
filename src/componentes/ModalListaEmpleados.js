import './css/modalListaEmpleados.css';
import BotonForm from './BotonForm';
import ModalEditEmpleado from './ModalEditEmpleado';
import { useState } from 'react';

function ModalListaEmpleados({ isOpen, onClose, vieneDeUsuarios}) {
    const [modalEditEmplOpen, setModalEditEmplOpen] = useState(false);

    const decidirQueAbrir = () =>{
        if(vieneDeUsuarios){
            onClose();
        }else{
            setModalEditEmplOpen(true);
        }
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEmpleados'>
                    <input className='formListaEmplChilds' id='inputFiltroEmpl'></input>
                    <select name='filtrarListaEmpl' className='formListaEmplChilds' id="selectFiltroEmpl">
                        <option value="nombre">Nombre</option>
                        <option value="cedula">Cédula</option>
                        <option value="celular">Celular</option>
                        <option value="correo">Correo</option>
                        <option value="cargo">Cargo</option>
                    </select>
                    <table className='formListaEmplChilds' id="tablaListaEmpl">
                        <tr className='editEmplFilaTabla' onClick={decidirQueAbrir}>
                            <td >Nombre de Empleado</td>
                            <td id='puntoEmpl'>*</td>
                        </tr>
                    </table>
                    <BotonForm idImportadoDiv="btnCancelarListEmpl" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose}/>
                </div>
            </div>
            <ModalEditEmpleado isOpen={modalEditEmplOpen} onClose={() => setModalEditEmplOpen(false)} />
        </div>
    );
}
export default ModalListaEmpleados;