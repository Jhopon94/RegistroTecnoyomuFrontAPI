import './css/modalRegEmpleado.css';
import BotonForm from './BotonForm';
import { GuardarEmpleado } from '../apis/empleadoApi';
import ClaseEmpleado from '../clases/empleado';
import { useState } from 'react';

function ModalRegEmpleado({ isOpen, onClose }) {

    const [empleado, setEmpleado] = useState(new ClaseEmpleado());

    const ManejarSubmit = async (e) => {
        e.preventDefault();
        TemporalFoto();
        await GuardarEmpleado(empleado);
        window.location.reload();
    }

    const TemporalFoto = () => {
        empleado.foto = '/Ruta/Ficticia/';
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formRegEmpleado' onSubmit={e => ManejarSubmit(e)}>
                    <input id='nombreRegEmpleado' placeholder='Nombre Completo'
                        className='inputModalRegEmpleado' onChange={e => empleado.nombre = e.target.value}
                        type='text' required></input>
                    <input id='ccRegEmpleado' placeholder='Número de Cédula'
                        className='inputModalRegEmpleado' onChange={e => empleado.id = e.target.value}
                        type='number' required></input>
                    <input id='cargoRegEmpleado' placeholder='Cargo'
                        className='inputModalRegEmpleado' onChange={e => empleado.cargo = e.target.value}
                        type='text' required></input>
                    <input id='celuRegEmpleado' placeholder='Número de Celular'
                        className='inputModalRegEmpleado' onChange={e => empleado.celular = e.target.value}
                        type='number' required></input>
                    <input id='direccRegEmpleado' placeholder='Dirección de Residencia'
                        className='inputModalRegEmpleado' onChange={e => empleado.direccion = e.target.value}
                        type='text' required></input>
                    <input id='correoRegEmpleado' placeholder='Correo Electrónico'
                        className='inputModalRegEmpleado' onChange={e => empleado.correo = e.target.value}
                        type='email' required></input>
                    <div id='contBotonesRegEmpleado'>
                        <div id="btnFotoRegEmplDiv">
                            <BotonForm textoBoton="Foto" classNameImportado='btnFoto'
                                typeImportado='button' />
                        </div>
                        <div id="btnRegistrarEmpDiv">
                            <BotonForm textoBoton="Registrar" classNameImportado='btnRegistrar'
                                typeImportado='submit' />
                        </div>
                        <div id="btnCancelRegEmpDiv">
                            <BotonForm textoBoton="Cancelar" classNameImportado='btnCancelar'
                                onClickImportado={onClose} typeImportado='button' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default ModalRegEmpleado;