import './css/ventanaDetallesEqEntregado.css';
import BotonForm from './BotonForm';

function VentanaDetallesEqEntregado({ isOpen, onClose }) {

    if (!isOpen) return null;
    return (
        <div id="formDetallesEqEntregado">
            <div id='tituloDetallesEqEntregado'>
                <label>Nombre del Cliente</label>
                <label>Fecha: dd/mm/aaaa</label>
            </div>
            <div id='filaDosDetallesEqEntregado'>
                <label>Ingreso por: xxxxxxxxx</label>
                <label>Referencia o marca de equipo</label>
            </div>
            <div id='filaTresDetallesEqEntregado'>
                <label className='etDetalles'>Condiciones de Equipo Recibido:</label>
                <textarea id='condEqRecibidoEqEntregado'></textarea>
                <label className='etDetalles'>Partes Internas del Equipo:</label>
                <textarea id='partesEqRecibidoEqEntregado'></textarea>
                <table>
                    <tr>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                    <tr>
                        <td>Descripción Uno</td>
                        <td>$ 000.000</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$ 000.000</td>
                    </tr>
                </table>
                <label className='etDetalles'>Días de Garantía Otorgados: XX</label>
            </div>
            <div id='auxContBotonesDetallesEqEntregado'>
                <div id='contBotonesDetallesEqEntregado' className='dosBotones'>
                    <BotonForm textoBoton="Imprimir" classNameImportado="btnAceptar" />
                    <BotonForm textoBoton="Atrás" classNameImportado="btnCancelar" onClickImportado={onClose} />
                </div>
            </div>
        </div>
    );
}
export default VentanaDetallesEqEntregado;