class Persona {
    constructor(nombre, apellido, cedula) {
        
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.ceudula = cedula.toUpperCase();
    }
}              

let asistentes =JSON.parse(localStorage.getItem('personas'))


if (!asistentes) {
    asistentes =[]
}

const getAll = () => {
    return asistentes
}

const create = (newPersona) => {
    asistentes.push(newPersona)
}


const findOne = (cedula) => {
    cedula = cedula.toUpperCase()
    const personasLista = asistentes.find(persona => persona.cedula === cedula)
    return personasLista
}

const formAsistencia = document.getElementById('form-asistencia')
const inputNombre = document.getElementById('input-nombre')
const inputApellido = document.getElementById('input-apellido')
const inputCedula = document.getElementById('input-cedula')
const listaAsistentes = document.getElementById ('lista-asistentes')

const showPersonas = (personas) => {

    for (let i = 0; i < personas.length; i++) {
        console.log (personas [i].nombre)
        let itemPersona = document.createElement('li')
        itemPersona.textContent = `Nuevo registro, Nombre: ${ nombre} Apellido: ${ raza }, identificación ${cedula}`
        listaAsistentes.appendChild(itemPersona)
    }
}

showPersonas(asistentes)

formAsistencia.addEventListener('submit', (event) => {

        // Previene la actualización de la página
        event.preventDefault()

        const nombre = inputNombre.value
        const apellido = inputApellido.value
        const cedula =inputCedula.value
        
        // Nueva creación de registro en el array
        const persona = new Persona (nombre, apellido, cedula)
       
        const validacionCedula = findOne (cedula)
        if (validacionCedula) {
            alert (`Ya existe el usuario ${nombre} ${apellido} registrado con ese número de cédula`)
        } else create (persona)
        
        // Actualizo el localstorage del usuario
        localStorage.setItem('asistentes',JSON.stringify(asistentes))

        inputNombre.value = ''
        inputApellido.value = ''
        inputCedula.value = ''

        // Agregar el nuevo perro a la lista
        let itemPersona = document.createElement('li')
        itemPersona.textContent = `Nuevo registro, Nombre: ${nombre} Apellido: ${apellido}, identificación ${cedula}`

        listaAsistentes.appendChild(itemPersona)
    })
