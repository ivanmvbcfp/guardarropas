import React, {Fragment, useState} from 'react'
// Importo los componentes de Bootstrap que utilizare
import {Form, Button, Alert} from 'react-bootstrap'
// Importo uuid
import { v4 as uuidv4 } from 'uuid'
// Importamos Prop-Types para documentar el componente
import PropTypes from 'prop-types'

const Formulario = ({nuevaPertenencia}) => {

    // STATE para agregar el cliente
    const [cliente, setCliente] = useState({
        nombre: '',
        dni: '',
        telefono: '',
        objeto: '',
        box: '',
        observaciones: '',
        hora: ''
    })

    // STATE para error de validacion
    const [error, setError] = useState(false)

    // Función handleChange
    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value 
        })
    }

    // Función handleSubmit
    const handleSubmit = e => {

        // Para evitar que el submit ejecute la accion por default de enviar el formulario y 
        // nos genere el query string en el navegador, utilizamos un preventDefault
        e.preventDefault()

        // Validamos los datos
        if(nombre.trim() === '' || dni.trim() === '' || objeto.trim() === '' || box.trim() === ''
        || hora.trim() === '') {
            setError(true)
            return
        }

        // Eliminamos el mensaje de Error en caso de que la validación sea exitosa
        setError(false)

        // Asignamos un ID a cada cliente con la libreria npm uuid
        cliente.id = uuidv4()
        console.log(cliente)

        // Agregamos las pertenencias y las colocamos en el State
        nuevaPertenencia(cliente)

        // Reiniciamos el form
        setCliente({
            nombre: '',
            dni: '',
            telefono: '',
            objeto: '',
            box: '',
            observaciones: '',
            hora: ''
        })
    }

    // Extraigo los valores del state para evitar poner cliente.nombre, cliente.dni etc
    const {nombre, dni, telefono, objeto, box, observaciones, hora} = cliente


    return(
        <Fragment>
        <h1>Datos del cliente</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Nombre y Apellido *</Form.Label>
                <Form.Control
                name='nombre'
                type='text'
                onChange={handleChange}
                value={nombre}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>DNI *</Form.Label>
                <Form.Control 
                name='dni' 
                type='number' 
                onChange={handleChange}
                value={dni}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                name='telefono' 
                type='tel' 
                onChange={handleChange}
                value={telefono}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Objeto *</Form.Label>
                <Form.Control 
                name='objeto' 
                type='text' 
                onChange={handleChange}
                value={objeto}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Box *</Form.Label>
                <Form.Control 
                name='box' 
                type='number' 
                onChange={handleChange}
                value={box}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Observaciones</Form.Label>
                <Form.Control 
                name='observaciones' 
                as='textarea' 
                rows='3' 
                onChange={handleChange}
                value={observaciones}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Hora de carga *</Form.Label>
                <Form.Control 
                name='hora' 
                type='time' 
                onChange={handleChange}
                value={hora}
                />
            </Form.Group>
            {/* Ternario para alerta de validacion setError */}
            {error ? <Alert variant='primary'>Todos los campos con * son obligatorios</Alert> : null}
            <Button variant='primary' type='submit' block>
                Guardar
            </Button>
        </Form>
        </Fragment>
    )
}

// Documentamos el componente
Formulario.propTypes = {
    nuevaPertenencia: PropTypes.func.isRequired
}

export default Formulario