const CLIENT_ID = "544db08170194c919222022a5b35eac1"
const REDIRECT_URI = "http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function App() {
  

  return (
    <div className="App">
      <h4>Twicetify Login</h4>
       <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>

    </div>
  );
}

export default App;
