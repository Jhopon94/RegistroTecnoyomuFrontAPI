import './css/ventanaDetallesReparacion.css';
import BotonForm from './BotonForm';
import ModalCambiarEstadoRep from './ModalCambiarEstadoRep';
import ModalListaTipoItem from './ModalListaTipoItem';
import { useEffect, useState } from 'react';
import { BuscarDetalles } from '../apis/detallesApi';
import FormatearNumero from './CurrencyFormat';

function VentanaDetallesReparacion({ isOpen, onClose, equipo, cliente }) {

    const [abrirCambiarEstado, setAbrirCambiarEstado] = useState(false);
    const [abrirTiposItem, setAbrirTiposItem] = useState(false);

    const [fechaBonita, setFechaBonita] = useState(null);
    const [tipoIngreso, setTipoIngreso] = useState(null);
    const [estadoEquipo, setEstadoEquipo] = useState(null);
    const [modelo, setModelo] = useState(null);
    const [listaDetalles, setListaDetalles] = useState(null);

    const etIngresoPor = <label>Ingreso por: <u>{tipoIngreso}</u></label>;
    const etRefMarca = <label>{modelo}</label>;
    const etEstado = <label>Estado: <u>{estadoEquipo}</u></label>;

    //Abrir primera vez
    useEffect(() => {
        if (isOpen) {
            //Acomodar fecha
            setFechaBonita(equipo.fechaIngreso.toString().substring(0, 10));
            //Acomodar tipo de ingreso
            setTipoIngreso(TipoIngreso(equipo.tipoIngreso));
            //Acomodar estado del equipo
            setEstadoEquipo(equipo.estadoEquipo);
            //Acomodar modelo
            setModelo(equipo.modelo);
            //Obtener lsita de detalles
            ListarDetalles();
        }
    }, [isOpen]);

    //Lista de detalles
    async function ListarDetalles() {
        setListaDetalles(await BuscarDetalles(equipo.id));
    }

    //Cuando se llena la lista de detalles
    useEffect(() => {
        if (listaDetalles !== null && listaDetalles !== undefined) {
            //console.log(listaDetalles);
        }
    }, [listaDetalles]);

    //Tipo de Ingreso
    function TipoIngreso(cadena) {
        switch (cadena) {
            case 'garantia':
                return 'Servicio Normal';
            case 'servicioNormal':
                return 'Servicio Normal';
            default:
                break;
        }
    }

    const ManejarAtras = () => {
        window.location.reload();
    }

    if (!isOpen) return null;
    return (
        <div id="formDetallesReparacion">

            <div id='tituloDetallesReparacion'>
                <label>{cliente.nombre}</label>
                <label>Fecha: {fechaBonita}</label>
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
                <textarea id='condEqRecibidoReparacion' disabled
                    value={equipo.condicionesFisicasRecibidas}></textarea>
                <label className='etDetalles'>Partes Internas del Equipo:</label>
                <textarea id='partesEqRecibidoReparacion' disabled
                    value={equipo.partesInternasRecibido}></textarea>
                <table>
                    <tbody>
                        <tr>
                            <th>Descripción</th>
                            <th>Precio</th>
                        </tr>
                        {
                            listaDetalles == null ? <tr></tr> :
                            listaDetalles.map(detalle => (
                                <tr>
                                    <td className='columDetalles'>{detalle.descripcion}</td>
                                    <td> $ {FormatearNumero( detalle.precio)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tr>
                        <td className='columTotal'><b>Total</b></td>
                        <td><b>$ {FormatearNumero(equipo.precioTotal)}</b></td>
                    </tr>
                </table>
            </div>
            <div id='auxContBotonesDetallesReparacion'>
                <div id='contBotonesDetallesReparacion' className='dosBotones'>
                    <BotonForm textoBoton="Cambiar Estado" classNameImportado='btnAceptar btnMarcarEntregado' onClickImportado={() => setAbrirCambiarEstado(true)} />
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar" onClickImportado={ManejarAtras} />
                </div>
            </div>
            <ModalCambiarEstadoRep isOpen={abrirCambiarEstado} 
            onClose={() => setAbrirCambiarEstado(false)} idEquipo={equipo.id}/>
            <ModalListaTipoItem isOpen={abrirTiposItem} onClose={() => setAbrirTiposItem(false)} vieneDeContabilidad={false} agregandoItem={false} />
        </div>
    );
}
export default VentanaDetallesReparacion;