import { useState } from 'react';
import './css/botonForm.css'

function BotonForm({onClickImportado, textoBoton, idImportado, classNameImportado, idImportadoDiv, disabledImportado}){
    
    const handleEmptyClick = () => {
        // No hay acciones aquí
      };
    
    return(
        <div id={idImportadoDiv}>
            <button id={idImportado} onClick={onClickImportado || handleEmptyClick} className={classNameImportado} disabled={disabledImportado}>{textoBoton}</button>
        </div>
    );
}
export default BotonForm;