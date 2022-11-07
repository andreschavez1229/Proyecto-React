import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import '@fontsource/roboto'
const Buscador = () => {
    return (

        <div className='Buscador'>
            <Container>
                <InputGroup className='mb-3' size='lg'>
                    <FormControl
                        placeholder='Ingresa el nombre de un artista'
                        type='input'
                        onKeyPress={ event => {
                            if (event.key === "Enter");
                            console.log("Presionaste enter"); 
                        }}

                    />
                </InputGroup>

            </Container>
        </div>
    )
}

export default Buscador
