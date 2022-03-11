import React, { useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/cards.css';
// import fondoCards from '../assets/img7.jpg';

function Cards(){
	const [datoCard, setDatoCard] = useState([999]);
	// cartas aleatorias
	const [array, setArray] = useState([])
	console.log(array);
	
	const [resultado, setResultado] = useState('');
	useEffect(() => {
		let arrays = [];
		for (let i = 0; i < 8; i++) {
			let numero = Math.round(Math.random() * 9000);
			arrays.push(numero)
		}
		setArray(arrays);
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`)
			setResultado(result);
		}

		traerCarta()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const mostrarDatos = (card) => {
		setDatoCard(card)
		console.log(datoCard);
	}

	return (
		<main className='main--cards'>
			<div className='main--cards--buton'>
				<button>Generar cartas aleatorias</button>
			</div>

			<div className='contenedor--cards'>
				<section className='cards'>
					{array.map((card) => (
						<div className='card'
							onClick={() => { mostrarDatos(card) }}
							key={card}>
							<figure className='card--figure'>
								<img src={resultado.data?.data[card].card_images[0].image_url}
									className='card--figure--img'
									alt={resultado.data?.data[card].name} />
							</figure>
						</div>
					))}
				</section>

				<section className='select--card'>
					<div className='select--card--div'>
						<figure className='select--card--figure'>
							<img src={resultado.data?.data[datoCard].card_images[0].image_url}
								className='select--card--figure--img'
								alt={resultado.data?.data[datoCard].name} />
						</figure>
						<button onClick={mostrarDatos}>Agregar</button>
					</div>

				</section>

				<br /><br /><br /><br />

			</div>


		</main>
	)
}


export default React.memo(Cards)