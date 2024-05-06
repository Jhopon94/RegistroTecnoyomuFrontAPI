import './css/modalListaEmpleados.css';
import BotonForm from './BotonForm';
import ModalEditEmpleado from './ModalEditEmpleado';
import ClaseEmpleado from '../clases/empleado';
import { useEffect, useState, useRef } from 'react';
import { BuscarEmpleados } from '../apis/empleadoApi';

function ModalListaEmpleados({ isOpen, onClose, vieneDeUsuarios }) {
    const [modalEditEmplOpen, setModalEditEmplOpen] = useState(false);


    //Lista de empleados completa como backup para la lista filtrada
    const [listaEmpleadosCompleta, setListaEmpleadosCompleta] = useState([]);
    //Creamos varaible para guardar la lista de Empleados
    const [listaEmpleados, setListaEmpleados] = useState([]);
    //Variable Empleado para enviar a la edicióno a equipo a agregar
    const [empleadoSelecc, setEmpleadoSelecc] = useState(new ClaseEmpleado());
    //Variable para manejar el criterio de filtro de búsqueda
    const [buscarPor, setBuscarPor] = useState("nombre");
    //Identificar si la ventana está encima para refrescar la lista con el fetch
    const [vistaEncima, setVistaEncima] = useState(isOpen);

    const decidirQueAbrir = (objetoEmpleado) => {
        setEmpleadoSelecc(objetoEmpleado);
        if (vieneDeUsuarios) {
            onClose();
        } else {
            setVistaEncima(false);
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

    const ParamBusqueda = (e) => {
        let criterio = e.target.value;
        if (buscarPor === 'nombre') FiltrarNombre(criterio);
         if(buscarPor === 'cedula')FiltrarCedula(criterio);
         if(buscarPor === 'cargo')FiltrarCargo(criterio);
    }

    const FiltrarNombre = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEmpleadosCompleta.forEach(empleado => {
            if (empleado.nombre.match(textoRegx)) {
                listaAux.push(empleado);
            }
        });
        setListaEmpleados(listaAux);
    }

    const FiltrarCedula = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEmpleadosCompleta.forEach(empleado => {
            if (empleado.id.toString().match(textoRegx)) {
                listaAux.push(empleado);
            }
        });
        setListaEmpleados(listaAux);
    }

    const FiltrarCargo = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaEmpleadosCompleta.forEach(empleado => {
            if (empleado.cargo.match(textoRegx)) {
                listaAux.push(empleado);
            }
        });
        setListaEmpleados(listaAux);
    }
    //////////////////////////////////////////////////////////////

    const ManejarOnClose = () => {
        setBuscarPor("nombre");
        onClose();
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEmpleados'>
                    <input className='formListaEmplChilds' id='inputFiltroEmpl'
                        onChange={e => ParamBusqueda(e)}></input>
                    <select name='filtrarListaEmpl' className='formListaEmplChilds' id="selectFiltroEmpl"
                            onChange={e => setBuscarPor(e.target.value)}>
                        <option value="nombre">Nombre</option>
                        <option value="cedula">Cédula</option>
                        <option value="cargo">Cargo</option>
                    </select>
                    <table className='formListaEmplChilds' id="tablaListaEmpl">
                        <tbody>
                            {
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