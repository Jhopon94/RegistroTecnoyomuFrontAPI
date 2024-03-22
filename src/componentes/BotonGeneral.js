import './css/botonGeneral.css';

const BotonGeneral = ({texto, idImportado, onClickImportado}) =>{
    let textoBtn = texto;
    const btnGeneral = <button id={idImportado} className="btnGeneral" onClick={onClickImportado}>{textoBtn} </button>

    return (
        <div>
            {btnGeneral}
        </div>
    )
}

export default BotonGeneral;