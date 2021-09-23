import React from 'react';
import Personaje from './Personaje';
import goku from './assets/img/goku.jpg';
import vegeta from './assets/img/vegeta.jpg';
import bills from './assets/img/bills.jpg';
import Gohan from './assets/img/Gohan.png';
import Bulma from './assets/img/Bulma.png';
import Whis from './assets/img/Whis.png';
import { Link } from "react-router-dom";


const personajes =[
    {
        "id" : 1,
        "nombre" : "Son Gokū",
        "edad" : 45,
        "foto" : <img src={goku} width="100" height="50"/>,
        "raza" : "Sayayin",
        "genero" : "Masculino"
    },
    {
        "id" : 2,
        "nombre" : "Vegeta",
        "edad" : 48,
        "foto" : <img src={vegeta} width="100" height="50"/>,
        "raza" : "Sayayin",
        "genero" : "Maculino"
    },
    {
        "id" : 3,
        "nombre" : "Bills",
        "edad" : 230256, 
        "foto" : <img src={bills} width="100" height="250"/>,
        "raza" : "Dios de la Destruccion",
        "genero" : "Maculino"
    },
    {
        "id" : 4,
        "nombre" : "Gohan",
        "edad" : 25,
        "foto" : <img src={Gohan} width="100" height="250"/>,
        "raza" : "Sayayin",
        "genero" : "Maculino"
    },
    {
        "id" : 5,
        "nombre" : "Bulma",
        "edad" : 19,
        "foto" : <img src={Bulma} width="100" height="200"/>,
        "raza" : "Terricola",
        "genero" : "Femenino"
    },
    {
        "id" : 6,
        "nombre" : "Whis",
        "edad" : 9999999,
        "foto" : <img src={Whis} width="100" height="250"/>,
        "raza" : "Angel",
        "genero" : "Masculino"
    }

]

const DetallePersonaje= ({match, location, history}) => {

    console.log(history)

    let personaje = personajes.filter(c => c.id === parseInt(match.params.id))[0]

    return (
        <>
            {
                personaje ? (
                    <div className="card col-md-4" style={{width: '18rem'}}>
                     <div className="card-body">
                        <h5 className="card-title"> {personaje.nombre }</h5>
                        <p className="card-text">Edad: {personaje.edad}</p>
                        <p className="card-text">Foto: {personaje.foto}</p>
                        <p className="card-text">Raza: {personaje.raza}</p>
                        <p className="card-text">Genero: {personaje.genero}</p>
                     </div>
                    </div>
                ):
                <h1>personaje no encontrado</h1>
            }

            <Link to={`/personajes`}>Ver Todos</Link>
        </>
    )
};

export default DetallePersonaje; 