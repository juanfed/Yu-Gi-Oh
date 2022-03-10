import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/cards.css';
// import fondoCards from '../assets/img7.jpg';

const Cards = () => {
	let array = [];
	// cartas aleatorias
	for (let i = 0; i < 8; i++) {
		let numero = Math.round(Math.random() * 9000);
		array.push(numero)
	}
	console.log(array);

	const [resultado, setResultado] = useState('');
	useEffect(() => {
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
			setResultado(result);
		}

		traerCarta()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<main className='main--cards'>
			<h3>Mis cartas</h3>


			<section className='cards'>
				{array.map((card) => (
					<div className='card'
					key={card}>
						<figure className='card--figure'>
							<img src={resultado.data?.data[card].card_images[0].image_url}
								
								alt={resultado.data?.data[card].name} />
						</figure>
					</div>
				))}
			</section>


		</main>
	)
}

export default Cards