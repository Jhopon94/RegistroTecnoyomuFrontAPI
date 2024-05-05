import './css/modalEditCliente.css';
import BotonForm from './BotonForm';
import { useEffect, useState } from 'react';
import ClaseCliente from '../clases/cliente';
import { EditarCliente } from '../apis/clienteApi';

function ModalEditCliente({ isOpen, onClose, objetoCliente }) {



    const [readOnly, setReadOnly] = useState(true);
    const [clasesInput, setClasesInput] = useState('inputModalEditCliente noEditable');
    const [btnDesactivado, setBtnDesactivado] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');
    const [inputNombre, setInputNombre] = useState("");
    const [inputCelular, setInputCelular] = useState("");
    const [inputDireccion, setInputDireccion] = useState("");
    const [inputCorreo, setInputCorreo] = useState("");
    //Cliente para mandar editado
    const [clienteEditado, setClienteEditado] = useState(objetoCliente);

    //Garantizar que se use el objetoCliente solo cuando se abra el modal
    useEffect(() => {
        if (isOpen) {
            //Cotrolamos que los inputs reciban el valor a tiempo, cuando el modal se abra
            setInputNombre(objetoCliente.nombre);
            setInputCelular(objetoCliente.celular);
            setInputDireccion(objetoCliente.direccion);
            setInputCorreo(objetoCliente.correo);
            setClienteEditado(objetoCliente);
        }
    }, [isOpen]);

    const ActivarEditar = () => {
        setBtnDesactivado(false);
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditCliente');
        //Volvemos los inputs editables respecto al value que se les da
        setInputNombre(undefined);
        setInputCelular(undefined);
        setInputDireccion(undefined);
        setInputCorreo(undefined);
    }

    const PressCancelar = () => {
        setBtnDesactivado(true);
        setClasesBtnReg('btnRegistrar clicOff');
        setBtnEditOff(false);
        setClasesBtnEdit('btnEditar');
        setReadOnly(true);
        setClasesInput('inputModalEditCliente clicOff');
        onClose();
    }

    const ManejarRegistrar = () => {
        EditarCliente(clienteEditado);
        PressCancelar();
    }


    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formEditCliente' onSubmit={ManejarRegistrar}>
                    <input readOnly={readOnly} id='nombreEditCliente' value={inputNombre}
                        className={clasesInput} onChange={e => clienteEditado.nombre = e.target.value} 
                            type='text' placeholder='Nombre Completo' required></input>
                    <input readOnly={true} id='ccEditCliente' value={objetoCliente.id}
                        className='inputModalEditCliente noEditable'></input>
                    <input readOnly={readOnly} id='celuEditCliente' value={inputCelular}
                        className={clasesInput}  onChange={e => clienteEditado.celular = e.target.value}
                            placeholder='Celular' required></input>
                    <input readOnly={readOnly} id='direccEditCliente' value={inputDireccion}
                        className={clasesInput} onChange={e => clienteEditado.direccion = e.target.value}
                            placeholder='Dirección'></input>
                    <input readOnly={readOnly} id='correoEditCliente' value={inputCorreo}
                        className={clasesInput} onChange={e => clienteEditado.correo = e.target.value}
                            placeholder='Correo Electrónico'></input>
                    <label className='infoExtra'><b>Fecha de Registro</b>{' --> ' + objetoCliente.fechaRegistro}</label>
                    <label className='infoExtra'><b>Veces que ha tomado un servicio</b>{' --> ' + objetoCliente.serviciosTomados}</label>
                    <div id='contBotonesEditCliente'>
                        <div id="btnRegEditCliDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg} 
                                disabledImportado={btnDesactivado} typeImportado={'submit'}/>
                        </div>
                        <div id="btnEditarEditCliDiv">
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit} disabledImportado={btnEditOff} onClickImportado={ActivarEditar} />
                        </div>
                        <div id="btnCancelEditCliDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={PressCancelar} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalEditCliente;