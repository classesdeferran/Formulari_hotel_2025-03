const nombreHTML = document.getElementById('nombre')
const apellidoHTML = document.getElementById('apellido')

nombreHTML.addEventListener('change', () => {
    let nombre = nombreHTML.value.trim()
    // validación de los espacios
    if (nombre.length < 2 ) {
        document.getElementById('errorNombre').textContent = "Hay que introducir un nombre válido"
    }
})

apellidoHTML.addEventListener('change', () => {
    let apellido = apellidoHTML.value.trim()
    // validación de los espacios
    if (apellido.length < 2 ) {
        document.getElementById('errorApellido').textContent = "Hay que introducir un texto de al menos dos caracteres"
    }
})
