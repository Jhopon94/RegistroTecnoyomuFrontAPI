export default function FormatearNumero(precio){
    let precioFormateado = "";
    let auxCadena = precio.toString();
    //Al revés para que se facilite analizar donde van los puntos
    const palabraAlreves = PalabraAlreves(auxCadena);
    let listaLetrasAlreves = palabraAlreves.split('');
    let alrevesConPuntos = "";
    listaLetrasAlreves.map((caracter, indice) => {
        let indiceAjustado = indice + 1;
        //Si no es multiplo de 3
        if ((indiceAjustado % 3) != 0) alrevesConPuntos += caracter;
        //Si es multiplo de 3
        if ((indiceAjustado % 3) == 0) {
            //Eviatmos que quede un punto solito al final
            if (indiceAjustado != listaLetrasAlreves.length) {
                alrevesConPuntos += caracter + '.';
            } else {
                alrevesConPuntos += caracter;
            }
        }
    });
    //Volteamos la palabra de nuevo
    precioFormateado = PalabraAlreves(alrevesConPuntos);
    return precioFormateado;
}


function PalabraAlreves(cadena) {
    let palabraAlReves = "";
    for (let i = cadena.length; i >= 0; i--) {
        palabraAlReves = palabraAlReves + cadena.substring(i, i + 1);
    }
    return palabraAlReves;
}