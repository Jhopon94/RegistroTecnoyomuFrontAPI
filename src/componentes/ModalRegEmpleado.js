import './css/modalRegEmpleado.css';
import BotonForm from './BotonForm';

function ModalRegEmpleado({ isOpen, onClose}) {


    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <div id='formRegEmpleado'> 
                    <input id='nombreRegEmpleado' placeholder='Nombre Completo' className='inputModalRegEmpleado'></input>
                    <input id='ccRegEmpleado' placeholder='Número de Cédula' className='inputModalRegEmpleado'></input>
                    <input id='cargoRegEmpleado' placeholder='Cargo' className='inputModalRegEmpleado'></input>
                    <input id='celuRegEmpleado' placeholder='Número de Celular' className='inputModalRegEmpleado'></input>
                    <input id='direccRegEmpleado' placeholder='Dirección de Residencia' className='inputModalRegEmpleado'></input>
                    <input id='correoRegEmpleado' placeholder='Correo Electrónico' className='inputModalRegEmpleado'></input>
                    <div id='contBotonesRegEmpleado'>
                        <div id="btnFotoRegEmplDiv">
                            <BotonForm textoBoton="Foto" classNameImportado='btnFoto' />
                        </div>
                        <div id="btnRegistrarEmpDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado='btnRegistrar' />
                        </div>
                        <div id="btnCancelRegEmpDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar' onClickImportado={onClose} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ModalRegEmpleado;