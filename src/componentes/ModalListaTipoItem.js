import './css/modalListaTipoItem.css';
import BotonForm from "./BotonForm";
import ModalListaItems from './ModalListaItems';
import ModalAddTipoItem from './ModalAddTipoItem';
import { useState } from 'react';

function ModalListaTipoItem({ isOpen, onClose, vieneDeContabilidad, agregandoItem }) {

    const [abrirListaItems, setAbrirListaItems] = useState(false);
    const [abrirAddTipo, setAbrirAddTipo] = useState(false);

    const ManejarOnClicLista = () => {
        if(!agregandoItem) setAbrirListaItems(true);
        else  setAbrirListaItems(false)
    }

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div className="modal" id='formListaTipoItem'>
                <input type="text" placeholder='Búsqueda por Tipo'></input>
                <table>
                    <tr onClick={ManejarOnClicLista}>
                        <td>Tipo A</td>
                    </tr>
                    <tr onClick={ManejarOnClicLista}>
                        <td>Tipo B</td>
                    </tr>
                    <tr onClick={ManejarOnClicLista}>
                        <td>Tipo C</td>
                    </tr>
                </table>
                <div className='contBotones dosBotones'>
                {vieneDeContabilidad ?
                    <BotonForm textoBoton='+ Añadir' classNameImportado='btnAceptar' onClickImportado={() => setAbrirAddTipo(true)} />  
                    :
                    null
                     }
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose} />
                </div>
            </div>
            <ModalListaItems vieneDeContabilidad={vieneDeContabilidad} isOpen={abrirListaItems} onClose={() => setAbrirListaItems(false)} />
            <ModalAddTipoItem isOpen={abrirAddTipo} onClose={() => setAbrirAddTipo(false)} />
        </div>
    );
}
export default ModalListaTipoItem;