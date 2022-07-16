import React, { useState } from 'react';
import '../styles/profile.css';


const Profile = () => {
	const [number, setNumber] = useState('')
	const dataProfile = (JSON.parse(localStorage.getItem('INFORMATION')))
	console.log(dataProfile);
	const save = () => {
		localStorage.setItem('number', number)
		alert("Datos guardados")
	}
	// evitar que se recargue la pagina al guardar los cambios
	const handleChange = (e) => {
		e.preventDefault()
	}

	const numero = (e) => {
		setNumber(e.target.value)
		console.log(`numero: ${number}`);
	}

	console.log(localStorage.getItem('number'));
	return (
		<>
			<main className='profile'>
				<div className='profile-card'>
					<div>
						<form action="" className='profile--form' onSubmit={handleChange}>
							<img src={dataProfile.photo} alt="" />
							<div className='profile--form--icons'>
								<label htmlFor="name">Nombre:</label>
								<input type="text" value={dataProfile.name} id="name" />
							</div>
							<div className='profile--form--icons'>
								<label htmlFor="email">Correo:</label>
								<input type="email" value={dataProfile.email} id="email" />
							</div>
							<div className='profile--form--icons'>
								<label htmlFor="whatsap">Whatsapp:</label>
								<input type="number" placeholder={localStorage.getItem('number')} id='whatsapp'
									value={number} onChange={numero} />
							</div>
							<div className='profile--form--icons'>
								<button type='text' className='profile-buton' onClick={save}>Guardar Cambios</button>
							</div>
						</form>
					</div>
				</div>
			</main>
		</>
	)
}

export default Profile