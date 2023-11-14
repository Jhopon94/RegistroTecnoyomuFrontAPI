import logoImg from './img/logoLogin.png';
import './css/login.css';

const logo = <img id="logoLogin" src={logoImg} />
const cajitaUsuario = <input id="cajitaUsuario" placeholder="Usuario"></input>
const cajitaPass = <input type="password" id="cajitaPass" placeholder="Contraseña"></input>
const btnEntrar = <button id="btnEntrar">Entrar</button>
const btnAnonimo = <button id="btnAnonimo">Registrar equipo como usuario anónimo</button>


function LogIn() {
    return (
        <div id="contenedorPrincipal">
            <div></div>
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