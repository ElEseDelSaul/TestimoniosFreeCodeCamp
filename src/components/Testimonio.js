import React from 'react';
import '../styleSheet/testimonio.css'

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img 
            className="img-testimonio" 
            src={ require(`../images/${props.imagen}.png`) }
            alt={`Fotografia de ${props.nombre}`} title={`Fotografia de ${props.nombre}`}/>
            <div className="contenido">
                <p className="nombre-testimonio"> <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className="cargo-testimonio"> {props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio"> "{props.testimonio}" </p>
            </div>
        </div>
    );
}

export default Testimonio;