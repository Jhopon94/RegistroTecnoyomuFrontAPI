import './css/modalEditCliente.css';
import BotonForm from './BotonForm';
import { useState } from 'react';

function ModalEditCliente({ isOpen, onClose}) {

    const [readOnly, setReadOnly] = useState(true);
    const [clasesInput, setClasesInput] = useState('inputModalEditCliente noEditable');
    const [btnDesactivado, setBtnDesactivado] = useState(true);
    const [btnEditOff, setBtnEditOff] = useState(false);
    const [clasesBtnReg, setClasesBtnReg] = useState('btnRegistrar clicOff');
    const [clasesBtnEdit, setClasesBtnEdit] = useState('btnEditar');

    const ActivarEditar = () => {
        setBtnDesactivado(false);
        setClasesBtnReg('btnRegistrar');
        setBtnEditOff(true);
        setClasesBtnEdit('btnEditar clicOff');
        setReadOnly(false);
        setClasesInput('inputModalEditCliente');
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

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formEditCliente'>
                    <input readOnly={readOnly} id='nombreEditCliente' placeholder='Nombre Completo' className={clasesInput}></input>
                    <input readOnly={readOnly} id='ccEditCliente' placeholder='Número de Cédula' className={clasesInput}></input>
                    <input readOnly={readOnly} id='celuEditCliente' placeholder='Número de Celular' className={clasesInput}></input>
                    <input readOnly={readOnly} id='direccEditCliente' placeholder='Dirección de Residencia' className={clasesInput}></input>
                    <input readOnly={readOnly} id='correoEditCliente' placeholder='Correo Electrónico' className={clasesInput}></input>
                    <div id='contBotonesEditCliente'>
                        <div id="btnRegEditCliDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado={clasesBtnReg} disabledImportado={btnDesactivado}/>
                        </div>
                        <div id="btnEditarEditCliDiv">
                            <BotonForm textoBoton="Editar" classNameImportado={clasesBtnEdit}  disabledImportado={btnEditOff} onClickImportado={ActivarEditar}/>
                        </div>
                        <div id="btnCancelEditCliDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={PressCancelar} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalEditCliente;