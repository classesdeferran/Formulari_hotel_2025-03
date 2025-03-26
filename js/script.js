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

// CONTROL DE LAS FECHAS
const entrada = new Date()
let salida = new Date(entrada)
salida.setDate(salida.getDate() + 1)
// alert(entrada.toISOString())

const entradaString = entrada.toISOString().split('T')[0]
let salidaString = salida.toISOString().split('T')[0]

const entradaHTML = document.getElementById('entrada')
entradaHTML.setAttribute('value', entradaString)
entradaHTML.setAttribute('min', entradaString)
const salidaHTML = document.getElementById('salida')
salidaHTML.setAttribute('value', salidaString)
salidaHTML.setAttribute('min', salidaString)

entradaHTML.addEventListener('change', () => {
    salida = new Date(entradaHTML.value)
    salida.setDate(salida.getDate() + 1)
    salidaString = salida.toISOString().split('T')[0]
    salidaHTML.setAttribute('value', salidaString)
    salidaHTML.setAttribute('min', salidaString)
})


