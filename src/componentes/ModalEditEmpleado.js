import './css/modalEditEmpleado.css';
import BotonForm from './BotonForm';
import { useState } from 'react';

function ModalEditEmpleado({ isOpen, onClose}) {

    const [readOnly, setReadOnly] = useState(true);
    const [clasesInput, setClasesInput] = useState('inputModalEditEmpleado noEditable');
    const [btnDesactivado, setBtnDesactivado] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesBtnFoto, setClasesBtnFoto] = useState('btnFoto clicOff');
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');
    const [clasesBtnInactivo, setClasesBtnInactivo] = useState('btnCancelar clicOff');

    const ActivarEditar = () => {
        setBtnDesactivado(false);
        setClasesBtnFoto('btnFoto');
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditEmpleado');
        setClasesBtnInactivo('btnCancelar');
    }

    const PressCancelar = () => {
        setBtnDesactivado(true);
        setClasesBtnFoto('btnFoto clicOff');
        setClasesBtnReg('btnRegistrar clicOff');
        setBtnEditOff(false);
        setClasesBtnEdit('btnEditar');
        setReadOnly(true);
        setClasesInput('inputModalEditEmpleado clicOff');
        setClasesBtnInactivo('btnCancelar clicOff');
        onClose();
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formEditEmpleado'>
                    <input readOnly={readOnly} id='nombreEditEmpleado' placeholder='Nombre Completo' className={clasesInput}></input>
                    <input readOnly={true} id='ccEditEmpleado' placeholder='Número de Cédula' className='inputModalEditEmpleado noEditable'></input>
                    <input readOnly={readOnly} id='cargoEditEmpleado' placeholder='Cargo' className={clasesInput}></input>
                    <input readOnly={readOnly} id='celuEditEmpleado' placeholder='Número de Celular' className={clasesInput}></input>
                    <input readOnly={readOnly} id='direccEditEmpleado' placeholder='Dirección de Residencia' className={clasesInput}></input>
                    <input readOnly={readOnly} id='correoEditEmpleado' placeholder='Correo Electrónico' className={clasesInput}></input>
                    <div id='contBotonesEditEmpleado'>
                        <div id="btnFotoEditEmplDiv">
                            <BotonForm textoBoton="Foto" classNameImportado={clasesBtnFoto} disabledImportado={btnDesactivado}/>
                        </div>
                        <div id="btnRegEditEmplDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg} disabledImportado={btnDesactivado}/>
                        </div>
                        <div id="btnCancelEditEmplpDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={PressCancelar} />
                        </div>
                        <div id="btnMarcarEditEmplpDiv">
                            <BotonForm textoBoton="Inactivo" classNameImportado={clasesBtnInactivo} />
                        </div>
                        <div id="btnEditarEditEmplpDiv">
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit}  disabledImportado={btnEditOff} onClickImportado={ActivarEditar}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalEditEmpleado;