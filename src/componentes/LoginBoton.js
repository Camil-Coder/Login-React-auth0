import "../App.css";
import { useAuth0 } from '@auth0/auth0-react';

const LoginBoton = () => {

    const btn = () => {
        document.getElementById('mono').innerHTML= 'Aplicacion 🙈';
    };
    const { loginWithRedirect } = useAuth0();

    return <button className="btn1" onClick={() => {btn();loginWithRedirect()}}>Login❤️</button>;
};

export default LoginBoton;
