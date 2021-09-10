import React from 'react';
import Estudiante from './Estudiante';

const estudiantes =[
    {
        "nombre" : "maria",
        "edad" : 23,
        "genero" : "F"
    },
    {
        "nombre" : "fernanda",
        "edad" : 20,
        "genero" : "F"
    },
    {
        "nombre" : "Calos",
        "edad" : 23,
        "genero" : "M"
    },
    {
        "nombre" : "Kike",
        "edad" : 20,
        "genero" : "M"
    },
    {
        "nombre" : "Sarita",
        "edad" : 19,
        "genero" : "F"
    },
    {
        "nombre" : "Yeritas",
        "edad" : 18,
        "genero" : "F"
    }

]

const Contenedor = () =>(

    <>
        {
            estudiantes.map(c => <Estudiante nombre={c.nombre}edad={c.edad}genero={c.genero} />)
        }
    </>
    
);

export default Contenedor;