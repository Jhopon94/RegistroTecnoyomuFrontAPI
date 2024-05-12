import './css/partesEquipoIngreso.css';
import BotonForm from './BotonForm';
import ServiciosPorTomar from './ServiciosPorTomar';
import { useEffect, useState } from 'react';

function PartesEquipoIngreso({ isOpen, onClose, objetoEquipo, nombreCiente }) {

    const [abrirServPorTomar, setAbrirServPorTomar] = useState(false);
    useEffect(() => {
    }, [isOpen]);

    const [modelo, setModelo] = useState("");
    const [partes, setPartes] = useState({
        "memoriaRam": '',
        "procesador": '',
        "tarjetaMadre": '',
        "fuente": ''
    });

    const PartesToString = () => {
        let todasLlenas = true;
        for (let llave in partes) {
            if (partes[llave] === '') {
                todasLlenas = false;
            }
        }
        if (todasLlenas) {
            objetoEquipo.partesInternasRecibido = JSON.stringify(partes, null, 2).toString();
            return true;
        } else {
            alert("Llena todos los campos!");
            return false;
        }
    }

    const ManejarSubmit = (e) => {
        e.preventDefault();
        if(PartesToString()){
            if(modelo !== ''){
                objetoEquipo.modelo = modelo;
                console.log("El siguiente equipo le pertenece a " + nombreCiente);
                console.log(objetoEquipo);
                setAbrirServPorTomar(true);
            }else{
                alert("Debes escribir un modelo de equipo!");
            }
        }
    }

    if (!isOpen) return null;
    return (
        <div className='modalTransparencia modalTransOff'>
            <form id='formPartesEqIng' onSubmit={e => ManejarSubmit(e)}>
                <label id='etNombreCliIngEq' className='tituloNombreModales'>{nombreCiente}</label>
                <section className="contInputAzulito">
                    <input className="cajitaModeloEq" placeholder='Modelo o Referencia del Equipo'
                        onChange={e => setModelo(e.target.value)} required />
                </section>
                <section className='contEtCompPartes'>
                    <label className='etCompPartes'>Componentes y Partes:</label>
                </section>
                <section id='contPartesIngEq' className='modal'>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Memoria RAM: </label>
                        <input type='number' required
                            onChange={e => setPartes(partes => ({
                                ...partes,
                                memoriaRam: e.target.value
                            }))} />
                        <label>GB</label>
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Procesador: </label>
                        <input required
                            onChange={e => setPartes(partes => ({
                                ...partes,
                                procesador: e.target.value
                            }))} />
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Tarjeta Madre: </label>
                        <input required
                            onChange={e => setPartes(partes => ({
                                ...partes,
                                tarjetaMadre: e.target.value
                            }))} />
                    </article>
                    <article className='parteIngEq'>
                        <label className='etPartesIngEq'>Fuente: </label>
                        <input required
                            onChange={e => setPartes(partes => ({
                                ...partes,
                                fuente: e.target.value
                            }))} />
                    </article>
                </section>
                <section id='contBotonesPartesIngEq'>
                    {/*<BotonForm textoBoton='+ Agregar' classNameImportado='btnAgregar' />*/}
                    <BotonForm textoBoton='Continuar' classNameImportado='btnContinuar'
                        typeImportado='submit' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar'
                        onClickImportado={onClose} typeImportado='button' />
                </section>
            </form>
            <ServiciosPorTomar isOpen={abrirServPorTomar} onClose={() => setAbrirServPorTomar(false)} 
            objetoEquipo={objetoEquipo} nombreCliente={nombreCiente}/>
        </div>
    );
}
export default PartesEquipoIngreso;