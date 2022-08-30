
// Obtener el elemento donde escribimos para encriptar o desencriptar
let texto = document.getElementById("ingresar_datos");

// Obtener el elemento donde se muestra lo que encriptamos o desencriptamos
let bandeja = document.getElementById("mostrar");

/**
 * Encriptar o desencriptar el texto dependiendo del id del boton que llame la funcion
 * @param {HTMLElement} e 
 */
function codificando (e) {

    // Ocultar el mensaje de "mensaje no encontrado"
    document.getElementById("lateral").classList.add("cambio");

    // Crear un arreglo con las vocales y otro con la codificacion de las vocales en el mismo orden
    let vocales = ['e', 'i', 'a', 'o', 'u'], inversos = ['enter', 'imes', 'ai', 'ober', 'ufat'];

    // Obtener el texto que escribimos para encriptar o desencriptar
    let encriptando = texto.value;

    // Comprobar si el texto que escribimos no posee ninguna palabra en mayuscula o palabra con acento.
    if (!/[A-Z]+|[á-ú]+|[à-ù]+|[â-û]+|[ä-ü]+/.test(encriptando)) {

        // Obtener que vamos a buscar para reemplazar dependiendo del id del boton que llamo a la funcion
        let buscar = e.target.id == "encriptar" ? vocales : inversos;

        // Obtener el elemento que va a reemplazar a lo que buscamos dependiendo del id del boton que llamo a la funcion
        let reemplazar = e.target.id == "encriptar" ? inversos : vocales;
        
        // Recorrer todos los elementos de los arreglos
        for (let x = 0; x < 5; x++) {
            
            // Cambiar todas las ocurrencias del elemento que buscamos por el elemento que queremos poner
            encriptando = encriptando.replaceAll(buscar[x], reemplazar[x]);
        }

        // Mostrar el texto encriptado o desencriptado
        bandeja.innerText = encriptando;

        // Eliminar el texto que escribimos
        texto.value = "";
    }
}

// Encriptar el texto
document.getElementById("encriptar").onclick = codificando;

// Desencriptar el texto
document.getElementById("desencriptar").onclick = codificando;

// Copiar el texto encriptado o desencriptado
document.getElementById('copiar').onclick = _ => navigator.clipboard.writeText(bandeja.innerText);