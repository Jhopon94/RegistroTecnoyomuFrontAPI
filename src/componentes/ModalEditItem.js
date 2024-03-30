import './css/modalEditItem.css';
import BotonForm from './BotonForm';
import ModalListaTipoItem from './ModalListaTipoItem';
import { useState } from 'react';

function ModalEditItem({ isOpen, onClose }) {

    const tipoItemLabel = <label>Tipo de Ítem: </label>
    const tipoItemBtn = <BotonForm onClickImportado={() => setAbrirListaTipos(true)} textoBoton='Cambiar Tipo' classNameImportado='btnAceptar' />

    const [abrirListaTipos, setAbrirListaTipos] = useState(false);

    const [modoEdicion, setModoEdicion] = useState(false);
    const [classEdit, setClassEdit] = useState('btnEditar');
    const [classGuardar, setClassGuardar] = useState('btnGuardar clicOff');

    const ManejarEditar = () => {
        setModoEdicion(true);
        setClassEdit('btnEditar clicOff');
        setClassGuardar('btnGuardar');
    }

    const ManejarCancelar = () => {
        setModoEdicion(false);
        setClassEdit('btnEditar');
        setClassGuardar('btnGuardar clicOff');
        onClose();
    }

if (!isOpen) return null;

return (
    <div className='modalTransparencia'>
        <div className='modal' id='formEditItem'>
            <div className='uno'>
                {modoEdicion ? tipoItemBtn : tipoItemLabel}
                <input type='text' placeholder='Tipo de Item Aquí' disabled/>
            </div>
            <div className='dos'>
                <input type='text' placeholder='Nombre del Ítem' disabled={!modoEdicion} />
            </div>
            <div className='tres'>
                <label>Cantidad: </label>
                <input disabled={!modoEdicion} type='number'/>
            </div>
            <div className='cuatro'>
                <textarea placeholder='Aquí se visualiza la descripción...' disabled={!modoEdicion} ></textarea>
            </div>
            <div className='tresBotones cinco'>
                <BotonForm textoBoton='Editar'  classNameImportado={classEdit} disabledImportado={modoEdicion} onClickImportado={ManejarEditar} />
                <BotonForm textoBoton='Guardar'  classNameImportado={classGuardar} disabledImportado={!modoEdicion}/>
                <BotonForm textoBoton='Cancelar'  classNameImportado='btnCancelar' onClickImportado={ManejarCancelar} />
            </div>
        </div>
        <ModalListaTipoItem vieneDeContabilidad={true} agregandoItem={true} isOpen={abrirListaTipos} onClose={() => setAbrirListaTipos(false)} />
    </div>

);
}

export default ModalEditItem;