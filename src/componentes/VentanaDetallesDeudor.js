import './css/ventanaDetalleDeudor.css';
import BotonForm from './BotonForm';
import { useState } from 'react';



function VentanaDetalleDeudor({ isOpen, onClose }) {

    const [isChecked, setIsChecked] = useState(false);
    const [classBtnChulo, setClassBtnChulo] = useState('clicOff');

    const VerificarCheck = (event) => {
        setIsChecked(!isChecked);
        if (isChecked) setClassBtnChulo('clicOff');
        else setClassBtnChulo('');
    }

    if (!isOpen) return null;

    return (
        <div className='modalTransparencia modalTransOff variosDetallesDeudores'>
            <div className='contModales'>
                <div className='modal formVentanaDetalleDeudor' id='formVentanaDetalleDeudorUno'>
                    <label className='referencia'>Marca o Referencia de Equipo</label>
                    <div className='contTabla'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                                <tr>
                                    <td>Descripción Uno</td>
                                    <td>Precio Uno</td>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td>Total</td>
                                <td>$ 000.000</td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>

                    <label className='etSaldoPendiente'>Saldo Pendiente: $ 000.000</label>
                    <div className='ultimaFila'>
                        <div className='aux Uno'>
                            <input type='checkbox' className='checkBox' onChange={VerificarCheck} /><label>Abona: </label>
                        </div>
                        <div className='aux Dos'>
                            <input type='number' disabled={!isChecked} /><button disabled={!isChecked} className={classBtnChulo}> ✓ </button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='contBtn'>
                <BotonForm textoBoton='Atrás' classNameImportado='btnCancelar' onClickImportado={onClose} />
            </div>
        </div>
    );
}
export default VentanaDetalleDeudor;