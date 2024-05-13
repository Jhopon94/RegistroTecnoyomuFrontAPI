import './css/modalListaUsuarios.css';
import BotonForm from './BotonForm';
import ModalEditUsuario from './ModalEditUsuario';
import { useEffect, useState } from 'react';
import { BuscarUsuarios } from '../apis/usuarioApi';
import ClaseUsuario from '../clases/usuario';

function ModalListaUsuarios({ isOpen, onClose }) {
    const [modalEditUsuOpen, setModalEditUsuOpen] = useState(false);

    //Lista de usuarios completa como backup para la lista filtrada
    const [listaUsuariosCompleta, setListaUsuariosCompleta] = useState([]);
    //Creamos varaible para guardar la lista de Usuarios
    const [listaUsuarios, setListaUsuarios] = useState([]);
    //Variable Usuario para enviar a la edicióno a equipo a agregar
    const [usuarioSelecc, setUsuarioSelecc] = useState(new ClaseUsuario());
    //Variable para manejar el criterio de filtro de búsqueda
    const [buscarPor, setBuscarPor] = useState("nombreUsuario");

    //Cargar lista primera vez al abrir
    useEffect(() => {
        if (isOpen) ListarUsuarios();
    }, [isOpen]);

    //Cargar lista de usuarios dinámica solo cuando cambie la completa
    useEffect(() => {
        setListaUsuarios(listaUsuariosCompleta);
    }, [listaUsuariosCompleta]);

    //Obtener lista de usuarios de la API
    const ListarUsuarios = async () => {
        setListaUsuariosCompleta(await BuscarUsuarios());
    }

    //Cargar lista de nuevo al salir de edición
    useEffect(() => {
        if(isOpen && !modalEditUsuOpen)ListarUsuarios();
    }, [modalEditUsuOpen]);

    ///////////// Sección Filtros /////////////////////////////

    const ParamBusqueda = (e) => {
        let criterio = e.target.value;
        if (buscarPor === 'nombreUsuario') FiltrarNombre(criterio);
        if (buscarPor === 'cedula') FiltrarCedula(criterio);
        if (buscarPor === 'tipoUsuario') FiltrarTipoUsuario(criterio);
    }

    const FiltrarNombre = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaUsuariosCompleta.forEach(usuario => {
            if (usuario.nombreUsuario.match(textoRegx)) {
                listaAux.push(usuario);
            }
        });
        setListaUsuarios(listaAux);
    }

    const FiltrarCedula = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaUsuariosCompleta.forEach(usuario => {
            if (usuario.idEmpleado.toString().match(textoRegx)) {
                listaAux.push(usuario);
            }
        });
        setListaUsuarios(listaAux);
    }

    const FiltrarTipoUsuario = (texto) => {
        let listaAux = [];
        //Contruir el parámetro regx / texto / i
        const textoRegx = new RegExp(texto, 'i');
        listaUsuariosCompleta.forEach(usuario => {
            if (usuario.rol.match(textoRegx)) {
                listaAux.push(usuario);
            }
        });
        setListaUsuarios(listaAux);
    }

    //////////////////////////////////////////////////////////

    const AbrirModalEditUsuario = (objUsuario) => {
        setUsuarioSelecc(objUsuario);
        setModalEditUsuOpen(true);
    }

    const ManejarCerrar = () => {
        window.location.reload();
    }

    if (!isOpen) return null;

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaUsuarios'>
                    <input className='formListaUsuChilds' id='inputFiltroUsu'
                        placeholder='Buscar con selección...' onChange={e => ParamBusqueda(e)}></input>
                    <select name='filtrarListaUsu' className='formListaUsuChilds' id="selectFiltroUsu"
                        onChange={e => setBuscarPor(e.target.value)}>
                        <option value="nombreUsuario">Nombre Usuario</option>
                        <option value="cedula">Cédula</option>
                        <option value="tipoUsuario">Tipo de Usuario</option>
                    </select>
                    <table className='formListaUsuChilds' id="tablaListaUsu">
                        <tbody>
                            {
                                listaUsuarios === null ? <tr></tr> :
                                listaUsuarios.map(usuario => (
                                    <tr key={usuario.idEmpleado} onClick={() => AbrirModalEditUsuario(usuario)}>
                                        <td>{usuario.nombreUsuario}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <BotonForm idImportadoDiv="btnCancelarListUsu" textoBoton="Cancelar" 
                    classNameImportado="btnCancelar" onClickImportado={ManejarCerrar} />
                </div>
            </div>
            <ModalEditUsuario isOpen={modalEditUsuOpen} onClose={() => setModalEditUsuOpen(false) } 
                objetoUsuario={usuarioSelecc}/>
        </div>
    );
}
export default ModalListaUsuarios;