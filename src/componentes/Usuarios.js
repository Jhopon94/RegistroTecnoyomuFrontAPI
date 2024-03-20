import './css/usuarios.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";

function Usuarios() {
    return (
        <div id="contenedorPrincipalUsuarios">
            <Cabezal titulo="Usuarios"  cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesUsuarios">
                <div id="contBtnRegisUsuarios"><BotonGeneral idImportado="btnRegisUsuarios" texto="Registrar Usuario" /></div>
                <div id="contBtnListaUsuarios"><BotonGeneral idImportado="btnListaUsuarios" texto="Lista de Usuarios" /></div>
            </div>
        </div>
    )
}
export default Usuarios;