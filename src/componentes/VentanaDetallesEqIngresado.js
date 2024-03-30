import './css/ventanaDetallesEqIngresado.css';
import BotonForm from './BotonForm';
import ModalEstablecerGarantia from './ModalEstablecerGarantia';
import { useState } from 'react';

function VentanaDetallesEqIngresado({ isOpen, onClose }) {

    //Editar desactivado
    const etIngresoPor = <label>Ingreso por: xxxxxxxxx</label>;
    const etRefMarca = <label>Referencia o marca de equipo</label>;
    const etEstado = <label>Estado: Recibido</label>;
    const etSaldo = <label className='saldoPendiente'>Saldo Pendiente: $000.000</label>;

    //Editar Activado
    const etIngresoPorEdicion = <label>Ingreso por: </label>;
    const selectIngresoPor = <select name='opcionesIngresoPorEdicion'>
        <option value='servicioNormal'>Servicio Normal</option>
        <option value='garantia'>Garantía</option>
    </select>
    const inputModelo = <input id='inputModeloEdicionEqIngresado' placeholder='Marca o Referencia de Equipo'/>
    const etEstadoEdicion = <label>Estado: </label>;
    const selectEstado = <select name='opcionesEstadoEdicion'>
        <option value='recibido'>Recibido</option>
        <option value='enReparacion'>En Reparación</option>
        <option value='reparado'>Reparado</option>
    </select>
    const etAbono = <label>Abono Realizado: </label>
    const inputAbonoRealizado = <input id='inputAbonoRealizadoEdicionEqIngresado' type='number' />
    const thTablaEditar = <th id='thAgregarCamposTabla'>+</th>;
    const tdTablaEditar = <td className='tdEliminarCamposTabla'>-</td>;



    const [modoEditar, setModoEditar] = useState(false);
    const [textoBtnEditar, setTExtoBtnEditar] = useState('Editar');
    const [classBotones, setClassBotones] = useState('btnEditar');
    const [classBtnMarcarEntregado, setClassBtnMarcarEntregado] = useState('btnMarcarEntregado');
    const [abrirEstablecerGarantia, setAbrirEstablecerGarantia] = useState(false);


    const ActivarEdicion = () => {

        setModoEditar(true);
        setTExtoBtnEditar('Registrar');
        setClassBotones('btnEditar clicOff');
        setClassBtnMarcarEntregado('btnMarcarEntregado clicOff');
    }

    const ManejarAtras = () => {
        setModoEditar(false);
        setTExtoBtnEditar('Editar');
        setClassBotones('btnEditar');
        setClassBtnMarcarEntregado('btnMarcarEntregado');
        onClose();
    }

    if (!isOpen) return null;
    return (
        <div id="formDetallesEqIngresado">

            <div id='tituloDetallesEqIngresado'>
                <label>Nombre del Cliente</label>
                <label>Fecha: dd/mm/aaaa</label>
            </div>

            {modoEditar ?

                <div className='filaDosDetallesEqIngresado'>
                    <div>
                        {etIngresoPorEdicion}
                        {selectIngresoPor}
                    </div>
                    <div>
                        {inputModelo}
                    </div>
                </div>
                :
                <div className='filaDosDetallesEqIngresado'>
                    {etIngresoPor}
                    {etRefMarca}
                </div>
            }

            {modoEditar ?

                <div className='filaDosDetallesEqIngresado'>
                    <div >
                        {etEstadoEdicion}
                        {selectEstado}
                    </div>
                    <div className='editEqIngresado'>
                        {etAbono}
                        {inputAbonoRealizado}
                    </div>

                </div>
                :
                <div className='filaDosDetallesEqIngresado'>
                    {etEstado}
                    {etSaldo}
                </div>
            }

            <div id='filaTresDetallesEqIngresado'>
                <label className='etDetalles'>Condiciones de Equipo Recibido:</label>
                <textarea id='condEqRecibidoEqIngresado' disabled={!modoEditar}></textarea>
                <label className='etDetalles'>Partes Internas del Equipo:</label>
                <textarea id='partesEqRecibidoEqIngresado' disabled={!modoEditar}></textarea>
                <table>
                    <tr>
                        {modoEditar ? thTablaEditar : null}
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                    <tr>
                        {modoEditar ? tdTablaEditar : null}
                        <td>Descripción Uno</td>
                        <td>$ 000.000</td>
                    </tr>
                    <tr>
                        {modoEditar ? tdTablaEditar : null}
                        <td>Total</td>
                        <td>$ 000.000</td>
                    </tr>
                </table>
            </div>
            <div id='auxContBotonesDetallesEqIngresado'>
                <div id='contBotonesDetallesEqIngresado' className='dosBotones'>
                    <BotonForm textoBoton="Imprimir" classNameImportado={classBotones} disabledImportado={modoEditar} />
                    <BotonForm textoBoton={textoBtnEditar} classNameImportado='btnRegistrar' onClickImportado={ActivarEdicion} />
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar" onClickImportado={ManejarAtras} />
                </div>
            </div>
            <BotonForm disabledImportado={modoEditar} idImportado='btnImportadoMarcarEntregado' textoBoton='Marcar Como Entregado' classNameImportado={classBtnMarcarEntregado} onClickImportado={() => setAbrirEstablecerGarantia(true)}/>
            <ModalEstablecerGarantia isOpen={abrirEstablecerGarantia} onClose={() => setAbrirEstablecerGarantia(false)} />
        </div>
    );
}
export default VentanaDetallesEqIngresado;