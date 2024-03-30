import './css/modalRangoFecha.css';
import BotonForm from './BotonForm';

function ModalRangoFecha({isOpen, onClose}){
    if(!isOpen) return null;
    return(
        <div className='modalTransparencia'>
            <div className='modal' id='formRangoFecha'>
                <label className='titulo'>Elegir Rango de Fecha</label>
                <div className='desde'>
                    <label>Desde: </label><input placeholder='dd/mm/aaaa' />
                </div>
                <div className='hasta'>
                    <label>Hasta: </label><input placeholder='dd/mm/aaaa' />
                </div>
                <div className='dosBotones'>
                    <BotonForm textoBoton='PDF' classNameImportado='btnAceptar' />
                    <BotonForm  textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </div>
            </div>
        </div>
    );
}
export default ModalRangoFecha;