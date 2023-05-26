import React, { useState } from 'react'

export const PrimerComponente = () => {

   // let nombre = "Jose";
    let web = "josemedinat.com";

    //Este es el useState de nombre
    const [nombre, setNombre] = useState("Jose");


   // Esta funcion cambia el nombre del parrafo
    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre)
    }

    return (
        <div>

            <h1>Primer componente</h1>
            <p>{nombre}</p>

            <input type="text" onChange={e=> cambiarNombre(e.target.value) } placeholder/>

            <button onClick={e => cambiarNombre("Jose Medina") }>Cambiar nombre</button>

        </div>
        )
}