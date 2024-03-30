import './css/modalRegistroItem.css';
import BotonForm from './BotonForm';
import ModalListaTipoItem from './ModalListaTipoItem';
import { useState } from 'react';

function ModalRegistroItem({ isOpen, onClose }) {

    const [abrirListaTipoItem, setAbrirListaTipoItem] = useState(false);

    if (!isOpen) return null;

    return (
        <div className='modalTransparencia'>
            <div className='modal' id='formRegItem'>
                <div className='fila uno'>
                    <BotonForm textoBoton='Elegir Tipo' classNameImportado='btnAceptar' onClickImportado={() => setAbrirListaTipoItem(true)} />
                    <input type='text' disabled placeholder='Elige un Tipo ...'/>
                </div>
                <div className='fila dos'>
                    <input type='text' placeholder='Insertar Nombre de Ítem'/>
                </div>
                <div className='fila tres'>
                    <div>
                        <label>Cantidad: </label><input type='number' />
                    </div>
                    <div>
                        <label>Costo Unitario: </label><input type='number' />
                    </div>
                </div>
                <div className='fila cuatro'>
                    <textarea placeholder='Inserta una descripción del producto...' />
                </div>
                <div className='fila contBotones'>
                    <BotonForm textoBoton='Registrar' classNameImportado='btnRegistrar'/>
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
            <ModalListaTipoItem isOpen={abrirListaTipoItem} onClose={() => setAbrirListaTipoItem(false)} vieneDeContabilidad={true} agregandoItem={true}/>
        </div>
    );
}

export default ModalRegistroItem;