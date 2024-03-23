import './css/serviciosPorTomar.css';
import BotonForm from './BotonForm';
import ModalTotalServicio from './ModalTotalServicio';
import { useState } from 'react';

function ServiciosPorTomar({ isOpen, onClose }) {

    const [abrirModalTotalServ, setAbrirModalTotalServ] = useState(false);

    if (!isOpen) return null;
    return (
        <div className='modalTransparencia modalTransOff'>
            <div id='formServEqIng'>
                <section className='contEtCompPartes'>
                    <label className='etServTomarIngEq'>Servicios Por Tomar:</label>
                </section>
                <section id='contPartesIngEq' className={'modal contServIngEq tituloDetallesIngEq'}>
                    <article className={'parteIngEq'}>
                        <input className='detalleSevIngEq' disabled='true' value='Servicio o Artículo'/>
                        <input className='precioServIngEq' disabled='true' value='Precio'/>
                    </article>
                </section>
                <section id='contPartesIngEq' className={'modal contServIngEq'}>
                    <article className='parteIngEq'>
                        <input className='detalleSevIngEq' />
                        <input type='number' className='precioServIngEq'/>
                    </article>
                </section>
                <section id='contBotonesPartesIngEq'>
                    <BotonForm textoBoton='+ Agregar' classNameImportado='btnAgregar' />
                    <BotonForm textoBoton='Continuar' classNameImportado='btnContinuar' onClickImportado={() => setAbrirModalTotalServ(true)}/>
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' onClickImportado={onClose} />
                </section>
            </div>
            <ModalTotalServicio isOpen={abrirModalTotalServ} onClose={() => setAbrirModalTotalServ(false)} />
        </div>
    );
}
export default ServiciosPorTomar;