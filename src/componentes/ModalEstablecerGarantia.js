import './css/modalEstablecerGarantia.css';
import BotonForm from "./BotonForm";

function ModalEstablecerGarantia({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div id="formEstablecerGarantia" className="modal">
                <div className='labelInput'>
                    <label>Establecer Días de Garantía: </label>
                    <input type="number"/>
                </div>
                <div className="dosBotones">
                    <BotonForm textoBoton='Finalizar' classNameImportado='btnAceptar' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
        </div>
    );
}
export default ModalEstablecerGarantia;