import './App.css'

import React from 'react'

//CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

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
            <Nav homeIcon="home" userIcon="users"/>
            <Main icon="home" 
                title="Início" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis in dolor eget ullamcorper. Donec id scelerisque magna, quis consequat risus. Aliquam et libero ut lorem fringilla laoreet in nec mauris. Fusce a augue vel velit scelerisque euismod in et justo. Suspendisse sed tellus at nulla fermentum laoreet. Cras justo lectus, efficitur at pulvinar ut, bibendum id ante. Praesent eget ligula quis arcu iaculis ultrices ac eleifend justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."/>
            <Footer />
        </div>
    )
}