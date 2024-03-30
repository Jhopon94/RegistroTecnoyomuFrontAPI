import './css/ventanaDetallesReparacion.css';
import BotonForm from './BotonForm';
import ModalCambiarEstadoRep from './ModalCambiarEstadoRep';
import ModalListaTipoItem from './ModalListaTipoItem';
import { useState } from 'react';

function VentanaDetallesReparacion({ isOpen, onClose }) {

    const etIngresoPor = <label>Ingreso por: xxxxxxxxx</label>;
    const etRefMarca = <label>Referencia o marca de equipo</label>;
    const etEstado = <label>Estado: Recibido</label>;

    const [abrirCambiarEstado, setAbrirCambiarEstado] = useState(false);
    const [abrirTiposItem, setAbrirTiposItem] = useState(false);

    const ManejarAtras = () => {
        onClose();
    }

    if (!isOpen) return null;
    return (
        <div id="formDetallesReparacion">

            <div id='tituloDetallesReparacion'>
                <label>Nombre del Cliente</label>
                <label>Fecha: dd/mm/aaaa</label>
            </div>
            <div className='filaDosDetallesEqIngresado'>
                {etIngresoPor}
                {etRefMarca}
            </div>
            <div className='filaDosDetallesEqIngresado'>
                {etEstado}
            </div>

            <div id='filaTresDetallesReparacion'>
                <label className='etDetalles'>Condiciones de Equipo Recibido:</label>
                <textarea id='condEqRecibidoReparacion' disabled></textarea>
                <label className='etDetalles'>Partes Internas del Equipo:</label>
                <textarea id='partesEqRecibidoReparacion' disabled></textarea>
                <table>
                    <tr>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                    <tr>
                        <td>Descripción Uno</td>
                        <td>$ 000.000</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$ 000.000</td>
                    </tr>
                </table>
            </div>
            <div id='auxContBotonesDetallesReparacion'>
                <div id='contBotonesDetallesReparacion' className='dosBotones'>
                    <BotonForm textoBoton="Cambiar Estado" classNameImportado='btnAceptar btnMarcarEntregado' onClickImportado={() => setAbrirCambiarEstado(true)}/>
                    <BotonForm textoBoton="Usar Ítem" classNameImportado='btnRegistrar' onClickImportado={() => setAbrirTiposItem(true)}/>
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar" onClickImportado={ManejarAtras} />
                </div>
            </div>
            <ModalCambiarEstadoRep isOpen={abrirCambiarEstado} onClose={() => setAbrirCambiarEstado(false)} />
            <ModalListaTipoItem isOpen={abrirTiposItem} onClose={() => setAbrirTiposItem(false)} vieneDeContabilidad={false} agregandoItem={false}/>
        </div>
    );
}
export default VentanaDetallesReparacion;