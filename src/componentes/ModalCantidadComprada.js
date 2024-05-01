import './css/modalCantidadComprada.css';
import BotonForm from "./BotonForm";

function ModalCantidadComprada({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div id="formCantidadComprada" className="modal">
                <div className='labelInput'>
                    <label>Establecer cantidad comprada: </label>
                    <input type="number"/>
                </div>
                <div className="dosBotones">
                    <BotonForm textoBoton='Agregar' classNameImportado='btnAceptar' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
        </div>
    );
}
export default ModalCantidadComprada;