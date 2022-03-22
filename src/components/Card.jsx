import React, {useState} from 'react';

const Card = ({carta, cartaReverse, resultado, indice}) => {
    const [mostrar, setMostrar] = useState(false);

    const mostrarCarta = () =>{
        if(mostrar){
            setMostrar(false);
        }else{
            setMostrar(true);
        }
    }
    return (
        <div className={`carta${indice} carta`} onClick={mostrarCarta}>
            {mostrar ? <img src={resultado[carta].card_images[0].image_url} alt="carta 1" /> :
                <img src={cartaReverse} alt="carta 1" />}
        </div>
    )
}

export default Card