import './css/modalListaEmpleados.css';
import BotonForm from './BotonForm';
import ModalEditEmpleado from './ModalEditEmpleado';
import ClaseEmpleado from '../clases/empleado';
import { useEffect, useState, useRef } from 'react';
import { BuscarEmpleados } from '../apis/empleadoApi';
import ListaFiltrada from './FiltroBusqueda';

function ModalListaEmpleados({ isOpen, onClose, vieneDeUsuarios, enviarEmpleado }) {
    const [modalEditEmplOpen, setModalEditEmplOpen] = useState(false);


    //Lista de empleados completa como backup para la lista filtrada
    const [listaEmpleadosCompleta, setListaEmpleadosCompleta] = useState([]);
    //Creamos varaible para guardar la lista de Empleados
    const [listaEmpleados, setListaEmpleados] = useState([]);
    //Variable Empleado para enviar a la edicióno a equipo a agregar
    const [empleadoSelecc, setEmpleadoSelecc] = useState(new ClaseEmpleado());
    //Variable para manejar el criterio de filtro de búsqueda
    const [buscarPor, setBuscarPor] = useState("nombreEmpleado");

    const decidirQueAbrir = (objetoEmpleado) => {
        setEmpleadoSelecc(objetoEmpleado);
        if (vieneDeUsuarios) {
            enviarEmpleado(objetoEmpleado);
            onClose();
        } else {
            setModalEditEmplOpen(true);
        }
    }
    //Se guarda lista completa
    const ListarEmpleados = async () => {
        setListaEmpleadosCompleta(await BuscarEmpleados());
    }

    //Se pasa a la lista dinámica cuando se carguen los valores de la lista completa
    useEffect(() => {
        setListaEmpleados(listaEmpleadosCompleta);
    }, [listaEmpleadosCompleta]);

    //Se hace el fetch solo si isOpen el modal y si es el primer render desde que se abre
    useEffect(() => {
        if (isOpen)  ListarEmpleados();
    }, [isOpen]);

    //Manejar refrescada de lista cada que se cierra la edición
    useEffect(() => {
        if(isOpen && !modalEditEmplOpen)ListarEmpleados();
    }, [modalEditEmplOpen]);


    ///////////// Sección Filtros /////////////////////////////

    const FiltrarLista = (criterio) => {
        setListaEmpleados(ListaFiltrada(buscarPor, listaEmpleadosCompleta, criterio))
    }
    //////////////////////////////////////////////////////////////

    const ManejarOnClose = () => {
        window.location.reload();
    }

    if (!isOpen) return null;

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEmpleados'>
                    <input className='formListaEmplChilds' id='inputFiltroEmpl'
                        onChange={e => FiltrarLista(e.target.value)} placeholder='Buscar...'></input>
                    <select name='filtrarListaEmpl' className='formListaEmplChilds' id="selectFiltroEmpl"
                            onChange={e => setBuscarPor(e.target.value)}>
                        <option value="nombreEmpleado">Nombre</option>
                        <option value="cedulaEmpleado">Cédula</option>
                        <option value="cargoEmpleado">Cargo</option>
                    </select>
                    <table className='formListaEmplChilds' id="tablaListaEmpl">
                        <tbody>
                            {
                                listaEmpleados === null ? <tr></tr> :
                                listaEmpleados.map(empleado => (
                                    <tr key={empleado.id} onClick={() => decidirQueAbrir(empleado)}>
                                        <td>{empleado.nombre}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <BotonForm idImportadoDiv="btnCancelarListEmpl" textoBoton="Cancelar"
                        classNameImportado="btnCancelar" onClickImportado={ManejarOnClose} />
                </div>
            </div>
            <ModalEditEmpleado isOpen={modalEditEmplOpen} onClose={() => setModalEditEmplOpen(false)} 
                objetoEmpleado={empleadoSelecc}/>
        </div>
    );
}
export default ModalListaEmpleados;