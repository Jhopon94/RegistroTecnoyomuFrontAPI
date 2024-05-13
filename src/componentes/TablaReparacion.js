import './css/tablaReparacion.css';
import BotonForm from './BotonForm';
import VentanaDetallesReparacion from './VentanaDetallesReparacion';
import { useState, useEffect, Component } from 'react';
import { BuscarClientes } from '../apis/clienteApi';
import { BuscarEquiposEntregados, BuscarEquiposIngresados } from '../apis/equipoApi';
import ListaFiltrada from './FiltroBusqueda';

function TablaReparacion({ isOpen }) {

    const [listaCompletaEquipos, setListaCompletaEquipos] = useState([]);
    const [listaEquipos, setListaEquipos] = useState([]);
    const [listaClientes, setListaClientes] = useState([]);
    const [buscarPor, setBuscarPor] = useState("cedulaCliente");
    const [equipoSelecc, setEquipoSelecc] = useState(null);
    const [clienteSelecc, setClienteSelecc] = useState(null);

    useEffect(() => {
        ListarEquipos();
        ListarClientes();
    }, []);

    async function ListarClientes() {
        let auxLista = await BuscarClientes();
        setListaClientes(auxLista);
    }

    async function ListarEquipos() {
        let auxLista = await BuscarEquiposIngresados();
        setListaCompletaEquipos(auxLista);
    }

    //Acomodar la lita dinámica con los datos de la completa al principio
    useEffect(() => {
        setListaEquipos(listaCompletaEquipos);
    }, [listaCompletaEquipos]);


    const selecEstado = <select className='formListaCliChilds'
        onChange={e => FiltrarLista(e.target.value)}>
        <option value='ingresado'>Ingresado</option>
        <option value='enReparacion'>En Reparación</option>
        <option value='reparado'>Reparado</option>
    </select>;

    const inputFiltro = <input className='formListaCliChilds' id='inputFiltroEqIngresados'
        placeholder='Buscar...' onChange={e => FiltrarLista(e.target.value)} />;

    const [abrirDetallesReparacion, setAbrirDetallesReparacion] = useState(false);
    const [mostrarSelect, setMostrarSelect] = useState(false);

    const VerificarFiltroPorEstado = (valor) => {
        console.log(valor);
        if (valor == 'estadoEquipo') setMostrarSelect(true);
        else setMostrarSelect(false);
    }

    const ManejarSelectFiltro = (e) => {
        let valor = e.target.value;
        setBuscarPor(valor);
        VerificarFiltroPorEstado(valor);
    }

    /////////////////////////////////////////////////////////
    //////////////////// Filtro Búsqueda ////////////////////
    const FiltrarLista = (criterio) => {
        setListaEquipos(ListaFiltrada(buscarPor, listaCompletaEquipos, criterio));
    }
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

    //Clic en el equipo deseado
    const AbrirVentanaEdicion = (equipo) => {
        setEquipoSelecc(equipo);
    }

    //Cuando el equipo hace set
    useEffect(() => {
        if (equipoSelecc !== null) {
            setClienteSelecc(listaClientes.find(cliente => cliente['id'] === equipoSelecc.idCliente));
        }
    }, [equipoSelecc]);

    //Cuando se selecciona el cliente
    useEffect(() => {
        if (clienteSelecc !== null) {
            console.log(clienteSelecc.nombre);
            setAbrirDetallesReparacion(true);
        }
    }, [clienteSelecc]);

    if (!isOpen) return null;

    return (
        <div className="modal contListaEquIngReparacion" >
            <div id='formListaEqIngresados'>

                {mostrarSelect ? selecEstado : inputFiltro}

                <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroEqIngresados"
                    onChange={e => ManejarSelectFiltro(e)}>
                    <option value="cedulaCliente">Cédula</option>
                    <option value='modeloEquipo'>Modelo</option>
                    <option value='estadoEquipo'>Estado</option>
                </select>
                <table className='formListaCliChilds' id="tablaListaEqIngresados">
                    <tbody>
                        <tr>
                            <th>Cédula</th>
                            <th>Modelo Equipo</th>
                            <th>Estado</th>
                        </tr>
                        {
                            listaEquipos === null ? <tr></tr> :
                                listaEquipos.map((equipo, indice) => (
                                    <tr className='editCliFilaTabla'
                                        onClick={() => AbrirVentanaEdicion(equipo)} key={indice}>
                                        <td>{equipo.idCliente}</td>
                                        <td className='nombreListaEqIngresados'>{equipo.modelo}</td>
                                        <td className='nombreListaEqIngresados' >{equipo.estadoEquipo}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </table>
            </div>
            <VentanaDetallesReparacion isOpen={abrirDetallesReparacion}
                onClose={() => setAbrirDetallesReparacion(false)} equipo={equipoSelecc} cliente={clienteSelecc} />
        </div>
    );
}
export default TablaReparacion;