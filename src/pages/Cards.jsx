import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/cards.css';
// import fondoCards from '../assets/img7.jpg';

const Cards = () => {
	let array = [];
	// cartas aleatorias
for(let i = 0; i < 8; i++){
	let numero = Math.round(Math.random()*9000);
	array.push(numero)
}
console.log(array);

	const [resultado, setResultado] = useState('');
	useEffect(() => {
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
			setResultado(result);
			console.log(resultado.data.data[400].name);
			console.log(resultado.data);
		}

		traerCarta()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<main>
			<section className='mazo'>
				<h3>Generar carta aleatoria</h3>

				<div className='mazo__cards'>
					<div className='mazo__cards--img'>
					</div>
				</div>
			</section>

			<section>

			<div className='card'>
					<h3>{resultado.data.data[999].name}</h3>
					<figure className='card--figure'>
						<img src={resultado.data.data[999].card_images[0].image_url} alt={resultado.data.data[999].name} />
					</figure>
				</div>



			</section>


		</main>
	)
}

export default Cards