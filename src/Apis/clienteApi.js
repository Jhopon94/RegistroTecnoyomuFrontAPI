import ClaseCliente from "../clases/cliente";

//Url General
const url = process.env.REACT_APP_URLGENERAL + 'Clientes';


/////////// GET //////////////////////////////////
export async function BuscarClientes() {

    console.log("a buscar clientes en: " + url);
    try {
        //Obtenemos el objeto json de la api
        let respuestaGet = await fetch(url, {
            "method": 'GET',
            "headers": {
                "Content-Type": 'application/json'
            }
        });

        //Captura de error
        if (!respuestaGet.ok) {
            throw new Error('Error de fetch al obtener la lista de clientes');
        }
        //Convertimos a json el resultado y devolvemos
        let respuesta = await respuestaGet.json();
        //Creamos una lista para los clientes encontrados con el mismo tamaño de la lista obtenida
        let listaClientes = new Array(respuesta.length);

        //Recorremos a lista para ir convirtiendo cada objeto en cliente
        respuesta.forEach((element, index) => {
            let cliente = new ClaseCliente();
            cliente.nombre = element.nombre;
            cliente.id = element.id;
            cliente.celular = element.celular;
            cliente.correo = element.correo;
            cliente.direccion = element.direccion;
            cliente.fechaRegistro = element.fechaRegistro;
            cliente.serviciosTomados = element.serviciosTomados;

            //Añadimos el objeto cliente a la lista de clientes.
            listaClientes[index] = cliente;
        });

        //Devolvemos la lsita ya llenita
        return listaClientes;

    } catch (error) {
        console.error("Error al obtener lista de clientes por: " , error);
        alert("Error de Fetch");
        return null;
    }
}


////////////////// POST ///////////////////////////////
export async function GuardarCliente(objetoCliente) {

    console.log("a registrar cliente en: " + url);
    try {
        let respuestaCruda = await fetch(url, {
            "method": 'POST',
            "body": JSON.stringify(objetoCliente),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respuestaCruda.ok) throw new Error('No se pudo obtener la lista de clientes, error de API!');
        let respuestaTexto = await respuestaCruda.text();
        console.log(respuestaTexto);
        alert(respuestaTexto);
    } catch (error) {
        console.log("Error de fetch al registrar al cliente por: " , error);
        alert("Error de Fetch");
    }
}


/////////////////// PUT ///////////////////////
export async function EditarCliente(objetoCliente){
    console.log("Vamos  editar cliente en : " + url);
    try {
        let respuestaCruda = await fetch(url, {
            "method": 'PUT',
            "body": JSON.stringify(objetoCliente),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respuestaCruda.ok) throw new Error('Error de API al editar cliente!');
        let respuestaTexto = await respuestaCruda.text();
        console.log(respuestaTexto.PromiseResult);
        alert(respuestaTexto);
    } catch (error) {
        console.log("Error de fetch al editar al cliente por: " , error);
        alert("Error de Fetch");
    }
}
