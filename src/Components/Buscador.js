import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row,} from 'react-bootstrap';
import '@fontsource/roboto'
import { useState, useEffect } from 'react';


const Buscador = () => {
    const [searchInput, setSearchInput] = useState(""); //Aqui ponemos nuestro setter y nuestro getter con un estado inicial que es un string vacio
    useEffect (() => {
         
    })



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
                            //Aqui detecta con un clg que se envia un evento presionando enter o más abajo presionando el boton de buscar
                        }}
                        onChange={event => setSearchInput(event.target.value)}

                        />
                        <Button onClick={() => {console.log("Presionaste el botón buscar")}}>
                            Buscar
                        </Button> 

                            


                </InputGroup>

            </Container>
        </div>
    )
}

export default Buscador
