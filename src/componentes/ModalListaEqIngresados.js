import './css/modalListaEqIngresados.css';
import BotonForm from './BotonForm';
import VentanaDetallesEqIngresado from './VentanaDetallesEqIngresado';
import { useEffect, useState } from 'react';
import { BuscarEquipos, BuscarEquiposIngresados } from '../apis/equipoApi';
import ClaseEquipo from '../clases/equipo';
import { BuscarClientes } from '../apis/clienteApi';
import ClaseCliente from '../clases/cliente';

function ModalListaEqIngresados({ isOpen, onClose }) {


    const [abrirDetallesEqIngresado, setAbrirDetallesEqIngresado] = useState(false);
    const [mostrarSelect, setMostrarSelect] = useState(false);

    //Lista de equiposs completa como backup para la lista filtrada
    const [listaEquiposCompleta, setListaEquiposCompleta] = useState([]);
    //Creamos varaible para guardar la lista de Equipos
    const [listaEquipos, setListaEquipos] = useState([]);
    //Variable Empleado para enviar a la edicióno a equipo a agregar
    const [equiposSelecc, setEquipoSelecc] = useState(new ClaseEquipo());
    //Variable para manejar el criterio de filtro de búsqueda
    const [buscarPor, setBuscarPor] = useState("cedula");
    //Lista de clientes para mandar bien datos al modal de edición
    const [listaClientes, setListaClientes] = useState([]);
    const [clienteSelecc, setClienteSelecc] = useState({});

    const ListarEquiposIngresados = async () => {
        let listaAux = await BuscarEquiposIngresados();
        setListaEquiposCompleta(listaAux);
    }

    const ListarClientes = async () => {
        let listaAux = await BuscarClientes();
        setListaClientes(listaAux);
    }

    //Listar equipos y clientes ingresados al abrir el modal y el siguiente está cerrado
    useEffect(() => {
        if (isOpen && !abrirDetallesEqIngresado) {
            ListarEquiposIngresados();
            ListarClientes();
        }
    }, [isOpen, abrirDetallesEqIngresado]);

    useEffect(() => {
        if (isOpen) setListaEquipos(listaEquiposCompleta);
    }, [listaEquiposCompleta]);

    /////////Cuando se selecciona el equipo de la lista///////
    const SeleccionarEquipo = (equipo) => {
        setEquipoSelecc(equipo);
    }
    /////////////////////////////////////////////////////

    //Función para encontrar el cliente del equipo seleccionado
    function EncontrarCliente() {
        let auxCliente = listaClientes.find(cliente => cliente['id'] === equiposSelecc.idCliente);
        if (auxCliente) setClienteSelecc(auxCliente);
        else setClienteSelecc(null);
    }

    //cuando se setea el cliente encontrado despues de elegir el equipo
    useEffect(() => {
        if (isOpen) {
            if (clienteSelecc !== null ) {
                setAbrirDetallesEqIngresado(true);
            }
            else {
                alert("No hay cliente referido para este equipo, consultar base de datos!");
            }
        }
    }, [clienteSelecc]);

    //Cuando se setea el hook del equipo seleccionado
    useEffect(() => {
        if (isOpen) {
            EncontrarCliente();
        }
    }, [equiposSelecc]);

    const selecEstado = <select className='formListaCliChilds' onChange={e => ParamBusqueda(e)}>
        <option value='ingresado'>Ingresado</option>
        <option value='enReparacion'>En Reparación</option>
        <option value='reparado'>Reparado</option>
    </select>;

    const inputFiltro = <input className='formListaCliChilds' id='inputFiltroEqIngresados'
        onChange={e => ParamBusqueda(e)} placeholder='Buscar...'></input>;


    const VerificarFiltroPorEstado = (event) => {
        const seleccion = event.target.value;
        console.log(seleccion);
        if (seleccion == 'estado') setMostrarSelect(true);
        else setMostrarSelect(false);
    }

    ////////////////////////////////////////////////////
    /////////////////// Sección FIltros ////////////////

    const ParamBusqueda = (e) => {
        let criterio = e.target.value;
        if (buscarPor === 'modelo') FiltrarModelo(criterio);
        if (buscarPor === 'cedula') FiltrarCedula(criterio);
        if (buscarPor === 'estado') FiltrarEstado(criterio);
    }

    const FiltrarModelo = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEquiposCompleta.forEach(equipo => {
            if (equipo.modelo.match(textoRegx)) {
                listaAux.push(equipo);
            }
        });
        setListaEquipos(listaAux);
    }

    const FiltrarCedula = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEquiposCompleta.forEach(equipo => {
            if (equipo.idCliente.toString().match(textoRegx)) {
                listaAux.push(equipo);
            }
        });
        setListaEquipos(listaAux);
    }

    const FiltrarEstado = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEquiposCompleta.forEach(equipo => {
            if (equipo.estadoEquipo.match(textoRegx)) {
                listaAux.push(equipo);
            }
        });
        setListaEquipos(listaAux);
    }
    /////////////////// Sección FIltros ////////////////
    ////////////////////////////////////////////////////

    const ManejarOnChangeSelect = (e) => {
        VerificarFiltroPorEstado(e);
        setBuscarPor(e.target.value);
    }

    const ManejarOnClose = () => {
        window.location.reload();
    }

    if (!isOpen) return null;

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEqIngresados'>

                    {mostrarSelect ? selecEstado : inputFiltro}

                    <select name='filtrarListaCli' className='formListaCliChilds'
                        id="selectFiltroEqIngresados" onChange={e => ManejarOnChangeSelect(e)}>
                        <option value="cedula">Cédula</option>
                        <option value='modelo'>Modelo</option>
                        <option value='estado'>Estado</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaEqIngresados">
                        <tbody>
                            <tr className='editCliFilaTabla' id='tituloTabla'>
                                <td className='nombreListaEqIngresados'>Cédula del Cliente</td>
                                <td className='nombreListaEqIngresados'>Modelo Equipo</td>
                                <td className='nombreListaEqIngresados' >Estado</td>
                            </tr>
                            {
                                listaEquipos === null ? <tr></tr> :
                                listaEquipos.map((equipo, index) => (
                                    <tr onClick={() => SeleccionarEquipo(equipo)} key={index}>
                                        <td>{equipo.idCliente}</td>
                                        <td>{equipo.modelo}</td>
                                        <td>{equipo.estadoEquipo}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div id='contBotonesListaEqIngresados'>
                        <BotonForm idImportadoDiv="btnCancelarListEqEntregados" textoBoton="Cancelar"
                            classNameImportado="btnCancelar" onClickImportado={ManejarOnClose} />
                    </div>
                </div>
                <VentanaDetallesEqIngresado isOpen={abrirDetallesEqIngresado}
                    onClose={() => setAbrirDetallesEqIngresado(false)} equipo={equiposSelecc}
                    cliente={clienteSelecc} />
            </div>
        </div>
    );
}
export default ModalListaEqIngresados;