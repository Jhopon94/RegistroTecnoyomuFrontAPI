import './css/botonGeneral.css';

const BotonGeneral = ({texto, idImportado}) =>{
    let textoBtn = texto;
    const btnGeneral = <button id={idImportado} className="btnGeneral">{textoBtn}</button>

    return (
        <div>
            {btnGeneral}
        </div>
    )
}

export default BotonGeneral;