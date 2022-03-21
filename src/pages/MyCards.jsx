import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/myCards.css';
import cartaReverse from '../images/reverseCard.jpg';
import Card from '../components/Card';


const MyCards = () => {
	let inicialState; 
	try {
		inicialState = localStorage.getItem('CARDS') ? JSON.parse(localStorage.getItem('CARDS')) :{
			cartas:[]
		}
	} catch (error) {
		console.error(error)
		inicialState = {
			cartas:[]
		}
	}
	const [cartas, setCartas] = useState(
		inicialState
		);
	const [resultado, setResultado] = useState([]);
	const [captura, setCaptura] = useState('');
	const [title, setTitle] = useState(false);
	useEffect(() => {
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
			setResultado(result);
		}
		traerCarta()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	let dato = JSON.parse(localStorage.getItem("CARDS"));
	const [card, setCard] = useState(dato.cartas);

	const eliminarCarta = (captura) => {
		setCard(card.filter(x => x !== Number(captura)))
		console.log(card);
	}

	const capturarCarta = e => {
		setCaptura(e.target.value)
	}
	// evito la recarga de la pagina
	function handleSubmit(e) {
		e.preventDefault();
	}

	const borrarCartas = () => {
		setCartas({
			cartas : []
		});
		setCard([])
		localStorage.setItem('CARDS', JSON.stringify(card));
		console.log(card);
	}
	return (
		<main className='mycards'>
			<h2 className='mycards--title'>Mi mazo personalizado</h2>
			{title ? <section className='cartas'>
				{card.map((carta, indice) => (
					<Fragment key={indice}>
						<Card carta={carta} resultado={resultado} cartaReverse={cartaReverse} indice={indice} />
					</Fragment>
				))}
			</section> : <button type='text' onClick={() => {
				setCard([])
				let dato = JSON.parse(localStorage.getItem("CARDS"));
				setCard(dato.cartas)
				if(card.length == 0){
					setTitle(false)
					alert("No tiene ninguna carta pendejo")
				}else{
					setTitle(true)
				}
			}}>Ver cartas</button> }

			<form className='form-mycards' onSubmit={handleSubmit}>
				<select onChange={capturarCarta}>
					<option value="">-- Seleccionar carta --</option>
					{title ? <>{card.map((carta) => (
						<option key={carta} value={carta}>{resultado.data?.data[carta].name}</option>
					))}</> : null}
				</select>
				<button onClick={() => { eliminarCarta(captura) }} >Eliminar carta</button>
				<button type='text' onClick={borrarCartas}>Vaciar mazo</button>
			</form>

		</main>
	)
}

export default MyCards