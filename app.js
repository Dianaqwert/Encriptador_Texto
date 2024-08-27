// Función para encriptar el texto
function encriptarTexto(texto) {
    const reglasEncriptacion = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    return texto.replace(/[aeiou]/g, letra => reglasEncriptacion[letra]);
}

// Función para desencriptar el texto
function desencriptarTexto(textoEncriptado) {
    const reglasDesencriptacion = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    
    return textoEncriptado.replace(/ai|enter|imes|ober|ufat/g, cadena => reglasDesencriptacion[cadena]);
}

// Función para validar el texto
function esTextoValido(texto) {
    // Verificar si el texto contiene solo letras minúsculas
    const regex = /^[a-z]+$/;
    return regex.test(texto);
}

// Función para manejar la encriptación/desencriptación
function manejarTexto() {
    const texto = document.querySelector('input[type="text"]').value;
    const mensaje = document.querySelector('.message');
    
    if (texto === "") {
        mensaje.innerHTML = "Por favor, ingresa un texto.";
        return;
    }
    
    if (!esTextoValido(texto)) {
        mensaje.innerHTML = "Texto inválido. Ingresa solo letras minúsculas sin acentos ni caracteres especiales.";
        return;
    }

    const esEncriptar = this.classList.contains('button-encrypt');
    const resultado = esEncriptar ? encriptarTexto(texto) : desencriptarTexto(texto);
    
    mensaje.innerHTML = `Resultado: ${resultado}`;
}

// Asignar eventos a los botones
document.querySelector('.button-encrypt').addEventListener('click', manejarTexto);
document.querySelector('.button-decrypt').addEventListener('click', manejarTexto);
