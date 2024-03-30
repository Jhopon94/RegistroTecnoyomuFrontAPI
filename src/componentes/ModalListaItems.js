import './css/modalListaItems.css';
import BotonForm from "./BotonForm";
import ModalCantidadItems from './ModalCantidadItems';
import ModalEditItem from './ModalEditItem';
import { useState } from 'react';

function ModalListaItems({ isOpen, onClose, vieneDeContabilidad }) {

    const [ abrirCantidadItems, setAbrirCantidadItems] = useState(false);
    const [editarItem, setEditarItem] = useState(false);

    const ManejarClicTabla = () => {
        if(vieneDeContabilidad){
            setEditarItem(true);
            setAbrirCantidadItems(false);
        }
        else{
            setEditarItem(false);
            setAbrirCantidadItems(true);
        }
    }

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div className="modal" id='formListaTipoItem'>
                <input type="text" placeholder='Búsqueda por Nombre'></input>
                <div className='auxTableRadius'>
                    <table>
                        <tr onClick={ManejarClicTabla}>
                            <td>Ítem A</td>
                        </tr>
                        <tr onClick={ManejarClicTabla}>
                            <td>Ítem B</td>
                        </tr>
                        <tr onClick={ManejarClicTabla}>
                            <td>Ítem C</td>
                        </tr>
                    </table>
                </div>
                <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose} />
            </div>
            <ModalCantidadItems isOpen={abrirCantidadItems} onClose={() => setAbrirCantidadItems(false)} />
            <ModalEditItem isOpen={editarItem} onClose={() => setEditarItem(false)} />
        </div>
    );
}
export default ModalListaItems;