


export default function ListaFiltrada(buscarPor, listaCompleta, criterio) {

    //if (buscarPor === 'nombre') return FiltrarNombre(listaCompleta, criterio);
    if (buscarPor === 'cedulaCliente') return FiltrarCedulaClienteEquipo(listaCompleta, criterio);
    if (buscarPor === 'estadoEquipo') return FiltrarEstadoEquipo(listaCompleta, criterio);
    if (buscarPor === 'modeloEquipo') return FiltrarModeloEquipo(listaCompleta, criterio);
    if (buscarPor === 'nombreEmpleado') return FiltrarNombreEmpleado(listaCompleta, criterio);
    if (buscarPor === 'cedulaEmpleado') return FiltrarCedulaEmpleado(listaCompleta, criterio);
    if (buscarPor === 'cargoEmpleado') return FiltrarCargoEmpleado(listaCompleta, criterio);

    //Devuelve la lista filtrada
}


const FiltrarNombreEmpleado = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.nombre.match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}

const FiltrarCargoEmpleado = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.cargo.match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}

const FiltrarCedulaClienteEquipo = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.idCliente.toString().match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}

const FiltrarCedulaEmpleado = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.id.toString().match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}

const FiltrarEstadoEquipo = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.estadoEquipo.match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}

const FiltrarModeloEquipo = (listaCompleta, criterio) => {
    let listaAux = [];
    //Contruir el parámetro regx / texto / i
    const textoRegx = new RegExp(criterio, 'i');
    listaCompleta.forEach(objeto => {
        if (objeto.modelo.match(textoRegx)) {
            listaAux.push(objeto);
        }
    });
    return listaAux;
}