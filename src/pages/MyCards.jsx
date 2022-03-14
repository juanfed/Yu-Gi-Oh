import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/myCards.css';
import cartaReverse from '../images/reverseCard.jpg';


const MyCards = () => {
	const mostrarCarta = [false, false, false, false, false, false, false, false, false];
	const cartas = [1, 2, 3, 4, 5, 6, 7];
	const [resultado, setResultado] = useState([]);

	useEffect(() => {
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
			setResultado(result);
		}
		traerCarta()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const mostrar = (carta) => {
		if (mostrarCarta[carta]) {
			mostrarCarta[carta] = false
		} else {
			mostrarCarta[carta] = true
		}

		console.log(mostrarCarta);
	}

	return (
		<main className='mycards'>
			<h2 className='mycards--title'>Mi mazo personalizado</h2>
			<section className='cartas'>
				{cartas.map((carta) => (
					<div className={`carta${carta} carta`} onClick={() => { mostrar(carta) }}
						key={carta}>
						{mostrarCarta[carta] ? <img src={resultado.data?.data[carta].card_images[0].image_url} alt="carta 1" /> :
							<img src={cartaReverse} alt="carta 1" />  }
					</div>
				))}
			</section>
		</main>
	)
}

export default MyCards