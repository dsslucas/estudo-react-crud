import './App.css'

import React from 'react'

//CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//Import dos componentes exceto Header, que já tem incluso na Main.
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

//Componente funcional, sem estado!
export default props => {
    return (
        <div className="app">
            <Logo />
            <Nav homeIcon="home" userIcon="users"/>
            <Home />
            <Footer />
        </div>
    )
}