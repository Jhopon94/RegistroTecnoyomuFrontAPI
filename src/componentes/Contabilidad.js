import './css/contabilidad.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Contabilidad() {

    const locacion = useLocation();
    const pagAnterior = locacion.state && locacion.state;
    const [banderaSesion, setbanderaSesion] = useState(false);
    const [banderaAtras, setBanderaAtras] = useState(false);

    useEffect(() => {
        DeDondeViene();

    }, []);
    
    const DeDondeViene = () => {
        console.log("evaluaremos: " + pagAnterior);
        if(pagAnterior === "login")setbanderaSesion(true);
        if(pagAnterior === "admon")setBanderaAtras(true);
    }


    return (
        <div id="contenedorPrincipalContabilidad">
            <Cabezal titulo="Contabilidad" cerrarSesion={banderaSesion} atras={banderaAtras} />
            <div id="contenedorBotonesContabilidad">
                <div id="contBtnContables"><Link to="/DatosContables"><BotonGeneral idImportado="btnContables" texto="Datos Contables" /></Link></div>
                <div id="contBtnInventario"><Link to="/Inventario"><BotonGeneral idImportado="btnInventario" texto="Inventario" /></Link></div>
            </div>
        </div>
    )
}
export default Contabilidad;