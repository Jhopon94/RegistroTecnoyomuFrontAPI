import './css/inventario.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalRegistroItem from './ModalRegistroItem';
import ModalListaTipoItem from './ModalListaTipoItem';
import { useState } from 'react';

function Inventario() {

    const [abrirRegItem, setAbrirRegItem] = useState(false); 
    const [abrirListaTipo, setAbrirListaTipo] = useState(false);

    return (
        <div id="contenedorPrincipalInventario">
            <Cabezal titulo="Inventario" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesInventario">
                <div id="contBtnRegisItems"><BotonGeneral idImportado="btnRegisItems" texto="Registrar Item" onClickImportado={() => setAbrirRegItem(true)}/></div>
                <div id="contBtnListaItems"><BotonGeneral idImportado="btnListaItems" texto="Lista de Items" onClickImportado={() => setAbrirListaTipo(true)} /></div>

            </div>
            <ModalRegistroItem isOpen={abrirRegItem} onClose={() => setAbrirRegItem(false)} />
            <ModalListaTipoItem vieneDeContabilidad={true} agregandoItem={false} isOpen={abrirListaTipo} onClose={() => setAbrirListaTipo(false)} />
        </div>
    )
}
export default Inventario;