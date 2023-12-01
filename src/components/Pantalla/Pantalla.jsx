import React from 'react';



const Pantalla = ({pantalla,estilo}) => {
    return ( 
        <div className={estilo}>
            {pantalla?pantalla:null}
        </div>
     );
}
 
export default Pantalla;