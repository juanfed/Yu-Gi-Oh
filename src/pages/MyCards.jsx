import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/myCards.css';
import cartaReverse from '../images/reverseCard.jpg';
import Card from '../components/Card';
import { consultarMyCardsAction } from '../redux/action/consultarAction';

const MyCards = () => {
	let dispatch = useDispatch();
	let inicialState;

	// Hooks
	const { resultMy } = useSelector((state) => state.info);

	const [captura, setCaptura] = useState('');
	const [title, setTitle] = useState(false);

	try {
		inicialState = localStorage.getItem('CARDS') ? JSON.parse(localStorage.getItem('CARDS')) : {
			cartas: []
		}

	} catch (error) {
		console.error(error)
		inicialState = {
			cartas: []
		}
	}

	useEffect(() => {
		dispatch(consultarMyCardsAction());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [card, setCard] = useState(inicialState);

	const eliminarCarta = (captura) => {
		//		setCard(card.cartas.filter(x => x !== Number(captura)))
		let filtrado = card.cartas.filter(x => x !== Number(captura));
		console.log('FILTR', filtrado);
		setCard({ cartas: filtrado });

		localStorage.setItem('CARDS', JSON.stringify({ cartas: filtrado }));
	}

	const capturarCarta = e => {
		setCaptura(e.target.value)
	}
	// evito la recarga de la pagina
	function handleSubmit(e) {
		e.preventDefault();
	}

	const borrarCartas = () => {
		localStorage.setItem('CARDS', JSON.stringify({
			cartas: []
		}));
		setCard({ cartas: [] });
	}

	console.log(card.cartas);
	return (
		<main className='mycards'>
			<h2 className='mycards--title'>Mi mazo personalizado</h2>
			{title ? <section className='cartas'>
				{card.cartas.map((carta, indice) => (
					<Fragment key={indice}>
						<Card carta={carta} resultado={resultMy} cartaReverse={cartaReverse} indice={indice} />
					</Fragment>
				))}
			</section> : <div className='mycards--mostrar'>
				<button type='text' onClick={() => {
					setCard(inicialState)
					if (card.cartas.length === 0) {
						setTitle(false)
						alert("No tiene ninguna carta")
					} else {
						setTitle(true)
					}
				}}>Ver cartas</button>
			</div>}

			<form className='form-mycards' onSubmit={handleSubmit}>
				<select onChange={capturarCarta}>
					<option value="">-- Seleccionar carta --</option>
					{title ? <>{card.cartas.map((carta) => {
						return (
							<option key={carta} value={carta}>{resultMy[carta].name}</option>
						)
					})}</> : null}
				</select>
				<button onClick={() => { eliminarCarta(captura) }} >Eliminar carta</button>
				<button type='text' onClick={borrarCartas}>Vaciar mazo</button>
			</form>

		</main>
	)
}

export default MyCards