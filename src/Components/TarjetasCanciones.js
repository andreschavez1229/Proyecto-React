import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Row} from 'react-bootstrap';

const TarjetasCanciones = () => {
  return (
    <Container>
        <Row className="mx-2 row row-cols-4 ">
        <Card>
        <Card.Img src= "#"/>
        <Card.Body>
        <Card.Title>Nombre del Álbum:</Card.Title>
        </Card.Body>
        </Card>
        </Row>
    </Container>
  )
}

export default TarjetasCanciones