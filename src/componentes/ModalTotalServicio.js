import './css/modalTotalServicio.css';
import BotonForm from './BotonForm';
import ModalEditUsuario from './ModalEditUsuario';
import { useEffect, useState } from 'react';
import { GuardarEquipo } from '../apis/equipoApi';
import FormatearNumero from './CurrencyFormat';

function ModalTotalServicio({ isOpen, onClose, equipo, listaDetalles }) {
    const [modalEditUsuOpen, setModalEditUsuOpen] = useState(false);
    const [precioTotalFormat, setPrecioTotalFormat] = useState("");
    const [abono, setAbono] = useState('');
    const etAbono = "(Poner cero si no realiza abono)";

    useEffect(() => {
        if (isOpen) {
            FormatoPrecioTotal();
        }
    }, [isOpen]);

    const FormatoPrecioTotal = () => {
        setPrecioTotalFormat(FormatearNumero(equipo.precioTotal.toString()));
    }
    
    function ConstruirObjPOST() {
        let auxObjeto = {
            "equipo": equipo,
            "detalles": listaDetalles
        };
        return auxObjeto;
    }

    function PonerAbono() {
        let auxAbono = 0;
        try {
            auxAbono = parseInt(abono);
            //Calcular saldo pendiente y agregarlo al equipo
            equipo.saldoPendiente = equipo.precioTotal - abono;
        } catch (error) {
            alert('Solo números en la casilla de abono!');
        }
    }

    const ManejarSubmit = async (e) => {
        e.preventDefault();
        try {
            PonerAbono();
            let objAux = ConstruirObjPOST();
            console.log(objAux);
            await GuardarEquipo(objAux);
            window.location.reload();
        } catch (error) {
            console.log("Eror de submit al registrar equipo por: ", error);
        }
    }

    if (!isOpen) return null;

    /*Recordar cambiar el div por form cuando vaya a hacerlo completo con API*/

    return (
        <div className="modalTransparencia">
            <div className="modal">
                <form id='formTotalIngEq' onSubmit={e => ManejarSubmit(e)} >
                    <section id='contEtTotalIngEq'>
                        <label className='etTotalIngEq'>Total:</label>
                        <label className='etTotalIngEq'>$ {precioTotalFormat}</label>
                    </section>
                    <section id='contAbonoIngEq'>
                        <label className='fuenteXLargOrbitron'>Abono Realizado: </label>
                        <input className='fuenteXLargOrbitron' type='number' required
                            onChange={e => setAbono(e.target.value)} />
                    </section>
                    <section id='contAvisoAbono'>
                        <label id='etAvisoAbono'>{etAbono}</label>
                    </section>
                    <section id='contBotonesTotalIngEq'>
                        <BotonForm textoBoton='Aceptar' classNameImportado='btnAceptar'
                            typeImportado='submit' />
                        <BotonForm idImportadoDiv="btnCancelarTotalIngEq" textoBoton="Cancelar"
                            classNameImportado="btnCancelar" onClickImportado={onClose}
                            typeImportado='button' />
                    </section>
                </form>
            </div>
            <ModalEditUsuario isOpen={modalEditUsuOpen} onClose={() => { setModalEditUsuOpen(false) }} />
        </div>
    );
}
export default ModalTotalServicio;