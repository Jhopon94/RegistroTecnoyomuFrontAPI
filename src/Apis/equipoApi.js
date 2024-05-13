//Url General
const url = process.env.REACT_APP_URLGENERAL + 'Equipos';

export async function BuscarEquiposIngresados(){
    const urlIngresados = url + '/ingresados';
    console.log("Vamos a listar los equipos registrados en: " + urlIngresados);
    try {
        let respCruda = await fetch(urlIngresados, {
            "method": 'GET',
            "headers":{
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok)throw new Error('Error de API al buscar equipos por');
        let respJson = await respCruda.json();
        return respJson;
    } catch (error) {
        console.log("Error de fetch al buscar los equipos por: ", error);
        return null;
    }
}

export async function BuscarEquiposEntregados(){
    const urlEntregados = url + '/entregados';
    console.log("Vamos a listar los equipos registrados en: " + urlEntregados);
    try {
        let respCruda = await fetch(urlEntregados, {
            "method": 'GET',
            "headers":{
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok)throw new Error('Error de API al buscar equipos por');
        let respJson = await respCruda.json();
        return respJson;
    } catch (error) {
        console.log("Error de fetch al buscar los equipos por: ", error);
        return null;
    }
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

export async function EditarEquipoIngresado(equipoYDetalles){
    console.log("Vamos a editar el equipo en: " + url);
    try {
        let respCruda = await fetch(url, {
            "method": 'PUT',
            "body": JSON.stringify(equipoYDetalles),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok)throw new Error('Error de API al editar el equipo');
        let respTexto = await respCruda.text();
        return respTexto;
    } catch (error) {
        console.log("Error de fetch al editar el equipo por: " , error);
        return "Error de Fetch al editar el equipo!";
    }
}

export async function MarcarEntregado(objeto){
    console.log("Vamos a marcar el equipo como entregado! ");
    try {
        let respCruda = await fetch(url, {
            "method": 'PUT',
            "body": JSON.stringify(objeto),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok)throw new Error('Error de API al marcar como entregado');
        let respTexto = await respCruda.text();
        return respTexto;
    } catch (error) {
        console.log("Error de fetch al marcar como entregado por: ", error);
        return null;
    }
}