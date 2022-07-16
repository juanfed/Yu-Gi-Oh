import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/cards.css';
import carta from '../images/reverseCard.jpg';
import { consultarAction } from '../redux/action/consultarAction';

function Cards() {
	let dispatch = useDispatch();
	let inicialState; 

	// Redux
	const { result } = useSelector((state) => state.info);

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
	const [misCards, setMisCards] = useState(
		inicialState
		);

	const [datoCard, setDatoCard] = useState();
	const [array, setArray] = useState([])

	const consultar = () => {
		let arrays = [];
		for (let i = 0; i < 12; i++) {
			let numero = Math.round(Math.random() * 9999);
			arrays.push(numero)
		}
		setArray(arrays);
	}
	useEffect(() => {
		console.log(misCards);
		localStorage.setItem('CARDS', JSON.stringify(misCards));
	}, [misCards]);


	useEffect(() => {
		dispatch(consultarAction());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const mostrarDatos = (card) => {
		setDatoCard(card)
	}
	const agregarCard = (datoCard) => {
		if(misCards.cartas === undefined){
			setMisCards({
				cartas : []
			})
		}else if(misCards.cartas.length <= 6){
			setMisCards({ cartas: [...misCards.cartas, datoCard] });
		}else{
			alert("ya no puede agregar mas cartas")
		}
	}
	return (
		<main className='main--cards'>
			<div className='main--cards--buton'>
				<button onClick={consultar}>Generar cartas aleatorias</button>
			</div>

			<div className='contenedor--cards'>
				<section className='cards'>
					{array.map((card) => (
						<div className='card'
							onClick={() => { mostrarDatos(card) }}
							key={card}>
							<figure className='card--figure'>
								<img src={result[card].card_images[0].image_url}
									className='card--figure--img'
									alt={result[card].name} />
							</figure>
						</div>
					))}
				</section>

				<section className='select--card'>
					<div className='select--card--div'>
						<figure className='select--card--figure'>
							{datoCard ? (<img src={result[datoCard].card_images[0].image_url}
								className='select--card--figure--img'
								alt={result[datoCard].name} />) : (<img src={carta}
									className='select--card--figure--img'
									alt="sin imagen" />)}
						</figure>
						<button className='select--card--buton' onClick={() => { agregarCard(datoCard) }}>Agregar carta</button>
					</div>
					{/* <button onClick={()=>{
										localStorage.clear()
									}}>Vaciar local store</button> */}
				</section>

				<br /><br /><br /><br />

			</div>
		</main>
	)
}
export default Cards;