import './css/modalTotalServicio.css';
import BotonForm from './BotonForm';
import ModalEditUsuario from './ModalEditUsuario';
import { useState } from 'react';

function ModalTotalServicio({ isOpen, onClose }) {
    const [modalEditUsuOpen, setModalEditUsuOpen] = useState(false);
    const etAbono = "(Poner cero si no realiza abono)";

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formTotalIngEq'>
                    <section id='contEtTotalIngEq'>
                        <label className='etTotalIngEq'>Total:</label>
                        <label className='etTotalIngEq'>$ 0</label>
                    </section>
                    <section id='contAbonoIngEq'>
                        <label className='fuenteXLargOrbitron'>Abono Realizado: </label>
                        <input className='fuenteXLargOrbitron' type='number'/>
                    </section>
                    <section id='contAvisoAbono'>
                        <label id='etAvisoAbono'>{etAbono}</label>
                    </section>
                    <section id='contBotonesTotalIngEq'>
                        <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar' />
                        <BotonForm idImportadoDiv="btnCancelarTotalIngEq" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={onClose} />
                    </section>
                </div>
            </div>
            <ModalEditUsuario isOpen={modalEditUsuOpen} onClose={() => { setModalEditUsuOpen(false) }} />
        </div>
    );
}
export default ModalTotalServicio;