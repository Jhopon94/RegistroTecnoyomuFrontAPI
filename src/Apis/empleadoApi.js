import ClaseEmpleado from '../clases/empleado';
const url = process.env.REACT_APP_URLGENERAL + 'Empleados';
const urlMarcarInactivo = process.env.REACT_APP_URLGENERAL + 'EmpleadoOff';

export async function BuscarEmpleados() {
    console.log("Vamos a obtener lista de empleados desde: " + url);
    try {
        let respuestaCruda = await fetch(url, {
            "method": 'GET',
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if (!respuestaCruda.ok) throw new Error('Error de API al obtener lista de empleados');
        let respuestaJson = await respuestaCruda.json();
        //Convertimos a lista de empleados
        let listaEmpleados = new Array(respuestaJson.length);
        respuestaJson.forEach((empleado, index) => {
            let empleadoAux = new ClaseEmpleado();
            empleadoAux.id = empleado.id;
            empleadoAux.nombre = empleado.nombre;
            empleadoAux.cargo = empleado.cargo;
            empleadoAux.celular = empleado.celular;
            empleadoAux.correo = empleado.correo;
            empleadoAux.direccion = empleado.direccion;
            empleadoAux.fechaRegistro = empleado.fechaRegistro;
            empleadoAux.disponibleParaUsuario = empleado.disponibleParaUsuario;
            empleadoAux.activo = empleado.activo;
            empleadoAux.foto = empleado.foto;
            //Agragamos el empleado a la lista
            listaEmpleados[index] = empleadoAux;
        });
        return listaEmpleados;
    } catch (error) {
        console.log('Error de Fetch al obtener la lista de empleados por: ' + error);
        alert('Error de Fetch');
        return null;
    }
}


export async function GuardarEmpleado(objetoEmpleado) {
    console.log('Procedemos a registrar empleado en: ' + url);

    try {
        let respuestaCruda = await fetch(url, {
            "method": 'POST',
            "body": JSON.stringify(objetoEmpleado),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        let respuestaTexto = await respuestaCruda.text();
        alert(respuestaTexto);
    } catch (error) {
        let msjError = "Error de fetch al registrar empleado por: " + error;
        console.log(msjError);
        alert("Error de Fetch");
    }

}
export async function MarcarInactivo(cedula) {
    console.log("Marcando al empleado como inactivo en: " + urlMarcarInactivo);
    try {
        let respuestaCruda = await fetch(urlMarcarInactivo, {
            "method": 'PUT',
            "body": cedula,
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if (!respuestaCruda.ok) throw new Error('Error de API al desactivar empleado');
        let respuestaTexto = await respuestaCruda.text();
        alert(respuestaTexto);
    } catch (error) {
        console.log("Error de fetch al desactivar empleado por: " + error);
        alert("Error de fetch");
    }
}
export async function EditarEmpleado(objetoEmpleado) {
    console.log("Vamos a editar al empleado en: " + url);
    console.log(objetoEmpleado);
    try {
        let respuestaCruda = await fetch(url, {
            "method": 'PUT',
            "body": JSON.stringify(objetoEmpleado),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if (!respuestaCruda.ok) throw new Error('Error de API al editar al empleado');
        let respuestaTexto = await respuestaCruda.text();
        alert(respuestaTexto);
    } catch (e) {
        console.log("Error de Fetch al editar empleado por: " + e);
    }
}