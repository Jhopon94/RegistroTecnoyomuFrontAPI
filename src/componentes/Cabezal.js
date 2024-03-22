import { useState } from 'react';
import './css/cabezal.css';
import logo from './img/logoLogin.png';
import { Link } from 'react-router-dom';


const Cabezal = ({ titulo, cerrarSesion, atras}) => {

    const [auxCerrarSesion, setAuxCerrarSesion] = useState(cerrarSesion); 
    const [auxAtras, setAuxAtras] = useState(atras);

    const logoCabezal = <img alt='' id="logoCabezal" src={logo} />;
    let textoTitulo = titulo;
    const tituloCabezal = <label id="tituloCabezal" >{textoTitulo}</label>;
    const etCerrarSesion = <label id="etCerrarSesion"><Link to="/">Cerrar Sesión</Link></label>;
    const etAtras = <label id="etAtras" onClick={() => window.history.back()}>Atrás</label>;

    const BtnAtrasSesion = () => {
        if(auxCerrarSesion) return <etCerrarSesion/>;
        if(auxAtras) return <etAtras/>;
    }

    return (
        <div id="ContenedorPrincipalCabezal">
            <div></div>
            <div id="fondoCabezal">
                {logoCabezal}
                {tituloCabezal}
            </div>
            <div id="contCerrarSesion">
                {cerrarSesion ? etCerrarSesion : null}
                {atras ? etAtras :null}
                </div>
        </div>
    )
}


export default Cabezal;