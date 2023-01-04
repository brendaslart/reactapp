import React from 'react'

export const PrimerComponente = () => {

    let nombre = "Brenda Solis"
    let cursos =[
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"

    ]

    return (
        <div>
            <h1>Mi primer Componente</h1>
            <p> Este es un texto en mi componente</p>
            <p>Mi nombre es: {nombre} </p>

            <h1>Cursos </h1>
            <ul>
            {
            cursos.map(cursos =>{return (<li>
                cursos
            </li>) })

            }

            
        </ul>
        </div>
        
    )
}

