import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderPrivate from '../components/HeaderPrivate'

const Private = () => {
	const autenticado = localStorage.getItem('INFORMATION') !== null;

	if (!autenticado) {
		return <Navigate to="/Yu-Gi-Oh" replace />;
	}

	return (
		<div>
			<HeaderPrivate />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Private
