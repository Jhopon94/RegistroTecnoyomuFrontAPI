import './css/modalRegUsuario.css';
import BotonForm from './BotonForm';
import { useState } from 'react';

function ModalRegUsuario({ isOpen, onClose}) {

    const [clasesInputRegUsuario, setClasesInputRegUsuario] = useState('inputModalRegUsuario');

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formRegUsuario'>
                    <select id='celuRegUsuario' className={clasesInputRegUsuario}>
                        <option value="opcionCeroEmpl" >Selecciona Empleado</option>
                        <option value="empleado1" >Empleado Numero 1</option>
                        <option value="empelado2" >Empleado Numero 2</option>
                    </select>
                    <select id='direccRegUsuario' className={clasesInputRegUsuario}>
                        <option value="opcionCeroTipoUsu" >Selecciona Tipo de Usuario</option>
                        <option value="tipoUsu1" >Tipo de Usuario 1</option>
                        <option value="tipoUsu2" >Tipo de Usuario  2</option>
                    </select>
                    <input id='correoRegUsuario' placeholder='Asignar Contraseña' className={clasesInputRegUsuario}>

                    </input>
                    <div id='contBotonesRegUsuario'>
                        <div id="btnRegistrarUsuDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado='btnRegistrar' />
                        </div>
                        <div id="btnCancelRegUsuDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={onClose} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRegUsuario;