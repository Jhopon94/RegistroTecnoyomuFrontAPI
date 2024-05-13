import './css/reparacion.css'
import Cabezal from "./Cabezal";
import TablaReparacion from './TablaReparacion';

const Reparacion = () =>{
    return(
        <div id="contenedorPrincipalReparacion">
            <Cabezal titulo="Reparación" cerrarSesion={true}  atras={false}/>
            <div className='aux'>
            <TablaReparacion isOpen={true}/>
            </div>
        </div>
    )
}
export default Reparacion;