import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import '@fontsource/roboto'
import Buscador from './Components/Buscador';
import TarjetasCanciones from './Components/TarjetasCanciones';
import NavBar from './Components/NavBar';
const CLIENT_ID = "544db08170194c919222022a5b35eac1"
const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"



function App() {
  return (
   
    <Container>
       <NavBar/>
         <br/>
      <h4>Twicetify Login</h4>
      <Button variant="success" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</Button>{' '}
        <br/>
          <br/>
      <Buscador/>

      <TarjetasCanciones/>

    </Container>
    
    
  );
}




export default App;
