import './css/modalCambiarEstadoRep.css';
import BotonForm from "./BotonForm";
import { useEffect, useState } from 'react';
import { CambiarEstado } from '../apis/equipoApi';

function ModalCambiarEstadoRep({ isOpen, onClose, idEquipo }) {

    const [estado, setEstado] = useState('');

    useEffect(() => {
        if(isOpen){
            console.log(idEquipo);
        }
    }, [isOpen]);

    const EnviarFormulario = async(e) => {
        e.preventDefault();
        if(estado !== ''){
            //Enviar el objeto
            let auxObj = {
                "cambiarEstado": {
                    "estado": estado,
                    "id": idEquipo
                }
            }
            alert(await CambiarEstado(auxObj));
            onClose();
        }
    }

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <form id="formCambiarEstadoRep" className="modal" onSubmit={EnviarFormulario}>
                    <select onChange={e => setEstado(e.target.value)} required>
                        <option value=''>Elige uno...</option>
                        <option value='ingresado' >Ingresado</option>
                        <option value='enReparacion' >En Reparación</option>
                        <option value='reparado' >Reparado</option>
                    </select>
                <div className="dosBotones">
                    <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar' 
                        typeImportado='submit'/>
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar'
                     onClickImportado={onClose} typeImportado='button'/>
                </div>
            </form>
        </div>
    );
}
export default ModalCambiarEstadoRep;