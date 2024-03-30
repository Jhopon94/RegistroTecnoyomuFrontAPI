import './css/modalAddTipoItem.css';
import BotonForm from "./BotonForm";

function ModalAddTipoItem({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div id="formAddTipoItem" className="modal">
                <div className='labelInput'>
                    <label>Tipo: </label>
                    <input type="text"/>
                </div>
                <div className="dosBotones">
                    <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
        </div>
    );
}
export default ModalAddTipoItem;