import './css/tablaReparacion.css';
import BotonForm from './BotonForm';
import VentanaDetallesReparacion from './VentanaDetallesReparacion';
import { useState } from 'react';

function TablaReparacion() {

    const selecEstado = <select className='formListaCliChilds' >
                            <option>Recibido</option>
                            <option>En Reparación</option>
                            <option>Reparado</option>
                        </select>;

    const inputFiltro = <input className='formListaCliChilds' id='inputFiltroEqIngresados'></input>;

    const [ abrirDetallesReparacion, setAbrirDetallesReparacion ] = useState(false);
    const [mostrarSelect, setMostrarSelect] = useState(false);

    const VerificarFiltroPorEstado = (event) => {
        const seleccion = event.target.value;
        console.log(seleccion);
        if (seleccion == 'estado') setMostrarSelect(true);
        else setMostrarSelect(false);
    }

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
            <div className="modal">
                <div id='formListaEqIngresados'>

                    {mostrarSelect ? selecEstado : inputFiltro}
                    
                    <select name='filtrarListaCli' className='formListaCliChilds' id="selectFiltroEqIngresados" onChange={VerificarFiltroPorEstado}>
                        <option value="fecha">Fecha</option>
                        <option value="cedula">Cédula</option>
                        <option value="nombre">Nombre</option>
                        <option value='modelo'>Modelo</option>
                        <option value='estado'>Estado</option>
                    </select>
                    <table className='formListaCliChilds' id="tablaListaEqIngresados">
                        <tr className='editCliFilaTabla' onClick={() => setAbrirDetallesReparacion(true)}>
                            <td>Nombre del Cliente</td>
                            <td className='nombreListaEqIngresados'>Modelo Equipo</td>
                            <td className='nombreListaEqIngresados' >Reparado</td>
                        </tr>
                    </table>
                </div>
                <VentanaDetallesReparacion isOpen={abrirDetallesReparacion} onClose={() => setAbrirDetallesReparacion(false)} />
            </div>
    );
}
export default TablaReparacion;