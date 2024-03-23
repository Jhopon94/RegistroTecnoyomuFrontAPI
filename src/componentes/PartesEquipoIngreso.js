import './css/partesEquipoIngreso.css';
import BotonForm from './BotonForm';
import ServiciosPorTomar from './ServiciosPorTomar';
import { useState } from 'react';

function PartesEquipoIngreso({ isOpen, onClose }) {

    const [abrirServPorTomar, setAbrirServPorTomar] = useState(false);

    if (!isOpen) return null;
    return (
        <div  className='modalTransparencia modalTransOff'>
            <div id='formPartesEqIng'>
            <label id='etNombreCliIngEq' className='tituloNombreModales'>Nombre del Cliente</label>
                <section className="contInputAzulito">
                    <input className="cajitaModeloEq" placeholder='Modelo o Referencia del Equipo' />
                </section>
                <section className='contEtCompPartes'>
                    <label className='etCompPartes'>Componentes y Partes:</label>
                </section>
                <section id='contPartesIngEq' className='modal'>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Memoria RAM: </label>
                        <input type='number' />
                        <label>GB</label>
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Procesador: </label>
                        <input  />
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Tarjeta Madre: </label>
                        <input  />
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Fuente: </label>
                        <input  />
                    </article>
                </section>
                <section id='contBotonesPartesIngEq'>
                    <BotonForm textoBoton='+ Agregar' classNameImportado='btnAgregar'/>
                    <BotonForm textoBoton='Continuar' classNameImportado='btnContinuar' onClickImportado={() => setAbrirServPorTomar(true)}/>
                    <BotonForm textoBoton='Cancelar'classNameImportado='btnCancelar' onClickImportado={onClose}/>
                </section>
            </div>
            <ServiciosPorTomar isOpen={abrirServPorTomar} onClose={() => setAbrirServPorTomar(false)} />
        </div>
    );
}
export default PartesEquipoIngreso;