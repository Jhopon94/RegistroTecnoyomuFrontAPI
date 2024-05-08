import './css/modalRegUsuario.css';
import BotonForm from './BotonForm';
import ModalListaEmpleados from './ModalListaEmpleados';
import { useEffect, useState } from 'react';
import ClaseUsuario from '../clases/usuario';
import { GuardarUsuario } from '../apis/usuarioApi';

function ModalRegUsuario({ isOpen, onClose}) {

    const [clasesInputRegUsuario, setClasesInputRegUsuario] = useState('inputModalRegUsuario');
    const [abrirListaEmple, setAbrirListaEmpl] = useState(false);
    const [usuario, setUsuario] = useState(new ClaseUsuario);
    const [nombreEmpleado, setNombreEmpleado] = useState("Seleccionar Empleado");

    const CapturarEmpleado = (objetoEmpleado) =>{
        usuario.idEmpleado = objetoEmpleado.id;
        setNombreEmpleado(objetoEmpleado.nombre);
    }

    const ManejarSubmit = async (e) => {
        e.preventDefault();
        if(usuario.idEmpleado !== null){
            await GuardarUsuario(usuario);
            ManejarCerrar();
        }else{
            alert("Elige un empleado!");
        }
    }

    const ManejarCerrar = () => {
        setNombreEmpleado("Seleccionar Empleado");
        onClose();
    }

    if (!isOpen) return null;

    //Existe un Campo hidden en el forulario que envía la cédula del empleado selecc para usuario

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formRegUsuario' onSubmit={e => ManejarSubmit(e)}>
                    <button id='btnSelecEmpl' className={clasesInputRegUsuario + ' btnGuardar'} 
                        onClick={() => setAbrirListaEmpl(true)} type='button'>
                        {nombreEmpleado}
                    </button>
                    <select id='direccRegUsuario' className={clasesInputRegUsuario}
                    onChange={e => usuario.rol = e.target.value} required>
                        <option id='opcionNull' value='' >Selecciona Tipo de Usuario</option>
                        <option value="Administrador" >Administrador</option>
                        <option value="Reparador" >Reparador</option>
                        <option value="ServicioAlCliente" >Servicio al Cliente</option>
                        <option value="Contador" >Contador</option>
                    </select>
                    <input id='nombreUsuRegUsuario' placeholder='Nombre de Usuario sin Espacios' 
                        className={clasesInputRegUsuario} 
                        onChange={e => usuario.nombreUsuario = e.target.value} type='text'
                        required>
                    </input>
                    <input id='correoRegUsuario' placeholder='Asignar Contraseña' 
                        className={clasesInputRegUsuario} 
                        onChange={e => usuario.contrasenia = e.target.value} type='text'
                        required>
                    </input>
                    <div id='contBotonesRegUsuario'>
                        <div id="btnRegistrarUsuDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado='btnRegistrar' 
                                typeImportado='submit'/>
                        </div>
                        <div id="btnCancelRegUsuDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' 
                                onClickImportado={ManejarCerrar} />
                        </div>
                    </div>
                </form>
            </div>
            <ModalListaEmpleados isOpen={abrirListaEmple} onClose={() => setAbrirListaEmpl(false)} 
                vieneDeUsuarios={true} enviarEmpleado={(objEmpleado) => CapturarEmpleado(objEmpleado)}/>
        </div>
    );
}
export default ModalRegUsuario;