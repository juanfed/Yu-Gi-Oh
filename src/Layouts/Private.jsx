import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderPrivate from '../components/HeaderPrivate'

const Private = () => {
    return (
        <>
        <HeaderPrivate />
        <Outlet />
        <Footer />
        </>
    )
}

export default Private