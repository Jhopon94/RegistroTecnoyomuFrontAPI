import './css/inventario.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalRegistroItem from './ModalRegistroItem';
import { useState } from 'react';

function Inventario() {

    const [abrirRegitem, setAbrirRegItem] = useState(false); 

    return (
        <div id="contenedorPrincipalInventario">
            <Cabezal titulo="Inventario" cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesInventario">
                <div id="contBtnRegisItems"><BotonGeneral idImportado="btnRegisItems" texto="Registrar Item" onClickImportado={() => setAbrirRegItem(true)}/></div>
                <div id="contBtnListaItems"><BotonGeneral idImportado="btnListaItems" texto="Lista de Items" /></div>

            </div>
            <ModalRegistroItem isOpen={abrirRegitem} onClose={() => setAbrirRegItem(false)} />
        </div>
    )
}
export default Inventario;