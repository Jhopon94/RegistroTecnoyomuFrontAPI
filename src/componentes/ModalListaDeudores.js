import './css/modalListaDeudores.css';
import BotonForm from './BotonForm';
import VentanaDetalleDeudor from './VentanaDetallesDeudor';
import { useState } from 'react';

function ModalListaDeudores({isOpen, onClose}){

    const [abrirDetallesDeudor, setAbrirDetallesDeudor] = useState(false);

    if(!isOpen) return null;
    return(
        <div className='modalTransparencia'>
            <div className='modal' id='formListaDeudores'>
                <table>
                    <tr>
                        <th>Cédula</th>
                        <th>Nombre</th>
                        <th>Deuda</th>
                    </tr>
                    <tr onClick={() => setAbrirDetallesDeudor(true)}>
                        <td>1113671492</td>
                        <td>John Hader Medina</td>
                        <td>140.000</td>
                    </tr>
                </table>
                <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose}></BotonForm>
            </div>
            <VentanaDetalleDeudor isOpen={abrirDetallesDeudor} onClose={() => setAbrirDetallesDeudor(false)} />
        </div>
    );
}
export default ModalListaDeudores;