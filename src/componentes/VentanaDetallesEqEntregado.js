import './css/ventanaDetallesEqEntregado.css';
import BotonForm from './BotonForm';
import { useEffect, useState } from 'react';
import { BuscarClientes } from '../apis/clienteApi';
import { BuscarDetalles } from '../apis/detallesApi';
import FormatearNumero from './CurrencyFormat';

function VentanaDetallesEqEntregado({ isOpen, onClose, equipo }) {

    const [equipoRecibido, setEquipoRecibido] = useState({});
    const [listaClientes, setListaClientes] = useState([]);
    const [cliente, setCliente] = useState({});
    const [listaDetalles, setListaDetalles] = useState([]);

    useEffect(() => {
        if(isOpen){
            setEquipoRecibido(equipo);
            ListarClientes();
            ListarDetalles();
        }
    }, [isOpen]);

    const ListarClientes = async() => {
        let listaAux = await BuscarClientes();
        if(listaAux)setListaClientes(listaAux);
        else console.log('Lista de clientes no encontrada');
    }

    async function ListarDetalles(){
        let listaAux = await BuscarDetalles(equipoRecibido.id);
        if(listaAux) setListaDetalles(listaAux);
    }

    //... lista Clientes set
    useEffect(() => {
        if(isOpen) EncontrarCliente();
    }, [listaClientes]);

    function EncontrarCliente(){
        if(equipoRecibido && listaClientes){
            let clienteAux = listaClientes.find(cliente => cliente['id'] === equipoRecibido.idCliente);
            setCliente(clienteAux);
        }else{
            console.log('No se pudo encontrar el cleinte por equipo recibido null');
        }
    }

    function Imprimir(){
        alert('Le debo la impresión profe!');
    }

    if (!isOpen) return null;
    return (
        <div id="formDetallesEqEntregado">
            <div id='tituloDetallesEqEntregado'>
                <label>{ cliente ? cliente.nombre : ''}</label>
                <label>Fecha: {equipo ? equipo.fechaIngreso.toString().substring(0, 10): ''}</label>
            </div>
            <div id='filaDosDetallesEqEntregado'>
                <label>Ingreso por: <u>{equipo ? equipo.tipoIngreso : ''}</u></label>
                <label>{equipo ? equipo.modelo : 'Modelo'}</label>
            </div>
            <div id='filaTresDetallesEqEntregado'>
                <label className='etDetalles'>Condiciones de Equipo Recibido:</label>
                <textarea id='condEqRecibidoEqEntregado' disabled
                    value={equipo? equipo.condicionesFisicasRecibidas:'Error'}></textarea>
                <label className='etDetalles'>Partes Internas del Equipo:</label>
                <textarea id='partesEqRecibidoEqEntregado' disabled
                    value={equipo? equipo.partesInternasRecibido:'Error'}></textarea>
                <table>
                    <tbody>
                    <tr>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                    {
                        !listaDetalles ? <tr></tr> : 
                        listaDetalles.map((detalle, index) => (
                            <tr key={index}>
                                <td className='columDetalles'>{detalle.descripcion}</td>
                                <td> $ {FormatearNumero(detalle.precio.toString())}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td className='celdaTotalTexto'><b>Total</b></td>
                        <td><b>$ {FormatearNumero(equipo.precioTotal.toString())}</b></td>
                    </tr>
                    </tbody>
                </table>
                <label className='etDetalles'>
                    Días de Garantía Otorgados: <u>{equipo ? equipo.diasGarantia : ''}</u></label>
            </div>
            <div id='auxContBotonesDetallesEqEntregado'>
                <div id='contBotonesDetallesEqEntregado' className='dosBotones'>
                    <BotonForm textoBoton="Imprimir" classNameImportado="btnAceptar" onClickImportado={Imprimir}/>
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar" onClickImportado={onClose} />
                </div>
            </div>
        </div>
    );
}
export default VentanaDetallesEqEntregado;