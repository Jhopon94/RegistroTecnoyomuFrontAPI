import './css/modalEditUsuario.css';
import BotonForm from './BotonForm';
import { useState } from 'react';

function ModalEditUsuario({ isOpen, onClose }) {

    const [readOnly, setReadOnly] = useState(true);
    const [btnRegOff, setBtnRegOff] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesInput, setClasesInput] = useState('inputModalEditUsuario noEditable');
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');
    const [estamosEditando, setEstamosEditando] = useState(false);

    const ActivarEditar = () => {
        setBtnRegOff(false);
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditUsuario');
        setEstamosEditando(true);
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

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formEditUsuario'>
                    <input readOnly={readOnly} id='correoEditUsuario' placeholder='Nombre de Usuario' className={clasesInput}></input>
                    {estamosEditando ?
                        <select id='direccRegUsuario' className={clasesInput}>
                            <option value="opcionCeroTipoUsu" >Selecciona Tipo de Usuario</option>
                            <option value="tipoUsu1" >Tipo de Usuario 1</option>
                            <option value="tipoUsu2" >Tipo de Usuario  2</option>
                        </select> : <input readOnly={readOnly} id='direccEditUsuario' placeholder='El Tipo de Usuario' className={clasesInput}></input>
                    }
                    <input readOnly={readOnly} id='correoEditUsuario' placeholder='Contraseña' className={clasesInput}></input>
                    <div className='contBotonesEditUsuario'>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg} disabledImportado={btnRegOff} />
                        </div>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={PressCancelar} />
                        </div>
                    </div>
                    <div className='contBotonesEditUsuario'>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit} disabledImportado={btnEditOff} onClickImportado={ActivarEditar} />
                        </div>
                        <div className='btnEditUsuarioDiv'>
                            <BotonForm textoBoton="Eliminar" classNameImportado='btnCancelar' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalEditUsuario;