import './css/modalEstablecerGarantia.css';
import BotonForm from "./BotonForm";
import { useEffect, useState } from 'react';
import { MarcarEntregado } from '../apis/equipoApi';

function ModalEstablecerGarantia({ isOpen, onClose, objeto }) {

    const [diasGarantia, setDiasGarantia] = useState(0);
    const [objetoRecibido, setObjetoRecibido] = useState({});


    useEffect(() => {
        if (isOpen) {
            setObjetoRecibido(objeto);
        }
    }, [isOpen]);

    const ManejarSubmit = (e) => {
        e.preventDefault();
        if (diasGarantia >= 0 && objeto !== null && objeto !== undefined) {
            objetoRecibido.marcarEntregado.diasGarantia = diasGarantia;
            console.log(objetoRecibido);
            MarcarEntregadoFetch();
        } else {
            console.log("Objeto Null");
        }
    }

    //Funcion fetch para marcar entregado
    async function MarcarEntregadoFetch(){
        let respuesta = await MarcarEntregado(objetoRecibido);
        alert(respuesta);
        window.location.reload();
    }

    if (!isOpen) return null;
    return (
        <div className="modalTransparencia">
            <form id="formEstablecerGarantia" className="modal" onSubmit={e => ManejarSubmit(e)}>
                <div className='labelInput'>
                    <label>Establecer Días de Garantía: </label>
                    <input type="number" required onChange={e => setDiasGarantia(parseInt(e.target.value))} />
                </div>
                <div className="dosBotones">
                    <BotonForm textoBoton='Finalizar' classNameImportado='btnAceptar'
                        typeImportado='submit' />
                    <BotonForm textoBoton='Cancelar' classNameImportado='btnCancelar'
                        onClickImportado={onClose} typeImportado='button' />
                </div>
            </form>
        </div>
    );
}
export default ModalEstablecerGarantia;