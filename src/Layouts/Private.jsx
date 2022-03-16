import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderPrivate from '../components/HeaderPrivate'

const autenticado = true;
const Private = () => {
	return (
		<div>
			{autenticado ? (<div>
				<HeaderPrivate />
				<Outlet />
				<Footer /> </div>) : (<h1>No esta autorizado</h1>)}
		</div>
	)
}

export default Private