import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import "../App.css";

const LoginSalir = () => {
    
    const btn = () => {
        document.getElementById('mono').innerHTML= 'Aplicacion 🙊';
    };
    const {logout} = useAuth0();

    return (
        <button id='btn0' className='btn0' onClick={() => { btn(); logout()}}>
            Salir🥹
        </button>
    )
}

export default LoginSalir
