import './css/ventanaDetallesEqIngresado.css';
import BotonForm from './BotonForm';
import ModalEstablecerGarantia from './ModalEstablecerGarantia';
import { useEffect, useState } from 'react';
import FormatearNumero from './CurrencyFormat';
import { BuscarDetalles } from '../apis/detallesApi';
import { EditarEquipoIngresado } from '../apis/equipoApi';

function VentanaDetallesEqIngresado({ isOpen, onClose, equipo, cliente }) {

    const [modoEditar, setModoEditar] = useState(false);
    const [textoBtnEditar, setTExtoBtnEditar] = useState('Editar');
    const [classBotones, setClassBotones] = useState('btnEditar');
    const [classBtnMarcarEntregado, setClassBtnMarcarEntregado] = useState('btnMarcarEntregado');
    const [abrirEstablecerGarantia, setAbrirEstablecerGarantia] = useState(false);
    const [tipoBtnRegistrar, setTipoBtnRegistrar] = useState('button');
    //Hook solo para fecha
    const [fechaEquipo, setFechaEquipo] = useState("");
    //Hook para ingreso por
    const [tipoIngreso, setTipoIngreso] = useState("");
    //hook para numero formatedo
    const [saldoPend, setSaldoPend] = useState("");
    //lista de detalles
    const [listaDetalles, setListaDetalles] = useState([]);
    // 3 variables para editar en el equipo
    const [ingresoPor, setIngresoPor] = useState("");
    const [estadoEquipo, setEstadoEquipo] = useState("");
    const [modelo, setModelo] = useState("");
    const [objMarcarEntregado, setObjMarcarEntregado] = useState(null);


    //Apenas se abre
    useEffect(() => {
        if (isOpen) {
            //Acomodar fecha
            setFechaEquipo(equipo.fechaIngreso.toString().substring(0, 10));
            //AcomodarFecha();
            //Acomodar tipo de ingreso
            if (equipo.tipoIngreso === 'servicioNormal') {
                setTipoIngreso("Servicio Normal");
            }
            if (equipo.tipoIngreso === 'garantia') {
                setTipoIngreso("Garantía");
            }
            //Acomodar saldoPendiente
            setSaldoPend(FormatearNumero(equipo.saldoPendiente));
            //Obtener lista de detalles
            ListarDetalles();
        }
    }, [isOpen]);

    //Se activa modo editar
    useEffect(() => {
        if (modoEditar && isOpen) {
            //Se pone el boton registrar en submit
            setTipoBtnRegistrar('submit');
            /*setIngresoPor(equipo.tipoIngreso);
            setEstadoEquipo(equipo.estadoEquipo);
            setModelo(equipo.modelo);*/
        }
    }, [modoEditar]);

    async function ListarDetalles() {
        let listaAux = await BuscarDetalles(equipo.id);
        setListaDetalles(listaAux);
    }

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
        setTipoBtnRegistrar('button');
        onClose();
    }

    //Editar desactivado
    const etIngresoPor = <label>Ingreso por: <u>{tipoIngreso}</u></label>;
    const etRefMarca = <label>
        {equipo.modelo === null || equipo.modelo === undefined ? 'Modelo Indefinido' : equipo.modelo}
    </label>;
    const etEstado = <label>
        Estado: <u>{equipo.estadoEquipo === null || equipo.estadoEquipo === undefined ? 'Estado Indefinido' : equipo.estadoEquipo}</u>
    </label>;
    const etSaldo = <label className='saldoPendiente'>Saldo Pendiente: $ {saldoPend}</label>;

    //Editar Activado
    const etIngresoPorEdicion = <label>Ingreso por: </label>;
    const selectIngresoPor = <select name='opcionesIngresoPorEdicion' required
        onChange={e => setIngresoPor(e.target.value)}>
        <option value=''>Selecciona uno</option>
        <option value='servicioNormal'>Servicio Normal</option>
        <option value='garantia'>Garantía</option>
    </select>
    const inputModelo = <input id='inputModeloEdicionEqIngresado' placeholder='Modelo o Referencia de Equipo'
        required onChange={e => setModelo(e.target.value)} />
    const etEstadoEdicion = <label>Estado: </label>;
    const selectEstado = <select name='opcionesEstadoEdicion' required
        onChange={e => setEstadoEquipo(e.target.value)}>
        <option value=''>Selecciona uno</option>
        <option value='recibido'>Recibido</option>
        <option value='enReparacion'>En Reparación</option>
        <option value='reparado'>Reparado</option>
    </select>

    const ManejarSubmit = async (e) => {
        e.preventDefault();
        if (modelo === '' || estadoEquipo === '' || ingresoPor === '') {
            alert("Sin campos vacíos por favor");
        } else {
            //acomodar estos datos en el equipo
            equipo.tipoIngreso = ingresoPor;
            equipo.modelo = modelo;
            equipo.estadoEquipo = estadoEquipo;
            //Armar el objeto
            let objAux = {
                "actualizar": {},
                "contenedor": {
                    "equipo": equipo
                },
                "listasDetalles": {
                    "eliminados": [],
                    "nuevos": [],
                    "editados": []
                }
            }
            //Mandar a editar
            let respuesta = await EditarEquipoIngresado(objAux);
            alert(respuesta);
            window.location.reload();
        }
    }

    //Al amrcar como entregado
    const MarcarEntregado = () => {
        if (equipo !== null || equipo !== undefined) {
            //Formar objeto
            let obAux = {
                "marcarEntregado": {
                    "diasGarantia": 0,
                    "id": equipo.id
                }
            }
            setObjMarcarEntregado(obAux);
        } else {
            alert('Equipo no válido.');
        }
    }
    //...Y cuando acabe de setearse el objeto
    useEffect(() => {
        if(isOpen) setAbrirEstablecerGarantia(true);
    }, [objMarcarEntregado]);


    if (!isOpen) return null;
    return (
        <div><form id="formDetallesEqIngresado" onSubmit={e => ManejarSubmit(e)}>

            <div id='tituloDetallesEqIngresado'>
                <label>
                    {cliente.nombre === null || cliente.nombre === undefined ? 'Nombre Indefinido' : cliente.nombre}
                </label>
                <label>Fecha: {fechaEquipo}</label>
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
                    <div className='editEqIngresado '>
                        {etSaldo}
                    </div>

                </div>
                :
                <div className='filaDosDetallesEqIngresado'>
                    {etEstado}
                    {etSaldo}
                </div>
            }

            {modoEditar ? null :
                <div id='filaTresDetallesEqIngresado'>
                    <label className='etDetalles'>Condiciones de Equipo Recibido:</label>
                    <textarea id='condEqRecibidoEqIngresado' disabled={true}
                        value={equipo.condicionesFisicasRecibidas} >
                    </textarea>
                    <label className='etDetalles'>Partes Internas del Equipo:</label>
                    <textarea id='partesEqRecibidoEqIngresado' disabled={true}
                        value={equipo.partesInternasRecibido} >

                    </textarea>
                    <table>
                        <tbody>
                            <tr>
                                <th>Descripción</th>
                                <th>Precio</th>
                            </tr>
                            {
                                listaDetalles === null ? <tr></tr> :
                                    listaDetalles.map((detalle, index) => (
                                        <tr key={index}>
                                            <td className='columnaDetalles'>{detalle.descripcion}</td>
                                            <td className='columnaPrecio'>$ {FormatearNumero(detalle.precio)}</td>
                                        </tr>
                                    ))
                            }
                            {
                                listaDetalles === null ? <tfoot></tfoot> :
                                    <tr>
                                        <td className='precioTotal'><b>Total: </b></td>
                                        <td ><b>$ {FormatearNumero(equipo.precioTotal)}</b></td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                </div>
            }

            <div id='auxContBotonesDetallesEqIngresado'>
                <div id='contBotonesDetallesEqIngresado' className='dosBotones'>
                    <BotonForm textoBoton="Imprimir" classNameImportado={classBotones}
                        disabledImportado={modoEditar} typeImportado='button' />
                    <BotonForm textoBoton={textoBtnEditar} classNameImportado='btnRegistrar'
                        onClickImportado={ActivarEdicion} typeImportado={tipoBtnRegistrar} />
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar"
                        onClickImportado={ManejarAtras} typeImportado='button' />
                </div>
            </div>
            <BotonForm disabledImportado={modoEditar} idImportado='btnImportadoMarcarEntregado'
                textoBoton='Marcar Como Entregado' classNameImportado={classBtnMarcarEntregado}
                onClickImportado={() => MarcarEntregado()} typeImportado='button' />
        </form>
            <ModalEstablecerGarantia isOpen={abrirEstablecerGarantia}
                onClose={() => setAbrirEstablecerGarantia(false)} objeto={objMarcarEntregado} />
        </div>

    );
}
export default VentanaDetallesEqIngresado;