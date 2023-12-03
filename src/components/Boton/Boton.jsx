import React from 'react';


const Boton = ({oper,boton,botonOper,num,clickBoton,cambioOperador,onOff}) => {

   
    return (

        <button className={boton?boton:botonOper} id={oper?oper:num} onClick={clickBoton || onOff?clickBoton||onOff:cambioOperador}>
           {oper?oper:num}
        </button>
      );
}
 
export default Boton;

