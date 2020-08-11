import React, {Fragment} from 'react'
// Importo los componentes de Bootstrap que voy a utilizar
import {Accordion, Card, Button, ListGroup} from 'react-bootstrap'
// Importamos Prop-Types para documentar el componente
import PropTypes from 'prop-types'

const Pertenencia = ({pertenencia, liberarPertenencia}) => {
    // Extraigo los valores del state para evitar poner cliente.nombre, cliente.dni etc
    const {nombre, dni, telefono, objeto, box, observaciones, hora} = pertenencia
    return (
        <Fragment>
            <Accordion defaultActiveKey='0'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant='text' eventKey='1'>
                            Cliente: {nombre} - Box: {box}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>DNI: {dni}</ListGroup.Item>
                                <ListGroup.Item>Teléfono: {telefono}</ListGroup.Item>
                                <ListGroup.Item>Pertenencia: {objeto}</ListGroup.Item>
                                <ListGroup.Item>Box: {box}</ListGroup.Item>
                                <ListGroup.Item>Observaciones: {observaciones}</ListGroup.Item>
                                <ListGroup.Item>Hora: {hora}</ListGroup.Item>
                                {/* Coloco liberar pertenencia dentro de una arrow para que espere el evento, sino se ejecuta la funcion 
                                apenas se carga el componente */}
                                <Button variant='danger' onClick={() => liberarPertenencia(pertenencia.id)}>Liberar &times;</Button>
                            </ListGroup>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Fragment>
    )
}

// Documentamos el componente
Pertenencia.propTypes = {
    pertenencia: PropTypes.object.isRequired,
    liberarPertenencia: PropTypes.func.isRequired
}

export default Pertenencia