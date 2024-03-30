import './css/modalListaItems.css';
import BotonForm from "./BotonForm";
import ModalCantidadItems from './ModalCantidadItems';
import { useState } from 'react';

function ModalListaItems({ isOpen, onClose }) {

    const [ abrirCantidadItems, setAbrirCantidadItems] = useState(false);

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div className="modal" id='formListaTipoItem'>
                <input type="text" placeholder='Búsqueda por Nombre'></input>
                <div className='auxTableRadius'>
                    <table>
                        <tr onClick={() => setAbrirCantidadItems(true)}>
                            <td>Ítem A</td>
                        </tr>
                        <tr onClick={() => setAbrirCantidadItems(true)}>
                            <td>Ítem B</td>
                        </tr>
                        <tr onClick={() => setAbrirCantidadItems(true)}>
                            <td>Ítem C</td>
                        </tr>
                    </table>
                </div>
                <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose} />
            </div>
            <ModalCantidadItems isOpen={abrirCantidadItems} onClose={() => setAbrirCantidadItems(false)} />
        </div>
    );
}
export default ModalListaItems;