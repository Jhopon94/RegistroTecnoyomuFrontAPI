////////// BuscarObjetos ////////////////////////////
export async function Buscar(entidad){

    let urlEstablecida = EstablecerURL(entidad);

    let respuesta = await fetch(urlEstablecida, {
        "method" : 'GET',
        "headers" : {
            "content-Type" : 'application/json'
        }
    });

    return await respuesta.json();
}

///////// Eliminar objeto ///////////////////////
export async function Eliminar(id, entidad){

    let ListaObjetos = await Buscar(entidad);

    //Obtenemos el índice
    const indice = ListaObjetos.findIndex(objeto => objeto.id == id);

    ListaObjetos
}

//// Para saber en que sección se hace la petición///////
function EstablecerURL(entidad){ 

    let url = process.env.urlGeneral;
    
    if(entidad === 'clientes') url = url + 'Clientes';
    if(entidad === 'empleados') url = url + 'Empleados';
    if(entidad === 'equipos') url = url + 'Equipos';
    if(entidad === 'contabilidad') url = url + 'DatosContables';
    if(entidad === 'reparacion') url = url + 'Reparacion';
    if(entidad === 'inventario') url = url + 'Inventario';
    
    return url;
}
//////////////////////////////////////////////////////////////