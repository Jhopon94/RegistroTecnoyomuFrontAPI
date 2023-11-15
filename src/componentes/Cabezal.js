import './css/cabezal.css';
import logo from './img/logoLogin.png';
import { Link } from 'react-router-dom';


const Cabezal = ({ titulo, cerrarSesion }) => {

    const logoCabezal = <img alt='' id="logoCabezal" src={logo} />;
    let textoTitulo = titulo;
    let banderaSesion = cerrarSesion;
    const tituloCabezal = <label id="tituloCabezal" >{textoTitulo}</label>;
    const etCerrarSesion = <label id="etCerrarSesion"><Link to="/">Cerrar Sesión</Link></label>;


    return (
        <div id="ContenedorPrincipalCabezal">
            <div></div>
            <div id="fondoCabezal">
                {logoCabezal}
                {tituloCabezal}
            </div>
            <div id="contCerrarSesion">
                {banderaSesion ? (etCerrarSesion) : null }
                </div>
        </div>
    )
}


export default Cabezal;