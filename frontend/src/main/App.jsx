import './App.css'

import React from 'react'

//React Router
//Módulo específico para usar na Internet, embora seja genérica
import {BrowserRouter} from 'react-router-dom'

//Rotas criadas
import Routes from './routes'

//CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//Import dos componentes exceto Header, que já tem incluso na Main.
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

//Componente funcional, sem estado!
export default props => {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav homeIcon="home" userIcon="users"/>
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>

    )
}