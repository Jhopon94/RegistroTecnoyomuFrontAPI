import './css/modalEditUsuario.css';
import BotonForm from './BotonForm';
import { useEffect, useState } from 'react';
import { EditarUsuario, EliminarUsuario } from '../apis/usuarioApi';

function ModalEditUsuario({ isOpen, onClose, objetoUsuario }) {

    const [readOnly, setReadOnly] = useState(true);
    const [btnRegOff, setBtnRegOff] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesInput, setClasesInput] = useState('inputModalEditUsuario noEditable');
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');
    const [estamosEditando, setEstamosEditando] = useState(false);
    ////////////////////////////////////////////////////////////////
    const [inputNombreUsuario, setInputNombreUsuario] = useState("");
    const [inputTipoUsuario, setInputTipoUsuario] = useState("");
    const [inputContrasenia, setInputContrasenia] = useState("");
    const [adminSelected, setAdminSelected] = useState(false);
    const [reparadorSelected, setReparadorSelected] = useState(false);
    const [servClienteSelected, setServClienteSelected] = useState(false);
    const [contadorSelected, setContadorSelected] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setInputNombreUsuario(objetoUsuario.nombreUsuario);
            setInputTipoUsuario(objetoUsuario.rol);
            //Poner en el select el tipo de rol seleccionado
            switch (objetoUsuario.rol) {
                case 'Administrador':
                    setAdminSelected(true);
                    setReparadorSelected(false);
                    setServClienteSelected(false);
                    setContadorSelected(false);
                    break;
                case 'Reparador':
                    setReparadorSelected(true);
                    setAdminSelected(false);
                    setServClienteSelected(false);
                    setContadorSelected(false);
                    break;
                case 'ServicioAlCliente':
                    setServClienteSelected(true);
                    setAdminSelected(false);
                    setReparadorSelected(false);
                    setContadorSelected(false);
                    break;
                case 'Contador':
                    setContadorSelected(true);
                    setAdminSelected(false);
                    setReparadorSelected(false);
                    setServClienteSelected(false);
                    break;

                default:
                    break;
            }
            /////////////////////////////////////////////
            setInputContrasenia(objetoUsuario.contrasenia);
        }
    }, [isOpen]);

    const ActivarEditar = () => {
        setBtnRegOff(false);
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditUsuario');
        setEstamosEditando(true);
        ///// Inputs undefined para poder editarlos /////
        setInputNombreUsuario(undefined);
        setInputContrasenia(undefined);
    }

    const PressCancelar = () => {
        setBtnRegOff(true);
        setClasesBtnReg('btnRegistrar clicOff');
        setBtnEditOff(false);
        setClasesBtnEdit('btnEditar');
        setReadOnly(true);
        setClasesInput('inputModalEditUsuario clicOff');
        setEstamosEditando(false);
        onClose();
    }

    const ManejarSubmit = async (e) => {
        e.preventDefault();
        await EditarUsuario(objetoUsuario);
        PressCancelar();
    }

    const BorrarUsuario = async () => {
        const idEmpleado = objetoUsuario.idEmpleado;
        console.log(idEmpleado);
        const mensaje = "Seguro que desea eliminar a " + objetoUsuario.nombreUsuario + " ?";
        if(window.confirm(mensaje)){
            await EliminarUsuario(idEmpleado);
            PressCancelar();
        }
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formEditUsuario' onSubmit={e => ManejarSubmit(e)}>
                    <input readOnly={readOnly} id='correoEditUsuario' placeholder='Nombre de Usuario'
                        value={inputNombreUsuario} className={clasesInput} required
                        onChange={e => objetoUsuario.nombreUsuario = e.target.value}></input>
                    {estamosEditando ?
                        <select id='direccRegUsuario' className={clasesInput} required
                            onChange={e => objetoUsuario.rol = e.target.value}>
                            <option id='opcionNull' value='' >Selecciona Tipo de Usuario</option>
                            <option value="Administrador" selected={adminSelected}>Administrador</option>
                            <option value="Reparador" selected={reparadorSelected} >Reparador</option>
                            <option value="ServicioAlCliente" selected={servClienteSelected} >Servicio al Cliente</option>
                            <option value="Contador" selected={contadorSelected} >Contador</option>
                        </select> : <input readOnly={readOnly} id='direccEditUsuario'
                            placeholder='El Tipo de Usuario' className={clasesInput}
                            value={inputTipoUsuario} ></input>
                    }
                    <input readOnly={readOnly} id='correoEditUsuario' placeholder='Contraseña'
                        className={clasesInput} value={inputContrasenia} required
                        onChange={e => objetoUsuario.contrasenia = e.target.value}></input>
                    <h3><b>Fecha de Registro: </b>{objetoUsuario.fechaRegistro}</h3>
                    <div className='contBotonesEditUsuario'>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg}
                                disabledImportado={btnRegOff} typeImportado='submit'/>
                        </div>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' 
                            onClickImportado={PressCancelar} />
                        </div>
                    </div>
                    <div className='contBotonesEditUsuario'>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit}
                                disabledImportado={btnEditOff} onClickImportado={ActivarEditar} />
                        </div>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Eliminar" classNameImportado='btnCancelar' 
                            onClickImportado={BorrarUsuario} typeImportado='button'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalEditUsuario;