import './css/usuarios.css';
import Cabezal from "./Cabezal";
import BotonGeneral from "./BotonGeneral";
import ModalRegUsuario from './ModalRegUsuario';
import ModalListaUsuarios from './ModalListaUsuarios';
import { useState } from 'react';

function Usuarios() {

    const [abrirModalRegUsu, setAbrirModalRegUsu] = useState(false);
    const [abrirModalListaUsu, setAbrirModalListaUsu] = useState(false);

    return (
        <div id="contenedorPrincipalUsuarios">
            <Cabezal titulo="Usuarios"  cerrarSesion={false} atras={true}/>
            <div id="contenedorBotonesUsuarios">
                <div id="contBtnRegisUsuarios"><BotonGeneral idImportado="btnRegisUsuarios" texto="Registrar Usuario" onClickImportado={() => setAbrirModalRegUsu(true)}/></div>
                <div id="contBtnListaUsuarios"><BotonGeneral idImportado="btnListaUsuarios" texto="Lista de Usuarios" onClickImportado={() => setAbrirModalListaUsu(true)} /></div>
            </div>
            <ModalRegUsuario isOpen={abrirModalRegUsu} onClose={() => setAbrirModalRegUsu(false)}/>
            <ModalListaUsuarios isOpen={abrirModalListaUsu} onClose={() => setAbrirModalListaUsu(false)} />
        </div>
    )
}
export default Usuarios;