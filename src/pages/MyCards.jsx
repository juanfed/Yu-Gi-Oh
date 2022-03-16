import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/myCards.css';
import cartaReverse from '../images/reverseCard.jpg';
import Card from '../components/Card';


const MyCards = () => {
	const [cartas, setCartas] = useState([989, 8999, 8520, 7530, 5456, 605, 7898])
	const [resultado, setResultado] = useState([]);
	const [captura, setCaptura] = useState('')

	useEffect(() => {
		const traerCarta = async () => {
			const result = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php`);
			setResultado(result);
		}
		traerCarta()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	const eliminarCarta = (captura) =>{
		let array =  cartas.filter(x => x !== Number(captura)); 
		setCartas(array)
		console.log(`array: ${array}`)
		console.log(`carta capturada: ${captura}`);
	}
	
	const capturarCarta = e =>{
		setCaptura(e.target.value)
	}
	// evito la recarga de la pagina
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<main className='mycards'>
			<h2 className='mycards--title'>Mi mazo personalizado</h2>
			<section className='cartas'>
				{cartas.map((carta, indice) => (
					<Fragment key={indice}>
						<Card carta={carta} resultado={resultado} cartaReverse={cartaReverse} indice={indice}/>
				</Fragment>
				))}
			</section>
			<form className='formulario' onSubmit={handleSubmit}>
				<select onChange={capturarCarta}>
					<option value="">-- Seleccionar carta --</option>
					{cartas.map((carta) =>(
						<option key={carta} value={carta}>{resultado.data?.data[carta].name}</option>
					))}
				</select>
				<button onClick={()=>{eliminarCarta(captura)}} >Eliminar carta</button>
			</form>
		</main>
	)
}

export default MyCards