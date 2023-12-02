import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import  "../App.css";


const Perfil = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className='Boxperfil'>
            <img src = {user.picture} alt = {user.name} />
            <h2> {user.nickname} </h2>
            <p> {user.email} </p>
            <JSONPretty data={user} />
        </div>
        )
    )
};

export default Perfil
