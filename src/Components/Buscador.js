import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, } from 'react-bootstrap';
import '@fontsource/roboto'
import { useState, useEffect } from 'react';
const CLIENT_ID = "544db08170194c919222022a5b35eac1"
const CLIENT_SECRET = "414463376b2d4a8db5138eb97fb73a64"



const Buscador = () => {
    const [searchInput, setSearchInput] = useState(""); //Aqui ponemos nuestro setter y nuestro getter con un estado inicial que es un string vacio
    const [accessToken, setAccessToken] = useState(""); 
    //API ´Access token
    useEffect(() => {
        var authParemeters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
}
fetch("http://accounts.spotify.com/api/token", authParemeters)   
    .then(result => result.json())
    // .then(data => console.log(data.access_token))
    //Este clg nos devuelve en consola unicamente nuestro access token y posteriormente la guardamos con nuestro setter
    .then(data => setAccessToken(data.access_token))
    }, []) 


async function search() {
    console.log("Buscando a " + searchInput);

    //Peticion del tipo GET para obtener el ID del Artista
    var artistParameters = {
        method: 'GET',
        headers: {
                 'Content-Type': 'application/json',
                 'Authorization': 'Bearer ' + accessToken
                }
        }
var artistID = await fetch ('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters) 
    .then(response => response.json())
    .then(data => console.log(data))
}


return (
    <>
    <div className='Buscador'>
        <Container>
            <InputGroup className='mb-3' size='lg'>
                <FormControl
                    placeholder='Ingresa el nombre de un artista'
                    type='input'
                    onKeyPress={event => {
                        if (event.key == "Enter") {
                            search();
                        }
                        
                        //Aqui detecta con un clg que se envia un evento presionando enter o más abajo presionando el boton de buscar
                    }}
                    onChange={event => setSearchInput(event.target.value)}

                />
                <Button onClick={search}>
                    Buscar
                </Button>




            </InputGroup>

        </Container>
    </div>
    </>
)
}

export default Buscador