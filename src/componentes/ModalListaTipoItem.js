import './css/modalListaTipoItem.css';
import BotonForm from "./BotonForm";
import ModalListaItems from './ModalListaItems';
import { useState } from 'react';

function ModalListaTipoItem({isOpen, onClose}){

    const [abrirListaItems, setAbrirListaItems] = useState(false);

    if(!isOpen) return null;
    return(
        <div className="modalTransparencia">
            <div className="modal" id='formListaTipoItem'>
                <input type="text" placeholder='Búsqueda por Tipo'></input>
                <table>
                    <tr onClick={() => setAbrirListaItems(true)}>
                        <td>Tipo A</td>
                    </tr>
                    <tr onClick={() => setAbrirListaItems(true)}>
                        <td>Tipo B</td>
                    </tr>
                    <tr onClick={() => setAbrirListaItems(true)}>
                        <td>Tipo C</td>
                    </tr>
                </table>
                <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
            </div>
            <ModalListaItems isOpen={abrirListaItems} onClose={() => setAbrirListaItems(false)} />
        </div>
    );
}
export default ModalListaTipoItem;