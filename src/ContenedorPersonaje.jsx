import React from 'react';
import Estudiante from './Estudiante';
import Personaje from './Personaje';
import goku from './assets/img/goku.jpg';
import vegeta from './assets/img/vegeta.jpg';
import bills from './assets/img/bills.jpg';
import Gohan from './assets/img/Gohan.png';
import Bulma from './assets/img/Bulma.png';
import Whis from './assets/img/Whis.png';
import Formulario from './Formulario';

const personajes =[
    {
        "nombre" : "Son Gokū",
        "edad" : 45,
        "foto" : <img src={goku} width="100" height="50"/>,
        "raza" : "Sayayin",
        "genero" : "Masculino"
    },
    {
        "nombre" : "Vegeta",
        "edad" : 48,
        "foto" : <img src={vegeta} width="100" height="50"/>,
        "raza" : "Sayayin",
        "genero" : "Maculino"
    },
    {
        "nombre" : "Bills",
        "edad" : 230256, 
        "foto" : <img src={bills} width="100" height="250"/>,
        "raza" : "Dios de la Destruccion",
        "genero" : "Maculino"
    },
    {
        "nombre" : "Gohan",
        "edad" : 25,
        "foto" : <img src={Gohan} width="100" height="250"/>,
        "raza" : "Sayayin",
        "genero" : "Maculino"
    },
    {
        "nombre" : "Bulma",
        "edad" : 19,
        "foto" : <img src={Bulma} width="100" height="200"/>,
        "raza" : "Terricola",
        "genero" : "Femenino"
    },
    {
        "nombre" : "Whis",
        "edad" : 9999999,
        "foto" : <img src={Whis} width="100" height="250"/>,
        "raza" : "Angel",
        "genero" : "Masculino"
    }

]

const ContenedorPersonaje = () =>(

    <>
        {
           // personajes.map(c => <Personaje nombre={c.nombre}edad={c.edad}foto={c.foto}raza={c.raza}genero={c.genero} />)
        }
        <Formulario/>
    </>
    
);

export default ContenedorPersonaje;