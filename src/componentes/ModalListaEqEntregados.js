import './css/modalListaEqEntregados.css';
import BotonForm from './BotonForm';
import VentanaDetallesEqEntregado from './VentanaDetallesEqEntregado';
import { useEffect, useState } from 'react';
import { BuscarEquiposEntregados } from '../apis/equipoApi';
import ListaFiltrada from './FiltroBusqueda';

function ModalListaEqEntregados({ isOpen, onClose }) {

    const [abrirDetallesEqEntregado, setAbrirDetallesEqEntregado] = useState(false);
    const [listaEqEntregadosCompleta, setListaEqEntregadosCompleta] = useState([]);
    const [listaEqEntregados, setListaEqEntregados] = useState([]);
    const [equipoSelecc, setEquipoSelecc] = useState({});

    useEffect(() => {
        if (isOpen && !abrirDetallesEqEntregado) {
            ListarEquEntregados();
        }
    }, [isOpen]);

    async function ListarEquEntregados() {
        setListaEqEntregadosCompleta(await BuscarEquiposEntregados());
    }

    //Rellenar la lsita dinámica con la completa
    useEffect(() => {
        if (isOpen && !abrirDetallesEqEntregado) {
            setListaEqEntregados(listaEqEntregadosCompleta);
        }
    }, [listaEqEntregadosCompleta]);

    const ManejarCancelar = () => {
        window.location.reload();
    }

    //Filtrar lista
    const FiltrarLista = (criterio) => {
        setListaEqEntregados(ListaFiltrada('cedulaCliente', listaEqEntregadosCompleta, criterio));
    }

    const SeleccEquipo = (equipo) => {
        if(equipo) setEquipoSelecc(equipo);
    }

    //...Cuando se setee el equipo seleccionado
    useEffect(() => {
        if(isOpen){
            VentanaDetalles();
        }
    }, [equipoSelecc]);

    function VentanaDetalles(){
        setAbrirDetallesEqEntregado(true);
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formListaEqEntregados'>
                    <input className='formListaCliChilds' id='inputFiltroEqEntregados'
                        placeholder='Buscar por cédula solamente...'
                        onChange={e => FiltrarLista(e.target.value)}></input>
                    <table className='formListaCliChilds' id="tablaListaEqEntregados">
                        <thead>
                            <tr className='editCliFilaTabla tituloTabla'>
                                <td >Fecha de Salida</td>
                                <td className='nombreListaEqEntregados'>Cédula del Cliente</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaEqEntregados === null || listaEqEntregados === undefined ? <tr></tr> :
                                    listaEqEntregados.map((equipo, index) => (
                                        <tr onClick={() => SeleccEquipo(equipo)} key={index}>
                                            <td>{equipo.fechaSalida.toString().substring(0, 10)}</td>
                                            <td>{equipo.idCliente}</td>
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                    <div id='contBotonesListaEqEntregados'>
                        <BotonForm idImportadoDiv="btnCancelarListEqEntregados"
                            textoBoton="Cancelar" classNameImportado="btnCancelar"
                            onClickImportado={ManejarCancelar} />
                    </div>
                </div>
                <VentanaDetallesEqEntregado isOpen={abrirDetallesEqEntregado}
                    onClose={() => setAbrirDetallesEqEntregado(false)} equipo={equipoSelecc}/>
            </div>
        </div>
    );
}
export default ModalListaEqEntregados;