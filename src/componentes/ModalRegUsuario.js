import './css/modalRegUsuario.css';
import BotonForm from './BotonForm';
import ModalListaEmpleados from './ModalListaEmpleados';
import { useState } from 'react';

function ModalRegUsuario({ isOpen, onClose}) {

    const [clasesInputRegUsuario, setClasesInputRegUsuario] = useState('inputModalRegUsuario');
    const [abrirListaEmple, setAbrirListaEmpl] = useState(false);

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formRegUsuario'>
                    <button id='btnSelecEmpl' className={clasesInputRegUsuario + ' btnGuardar'} onClick={() => setAbrirListaEmpl(true)}>
                        Seleccionar Empleado
                    </button>
                    <select id='direccRegUsuario' className={clasesInputRegUsuario}>
                        <option value="opcionCeroTipoUsu" >Selecciona Tipo de Usuario</option>
                        <option value="tipoUsu1" >Tipo de Usuario 1</option>
                        <option value="tipoUsu2" >Tipo de Usuario  2</option>
                    </select>
                    <input id='nombreUsuRegUsuario' placeholder='Nombre de Usuario sin Espacios' className={clasesInputRegUsuario}>
                    </input>
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
            <ModalListaEmpleados isOpen={abrirListaEmple} onClose={() => setAbrirListaEmpl(false)} vieneDeUsuarios={true}/>
        </div>
    );
}
export default ModalRegUsuario;