import './css/modalRegCliente.css';
import BotonForm from './BotonForm';

function ModalRegCliente({ isOpen, onClose}) {

    const clasesInput = 'inputModalRegCliente';

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formRegCliente'> 
                    <input id='nombreRegCliente' placeholder='Nombre Completo' className={clasesInput}></input>
                    <input id='ccRegCliente' placeholder='Número de Cédula' className={clasesInput}></input>
                    <input id='celuRegCliente' placeholder='Número de Celular' className={clasesInput}></input>
                    <input id='direccRegCliente' placeholder='Dirección de Residencia' className={clasesInput}></input>
                    <input id='correoRegCliente' placeholder='Correo Electrónico' className={clasesInput}></input>
                    <div id='contBotonesRegCliente'>
                        <div id="btnRegistrarClienteDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado='btnRegistrar' />
                        </div>
                        <div id="btnCancelRegClienteDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={onClose} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRegCliente;