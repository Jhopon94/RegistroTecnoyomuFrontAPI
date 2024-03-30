import './css/modalCambiarEstadoRep.css';
import BotonForm from "./BotonForm";

function ModalCambiarEstadoRep({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <div id="formCambiarEstadoRep" className="modal">
                    <select>
                        <option>Recibido</option>
                        <option>En Reparación</option>
                        <option>Reparado</option>
                    </select>
                <div className="dosBotones">
                    <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
        </div>
    );
}
export default ModalCambiarEstadoRep;