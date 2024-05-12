const url = process.env.REACT_APP_URLGENERAL + 'Detalles';

export async function BuscarDetalles(idEquipo){
    const urlEspecifica = url + "/" + idEquipo
    console.log("Vamos a buscar los detalles del " + idEquipo + " en: " + urlEspecifica);
    try {
        let respCruda = await fetch(urlEspecifica, {
            "method": 'GET',
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok) throw new Error('Error de API al obtener los detalles dele equipo');
        let respJson = respCruda.json();
        return respJson
    } catch (error) {
        console.log("Error de fetch por: ", error);
        alert("Error de fetch al obtener detalles");
        return null;
    }
}

export function EliminarDetalles(){
    
}

export function GuardarDetalles(){
    
}