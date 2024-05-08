const url = process.env.REACT_APP_URLGENERAL + 'Usuarios'

export async function BuscarUsuarios() {
    console.log("Consultando usuarios desde: " + url);
    try {
        let respCruda = await fetch(url, {
            "method": 'GET',
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok) throw new Error('Error de api al consultar la lista de usuarios!');
        let respJson = await respCruda.json();
        return respJson;
    } catch (error) {
        console.log("Error de fetch por: " + error);
        alert("Error de Fetch");
        return null;
    }
}

export async function EditarUsuario(objetoUsuario) {
    console.log("Vamos a editar usuario en: " + url);
    try {
        let respCruda = await fetch(url, {
            "method": 'PUT',
            "body": JSON.stringify(objetoUsuario),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok) throw new Error('Error de API al editar el usuario!');
        let respTexto = await respCruda.text();
        alert(respTexto);
    } catch (error) {
        console.log("Error de fetch al editar al usaurio por: " + error);
        alert("Error de Fetch");
    }
}

export async function GuardarUsuario(objetoUsuario) {
    console.log("Vamos a registrar usuario en: " + url);
    try {
        let respCruda = await fetch(url, {
            "method": 'POST',
            "body": JSON.stringify(objetoUsuario),
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if (!respCruda.ok) throw new Error('Error de Api al registrar el usuario');
        let respTexto = await respCruda.text();
        alert(respTexto);
    } catch (error) {
        console.log("Error de fetch al registrar el usuario por: " + error);
    }
}

export async function EliminarUsuario(idEmpleado){
    const urlEliminar = url + "/" + idEmpleado;
    console.log( "Eliminando usuario en: " + urlEliminar);
    try {
        let respCruda = await fetch(urlEliminar, {
            "method": 'DELETE',
            "headers": {
                "Content-Type": 'application/json'
            }
        });
        if(!respCruda.ok)throw new Error('Error de API al eliminar usuario!');
        let respTexto = await respCruda.text();
        alert(respTexto);
    } catch (error) {
        console.log("Error de Fecth al eliminar el usaurio por: " + error);
        alert("Error de Fetch");
    }
}