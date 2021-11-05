import './App.css'

import React from 'react'

//Import dos componentes exceto Header, que já tem incluso na Main.
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

//Componente funcional, sem estado!
export default props => {
    return (
        <div className="app">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}