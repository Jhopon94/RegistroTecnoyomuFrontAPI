import './css/modalEditEmpleado.css';
import BotonForm from './BotonForm';
import { useState, useEffect } from 'react';
import { EditarEmpleado, MarcarInactivo } from '../apis/empleadoApi';

function ModalEditEmpleado({ isOpen, onClose, objetoEmpleado }) {

    const [readOnly, setReadOnly] = useState(true);
    const [clasesInput, setClasesInput] = useState('inputModalEditEmpleado noEditable');
    const [btnDesactivado, setBtnDesactivado] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesBtnFoto, setClasesBtnFoto] = useState('btnFoto clicOff');
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');
    const [clasesBtnInactivo, setClasesBtnInactivo] = useState('btnCancelar clicOff');
    const [inputNombre, setInputNombre] = useState("");
    const [inputCargo, setInputCargo] = useState("");
    const [inputCelular, setInputCelular] = useState("");
    const [inputDireccion, setInputDireccion] = useState("");
    const [inputCorreo, setInputCorreo] = useState("");
    //Botón para desactivar el empleado
    const [textoBtnEstadoEmpl, setTextoBtnEstadoEmpl] = useState("");
    const [clasesBtnEstadoEmpl, setClasesBtnEstadoEmpl] = useState('btnCancelar clicOff');

    const [empleadoEditado, setEmpleadoEditado] = useState(objetoEmpleado);

    //Garantizar que se use el objetoEmpleado solo cuando se abra el modal
    useEffect(() => {
        if (isOpen) {
            //Cotrolamos que los inputs reciban el valor a tiempo, cuando el modal se abra
            setInputNombre(objetoEmpleado.nombre);
            setInputCargo(objetoEmpleado.cargo);
            setInputCelular(objetoEmpleado.celular);
            setInputDireccion(objetoEmpleado.direccion);
            setInputCorreo(objetoEmpleado.correo);
            //No es redundante, es por la tardanza de los hooks
            setEmpleadoEditado(objetoEmpleado);
        }
    }, [isOpen]);

    const ActivarEditar = () => {
        setBtnDesactivado(false);
        setClasesBtnFoto('btnFoto');
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditEmpleado');
        setClasesBtnInactivo('btnCancelar');

        if(empleadoEditado.activo){
            setTextoBtnEstadoEmpl('Desactivar');
            setClasesBtnEstadoEmpl('btnCancelar');
        }
        if(!empleadoEditado.activo){
            setTextoBtnEstadoEmpl('Activar');
            setClasesBtnEstadoEmpl('btnAgregar');
        }

        //Inputs undefined para poderlos editar
        setInputNombre(undefined);
        setInputCargo(undefined);
        setInputCelular(undefined);
        setInputDireccion(undefined);
        setInputCorreo(undefined);
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
        setTextoBtnEstadoEmpl('');
        setClasesBtnEstadoEmpl('btnCancelar clicOff');
        onClose();
    }

    const ManejarSubmit = () => {
        EditarEmpleado(empleadoEditado);
        PressCancelar();
    }

    const DesactivarEmpl = () => {
        MarcarInactivo(empleadoEditado.id);
        PressCancelar();
    }

    if (!isOpen) return null;

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formEditEmpleado' onSubmit={ManejarSubmit}>
                    <input readOnly={readOnly} id='nombreEditEmpleado' placeholder='Nombre Completo' 
                        value={inputNombre} className={clasesInput}
                        onChange={e => empleadoEditado.nombre = e.target.value} required></input>
                    <input readOnly={true} id='ccEditEmpleado' placeholder='Número de Cédula' 
                        value={objetoEmpleado.id} className='inputModalEditEmpleado noEditable' required></input>
                    <input readOnly={readOnly} id='cargoEditEmpleado' placeholder='Cargo' 
                        value={inputCargo} className={clasesInput} 
                        onChange={e => empleadoEditado.cargo = e.target.value} required></input>
                    <input readOnly={readOnly} id='celuEditEmpleado' placeholder='Número de Celular' 
                        value={inputCelular} className={clasesInput} 
                        onChange={e => empleadoEditado.celular = e.target.value} required></input>
                    <input readOnly={readOnly} id='direccEditEmpleado' placeholder='Dirección de Residencia' 
                        value={inputDireccion} className={clasesInput} 
                        onChange={e => empleadoEditado.direccion = e.target.value} required></input>
                    <input readOnly={readOnly} id='correoEditEmpleado' placeholder='Correo Electrónico' 
                        value={inputCorreo} className={clasesInput} 
                        onChange={e => empleadoEditado.correo = e.target.value} required></input>
                    <div id='contBotonesEditEmpleado'>
                        <div id="btnFotoEditEmplDiv">
                            <BotonForm textoBoton="Foto" classNameImportado={clasesBtnFoto} 
                                disabledImportado={btnDesactivado} typeImportado='button' />
                        </div>
                        <div id="btnRegEditEmplDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg} 
                                disabledImportado={btnDesactivado} typeImportado='submit'/>
                        </div>
                        <div id="btnCancelEditEmplpDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' 
                                onClickImportado={PressCancelar} />
                        </div>
                        <div id="btnMarcarEditEmplpDiv">
                            <BotonForm textoBoton={textoBtnEstadoEmpl} classNameImportado={clasesBtnEstadoEmpl} 
                                disabledImportado={btnDesactivado} onClickImportado={DesactivarEmpl}/>
                        </div>
                        <div id="btnEditarEditEmplpDiv">
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit} 
                                disabledImportado={btnEditOff} onClickImportado={ActivarEditar} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalEditEmpleado;