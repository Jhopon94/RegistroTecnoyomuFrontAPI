//Url General
const url = process.env.REACT_APP_URLGENERAL + 'Equipos';

export function BuscarEquipo(){

}

export function EliminarEquipo(){
    
}

export async function GuardarEquipo(equipoYDetalles){
    console.log("vamos a registrar el equipo en: " + url);
    console.log(equipoYDetalles);
    try {
        let respCruda = await fetch(url, {
            "method": 'POST',
            "body": JSON.stringify(equipoYDetalles),
            "headers":{
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok) throw new Error('Error de API al registrar el equipo');
        const respJson = await respCruda.json();
        alert(respJson.mensaje);
    } catch (error) {
        console.log("Error de fetch al registrar el equipo por: " , error);
    }
}