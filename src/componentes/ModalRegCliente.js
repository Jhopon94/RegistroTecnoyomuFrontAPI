import './css/modalRegCliente.css';
import BotonForm from './BotonForm';
import { GuardarCliente } from '../apis/clienteApi';
import { useRef, useState } from 'react';
import ClaseCliente from '../clases/cliente';

function ModalRegCliente({ isOpen, onClose}) {

    const clasesInput = 'inputModalRegCliente';
    const [cliente, setCliente] = useState(new ClaseCliente());

    const RegistrarCliente = () => {
        GuardarCliente(cliente);
        ManejarOnClose();
    }

    const ManejarOnClose = () => {
        onClose();
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formRegCliente' onSubmit={RegistrarCliente}> 
                    <input id='nombreRegCliente' name='nombreRegCliente' placeholder='Nombre Completo' 
                        className={clasesInput} onChange={e => cliente.nombre = e.target.value}
                        type='text' required></input>
                    <input id='ccRegCliente' name='ccRegCliente' placeholder='Número de Cédula' 
                        className={clasesInput} onChange={e => cliente.id = e.target.value}
                        type='number' required></input>
                    <input id='celuRegCliente' name='celuRegCliente' placeholder='Número de Celular' 
                        className={clasesInput} onChange={e => cliente.celular = e.target.value}
                        type='text' required></input>
                    <input id='direccRegCliente' name='direccRegCliente' placeholder='Dirección de Residencia' 
                        type='text' className={clasesInput} onChange={e => cliente.direccion = e.target.value}></input>
                    <input id='correoRegCliente' name='correoRegCliente' placeholder='Correo Electrónico' 
                        type='email' className={clasesInput} onChange={e => cliente.correo = e.target.value}></input>
                    <div id='contBotonesRegCliente'>
                        <div id="btnRegistrarClienteDiv">
                            <BotonForm typeImportado='submit' textoBoton="Registrar" 
                                classNameImportado='btnRegistrar' />
                        </div>
                        <div id="btnCancelRegClienteDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' 
                                onClickImportado={ManejarOnClose} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalRegCliente;