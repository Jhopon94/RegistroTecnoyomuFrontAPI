import logoImg from './img/logoLogin.png';
import './css/login.css';
import { Link } from 'react-router-dom';


const logo = <img id="logoLogin" src={logoImg}/>;
const cajitaUsuario = <input id="cajitaUsuario" placeholder="Usuario"></input>;
const cajitaPass = <input type="password" id="cajitaPass" placeholder="Contraseña"></input>;
const btnEntrar = <button id="btnEntrar">Entrar</button>;
const btnAnonimo = <button id="btnAnonimo">Registrar equipo como usuario anónimo</button>;


function LogIn() {
    return (
        
            <div id="contenedorPrincipal">

                <div id="listaPaginas">
                    <Link to="/Administracion">Administración</Link>
                    <Link to="/ServicioCliente">Servicio al Cliente</Link>
                    <Link to="/Cabezal">Cabezal</Link>
                    <Link to="/Cabezal">Cabezal</Link>
                </div>
                <div id="cajasBotones" >
                    <div id="margenSuperior"></div>
                    {cajitaUsuario}
                    {cajitaPass}
                    {btnEntrar}
                    {btnAnonimo}
                </div>
                <div id="contenedorLogo">
                    {logo}
                </div>
            </div>
        
    );

}
export default LogIn;

