export function BuscarCliente(){
    fetch('api/Clientes', {
        "method" : 'GET',
        "headers" : {
            "content-type" : 'application/json'
        }
    }).then(response => response.json())
        .then(json => {

        });
}

export function EliminarCliente(){
    
}

export function GuardarCliente(){
    
}