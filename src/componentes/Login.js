import logoImg from './img/logoLogin.png';

const etiqueta = <h1>Hola Mundo</h1>
const logo = <img src={logoImg} />
const cajitaUsuario = <input placeholder="Usuario"></input>
const cajitaPass = <input placeholder="Contraseña"></input>
const btnEntrar = <button>Entrar</button>
const btnAnonimo = <button>Registrar equipo como usuario anónimo</button>


function LogIn() {
    return (
        <div id="contenedorPrincipal">
            <div id="cajasBotones" >
                {cajitaUsuario}
                {cajitaPass}
                {btnEntrar}
                {btnAnonimo}
            </div>
            {logo}
        </div>
    );

}
export default LogIn;