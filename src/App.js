import './App.css';
import LoginBoton from "./componentes/LoginBoton";
import LoginSalir from "./componentes/LoginSalir";
import Perfil from "./componentes/Perfil";
import Fondo from "./componentes/Fondo";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return (<h1></h1>);
  return (
    <div className="App">
      <div className='container'>
        <h1 id='mono'>Aplicacion🐵</h1>
        {isAuthenticated ? <div> <LoginSalir /></div> : <LoginBoton /> }
      </div>
        {isAuthenticated ? <Perfil /> : <Fondo/> }
    </div>
  );
}

export default App;
