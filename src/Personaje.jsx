import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Personaje = ({nombre,edad,foto,raza,genero,id}) =>(

    <>
        <div className="card col-md-4" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title"> {nombre }</h5>
            <p className="card-text">Edad: {edad}</p>
            <p className="card-text">Foto: {foto}</p>
            <p className="card-text">Raza: {raza}</p>
            <p className="card-text">Genero: {genero}</p>
            <p><Link to={`/personajes/${id}`}>Detalle</Link> </p>
            </div>
        </div>
    </>
    
);

Personaje.prototype = {

    nombre: PropTypes.string,
    edad: PropTypes.number,
    foto: PropTypes.symbol,
    raza: PropTypes.string,
    genero: PropTypes.string,
    id: PropTypes.number,

}

Personaje.defaultProps = {

    nombre: "nombre no asignado",
    edad: 0,
    foto: "foto no asignada",
    raza: "raza no asignada",
    genero: "Genero no Asigando",
    id: "Id no Asigando",
}
    
export default Personaje;