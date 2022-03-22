import React, {useState} from 'react';
import '../styles/profile.css';

const Profile = () => {
	const [number, setNumber] = useState('')
	const dataProfile = (JSON.parse(localStorage.getItem('INFORMATION')))
	console.log(dataProfile);
	const save = () => {
		localStorage.setItem('number', number)
	}
	// evitar que se recargue la pagina al guardar los cambios
	const handleChange = (e) => {
		e.preventDefault()
	}

	const numero = (e) =>{
		setNumber(e.target.value)
		console.log(`numero: ${number}`);
	}

	console.log(localStorage.getItem('number'));
	return (
		<main className='profile'>
			<div>
				<form action="" className='profile--form' onSubmit={handleChange}>
					<img src={dataProfile.photo} alt="" />
					<div>
						<label htmlFor="name">Nombre:</label>
						<input type="text" value={dataProfile.name} id="name" />
					</div>
					<div>
						<label htmlFor="email">Correo:</label>
						<input type="email" value={dataProfile.email} id="email" />
					</div>
					<div>
						<label htmlFor="whatsap">Whatsapp:</label>
						<input type="number" placeholder={localStorage.getItem('number')} id='whatsapp' value={number} onChange={numero} />
					</div>
					<div>
						<button type='text' className='profile-buton' onClick={save}>Guardar Cambios</button>
					</div>
				</form>
			</div>
		</main>
	)
}

export default Profile