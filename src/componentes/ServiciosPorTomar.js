import './css/serviciosPorTomar.css';
import BotonForm from './BotonForm';
import ModalTotalServicio from './ModalTotalServicio';
import { useEffect, useState } from 'react';
import ClaseDetalles from '../clases/detalles';

function ServiciosPorTomar({ isOpen, onClose, objetoEquipo, nombreCliente }) {

    const [abrirModalTotalServ, setAbrirModalTotalServ] = useState(false);
    const [pilaDetalles, setPilaDetalles] = useState([new ClaseDetalles()]);

    function ManejarCambios(index, campo, valor){
        const nuevaPilaDetalles = [...pilaDetalles];
        nuevaPilaDetalles[index][campo] = valor;
        setPilaDetalles(nuevaPilaDetalles);
    }

    function AgregarDetalle() {
        setPilaDetalles([...pilaDetalles, new ClaseDetalles()]);
    }

    function EliminarDetalle() {
        if(pilaDetalles.length > 1){
            //Nueva lista sin el ultimo elemento
            let arrayAux = pilaDetalles.slice(0, -1);
            setPilaDetalles(arrayAux);
        }else{
            alert("Al menos 1 detalle");
        }
    }

    function CalcularTotal(){
        let auxTotal = 0;
        pilaDetalles.forEach(detalle => {
            auxTotal = auxTotal + parseInt(detalle.precio);
        });
        return auxTotal;
    }

    //////////// onSubmit ///////////////
    const ManejarSubmit = (e) => {
        e.preventDefault();
        objetoEquipo.precioTotal = CalcularTotal();
        setAbrirModalTotalServ(true);
    }
    /////////////////////////////////////

    if (!isOpen) return null;
    return (
        <div className='modalTransparencia modalTransOff'>
            <form id='formServEqIng' onSubmit={e => ManejarSubmit(e)}>
                <section className='contEtCompPartes'>
                    <label className='etServTomarIngEq'><h2>{nombreCliente}</h2></label>
                    <label className='etServTomarIngEq'>Servicios Por Tomar:</label>
                </section>
                <section id='contPartesIngEq' className={'modal contServIngEq tituloDetallesIngEq'}>
                    <article className={'parteIngEq'}>
                        <input className='detalleSevIngEq' disabled value='Servicio o Artículo' />
                        <input className='precioServIngEq' disabled value='Precio' />
                    </article>
                </section>
                <section id='contPartesIngEq' className={'modal contServIngEq contenedorDetalles'}>
                    {
                        pilaDetalles.map((detalle, index) => (
                            <article className='parteIngEq' key={index}>
                                <input className='detalleSevIngEq' required
                                    value={detalle.descripcion} 
                                    onChange={e => ManejarCambios(index, 'descripcion', e.target.value)}/>
                                <input type='number' className='precioServIngEq precio' required
                                    value={detalle.precio} 
                                    onChange={e => ManejarCambios(index, 'precio', e.target.value)}/>
                            </article>
                        ))
                    }
                </section>
                <section id='contBotonesPartesIngEq'>
                    <div className='dosBotones'>
                        <BotonForm textoBoton='+ Agregar' classNameImportado='btnAgregar' 
                            onClickImportado={AgregarDetalle} typeImportado='button'/>
                        <BotonForm textoBoton='Continuar' classNameImportado='btnContinuar' 
                            typeImportado='submit'/>
                    </div>
                    <div className='dosBotones'>
                        <BotonForm textoBoton='- Eliminar' classNameImportado='btnCancelar' 
                            onClickImportado={EliminarDetalle} typeImportado='button'/>
                        <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar' 
                        onClickImportado={onClose} typeImportado='button'/>
                    </div>
                </section>
            </form>
            <ModalTotalServicio isOpen={abrirModalTotalServ} onClose={() => setAbrirModalTotalServ(false)} 
                equipo={objetoEquipo} listaDetalles={pilaDetalles}/>
        </div>
    );
}
export default ServiciosPorTomar;