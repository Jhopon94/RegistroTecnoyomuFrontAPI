import './css/modalListaClientes.css';
import BotonForm from './BotonForm';
import ModalEditCliente from './ModalEditCliente';
import ModalRegCliente from './ModalRegCliente';
import { useEffect, useState, useRef } from 'react';
import VentanaIngresoEquipo from './VentanaIngresoEquipo';
import { BuscarClientes } from '../apis/clienteApi';
import ClaseCliente from '../clases/cliente';

function ModalListaClientes({ isOpen, onClose, deDondeViene }) {


    /* se pone aquí esta función para que se inicialice antes de usarla
    en la "banderaBtnAgregar" más adelante*/

    const ManejarBtnAgregar = () => {
        if (deDondeViene === "clientes") return false;
        if (deDondeViene === "ingresoEquipo") return true;
    }

    const [abrirModalRegCliente, setAbrirModalRegCliente] = useState(false); ////modal registrar cliente
    const btnAgregarCliente = <BotonForm idImportadoDiv="btnAddCliListCli" textoBoton="+ Nuevo" classNameImportado="btnAgregar" onClickImportado={() => setAbrirModalRegCliente(true)} />;
    const [modalEditCliOpen, setModalEditCliOpen] = useState(false); //Modal Editar Cliente
    const [modalIngEquipoOpen, setModalIngEquipoOpen] = useState(false);//modal ingresar equipo
    const banderaBtnAgregar = ManejarBtnAgregar();

    //Lista de clientes completa como backup para la lista filtrada
    const [listaClientesCompleta, setListaClientesCompleta] = useState([]);
    //Creamos varaible para guardar la lista de clientes
    const [listaClientes, setListaClientes] = useState([]);
    //Variable cliente para enviar a la edicióno a equipo a agregar
    const [cliente, setCliente] = useState(new ClaseCliente());
    //Variable para manejar el criterio de filtro de búsqueda
    const [buscarPor, setBuscarPor] = useState("nombre");
    //Garantizar que la se haga el fetch de la lista solo cuando se abre por primera vez el modal
    const primerRender = useRef(true);

    const ListarClientes = async () => {
        //Llenamos la lista completa para tenerla de reserva
        setListaClientesCompleta(await BuscarClientes());
    }

    /* Dado que las listaClientesCompleta se llene quien sabe cuando
    se llena la lista completa solo cuando esa llamada se complete, porque
    si se pone solamente codigo en sucesión, no pasa nada porque
    es asíncrono */ 
    useEffect(() => {
        //Llenamos a lista que se renderiza en la tabla
        setListaClientes(listaClientesCompleta);
    }, [listaClientesCompleta]);


    useEffect(() => {
        //Si el modal está abierto Y es la priemea vez que se abre después de cerrado.
        if (isOpen && primerRender.current) {
            primerRender.current = false;
            ListarClientes();
        }
    }, [isOpen]);

    //para abrir la ventana segun de donde venga la peticion de lista clientes
    const DeDondeViene = (objCliente) => {
        setCliente(objCliente);
        if (deDondeViene === "clientes") {
            setModalEditCliOpen(true);
        }
        if (deDondeViene === "ingresoEquipo") {
            setModalIngEquipoOpen(true);
        }
    }

    const ManejarCerrar = () => {
        //Reiniciar bandera de primer vez abierto
        primerRender.current = true;
        onClose();
    }

    const ParamBusqueda = (e) => {
        let criterio = e.target.value;
        if(buscarPor === 'nombre')FiltrarNombre(criterio);
        if(buscarPor === 'cedula')FiltrarCedula(criterio);
        if(buscarPor === 'celular')FiltrarCelular(criterio);
    }

    const FiltrarNombre = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaClientesCompleta.forEach(cliente => {
            if(cliente.nombre.match(textoRegx)){
                listaAux.push(cliente);
            }
        });
        setListaClientes(listaAux);
    }

    const FiltrarCedula = (cedula) => {
        let listaAux = [];
        //Contruir el parámetro regx 
        const textoRegx = new RegExp(cedula);
        listaClientesCompleta.forEach(cliente => {
            //Ojo, como id es number hay que convertirlo a String
            if(cliente.id.toString().match(cedula)){
                listaAux.push(cliente);
            }
        });
        setListaClientes(listaAux);
    }

    const FiltrarCelular = (celular) => {
        let listaAux = [];
        //Contruir el parámetro regx 
        const textoRegx = new RegExp(celular);
        listaClientesCompleta.forEach(cliente => {
            if(cliente.celular.match(textoRegx)){
                listaAux.push(cliente);
            }
        });
        setListaClientes(listaAux);
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaClientes'>
                    <input className='formListaCliChilds' id='inputFiltroCli'
                        onChange={e => ParamBusqueda(e)}></input>
                    <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroCli"
                        onChange={e => setBuscarPor(e.target.value)}>
                        <option value="nombre">Nombre</option>
                        <option value="cedula">Cédula</option>
                        <option value="celular">Celular</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaCli">
                        <tbody>
                            {
                                listaClientes.map(cliente => (
                                    <tr key={cliente.id} onClick={() => DeDondeViene(cliente)}>
                                        <td>{cliente.nombre}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div id='contBotonesListaCli'>
                        {banderaBtnAgregar ? btnAgregarCliente : null}
                        <BotonForm idImportadoDiv="btnCancelarListCli" textoBoton="Cancelar" classNameImportado="btnCancelar" onClickImportado={ManejarCerrar} />
                    </div>
                </div>
            </div>
            <ModalEditCliente isOpen={modalEditCliOpen} onClose={() => setModalEditCliOpen(false)} objetoCliente={cliente} />
            <ModalRegCliente isOpen={abrirModalRegCliente} onClose={() => setAbrirModalRegCliente(false)} />
            <VentanaIngresoEquipo isOpen={modalIngEquipoOpen} onClose={() => setModalIngEquipoOpen(false)} />
        </div>
    );
}
export default ModalListaClientes;