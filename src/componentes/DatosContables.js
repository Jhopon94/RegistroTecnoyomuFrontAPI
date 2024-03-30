import './css/datosContables.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalRangoFecha from './ModalRangoFecha';
import ModalListaDeudores from './ModalListaDeudores';
import { useState } from 'react';

function DatosContables() {

    const [abrirRangoFecha, setAbrirRangoFecha] = useState(false);
    const [abrirListaDeudores, setAbrirListaDeudores] = useState(false);

    return (
        <div id="contenedorPrincipalDatosContables">
            <Cabezal titulo="Datos Contables"  cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesDatosContables">
                <div id="contBtnConsIng" className='tresBotones'><BotonGeneral onClickImportado={() => setAbrirRangoFecha(true)} idImportado="btnConsIng" texto="Consultar Ingresos" /><div> </div></div>
                <div id="contBtnConsCompras" className='tresBotones'><div> </div><BotonGeneral onClickImportado={() => setAbrirRangoFecha(true)} idImportado="btnConsCompras" texto="Consultar Compras" /></div>
                <div className='auxTresBotones' ></div>
               <div id="contBtnDeudores" className='tresBotones'><BotonGeneral onClickImportado={() => setAbrirListaDeudores(true)} idImportado="btnDeudores" texto="Deudores" /></div>
            </div>
            <ModalRangoFecha isOpen={abrirRangoFecha} onClose={() => setAbrirRangoFecha(false)} />
            <ModalListaDeudores isOpen={abrirListaDeudores} onClose={() => setAbrirListaDeudores(false)} />
        </div>
    )
}
export default DatosContables;