import './css/modalListaEqEntregados.css';
import BotonForm from './BotonForm';
import VentanaDetallesEqEntregado from './VentanaDetallesEqEntregado';
import { useState } from 'react';

function ModalListaEqEntregados({ isOpen, onClose }) {

    const [ abrirDetallesEqEntregado, setAbrirDetallesEqEntregado ] = useState(false);

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEqEntregados'>
                    <input className='formListaCliChilds' id='inputFiltroEqEntregados'></input>
                    <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroEqEntregados">
                        <option value="fecha">Fecha</option>
                        <option value="cedula">Cédula</option>
                        <option value="nombre">Nombre</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaEqEntregados">
                        <tr className='editCliFilaTabla' onClick={() => setAbrirDetallesEqEntregado(true)}>
                            <td >Fecha Uno</td>
                            <td className='nombreListaEqEntregados'>Nombre del Cliente</td>
                        </tr>
                    </table>
                    <div id='contBotonesListaEqEntregados'>
                        <BotonForm idImportadoDiv="btnCancelarListEqEntregados" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose} />
                    </div>
                </div>
                <VentanaDetallesEqEntregado isOpen={abrirDetallesEqEntregado} onClose={() => setAbrirDetallesEqEntregado(false)} />
            </div>
        </div>
    );
}
export default ModalListaEqEntregados;