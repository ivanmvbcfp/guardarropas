import React, {Fragment, useState, useEffect} from 'react';
// Importo los componentes que utilizaré de Bootstrap
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap'
// Importo el componente Formulario
import Formulario from './Components/Formulario'
// Importo el componente Pertenencia
import Pertenencia from './Components/Pertenencia'

function App() {

  // LocalStorage para guardar las pertenencias
  let pertenenciasStorage = JSON.parse(localStorage.getItem('pertenencias'))
  if(!pertenenciasStorage) {
    pertenenciasStorage = []
  }

    // STATE para las pertenencias de los clientes
    const [pertenencias, setPertenencias] = useState(pertenenciasStorage)

    // STATE para el search
    const [search, setSearch] = useState([])

  // useEffect para cuando el STATE cambie
  useEffect(() => {
    if(pertenenciasStorage) {
      localStorage.setItem('pertenencias', JSON.stringify(pertenencias))
    }else {
      localStorage.setItem('pertenencias', JSON.stringify([]))
    }
  }, [pertenencias])

  // Función para agregar las pertenencias 
  const nuevaPertenencia = pertenencia => {
    setPertenencias([
      ...pertenencias,
      pertenencia
    ])
  }

  // Función para liberar pertenencias
  const liberarPertenencia = id => {
    const liberarPertencias = pertenencias.filter(pertenencia => pertenencia.id !== id)
    setPertenencias(liberarPertencias)
  }

  // Función search
  const searchFilter = pertenencias.filter(pertenencia => (
    pertenencia.nombre.toLowerCase().includes(search)
  ))

  return (
<Fragment>
    <Container>
      <h1 style={{textAlign: 'center'}}>Guardarropas</h1>
      <hr></hr>
      <Row>
        <Col>
        <Formulario 
        nuevaPertenencia={nuevaPertenencia}
        />
        </Col>
        <Col>
          {/* Titulo */}
          <h1>Listado de clientes</h1>
          {/* Search */}
          <InputGroup>
          <FormControl 
          placeholder='Buscar clientes'
          onChange={e => setSearch(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant='primary'>Buscar</Button>
          </InputGroup.Append>
          </InputGroup>
          <hr></hr>
          {searchFilter.map(pertenencia => (
            <Pertenencia
            key={pertenencia.id}
            pertenencia={pertenencia}
            liberarPertenencia={liberarPertenencia}
            />
          ))}
        </Col>
      </Row>
    </Container>
</Fragment>
  );
}

export default App;
