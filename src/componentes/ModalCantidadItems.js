import './css/modalCantidadItems.css';
import BotonForm from "./BotonForm";

function ModalCantidadItems({ isOpen, onClose }) {

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div className="modal" id='formCantidadItems'>
                <textarea type="text" placeholder='Descripción del ítem...' disabled></textarea>
                <div className='auxTableRadius'>
                    <label>Cantidad a Usar: </label><input type='number' /><label> / 100</label>
                </div>
                <div className='dosBotones'>
                    <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose} />
                </div> </div>
        </div>
    );
}
export default ModalCantidadItems;