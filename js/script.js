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

// OBTENER EL OBJETO DIALOG (VENTANA EMERGENTE)
const ventanaReserva = document.getElementById('ventanaReserva')

// FORMULARIO
const formReserva = document.forms['formReserva']

formReserva.addEventListener('submit', (evento) => {
    evento.preventDefault()

    // alert(formReserva['nombre'].value)
    let resumenReservaDialog = `<p>Reserva realizada a nombre de <span>${formReserva['nombre'].value} ${formReserva['apellido'].value}</span></p>`
    resumenReservaDialog += `<p>Adultos : <span>${formReserva['adultos'].value}</span> - Niños : <span>${formReserva['ninos'].value}</span></p>`
    resumenReservaDialog += `<p>Fecha de entrada : <span>${formReserva['entrada'].value}</span></p>`
    resumenReservaDialog += `<p>Fecha de salida : <span>${formReserva['salida'].value}</span></p>`
    resumenReservaDialog += `<p>Regimen de estancia : <span>${formReserva['estancia'].value}</span></p>`

    document.getElementById('resumenReserva').innerHTML = resumenReservaDialog

    ventanaReserva.showModal()

})