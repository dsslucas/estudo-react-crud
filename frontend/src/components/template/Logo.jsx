import './Logo.css'

//Import da imagem
import logo from '../../assets/images/logo-zap.png'

import React from 'react'

export default props => 
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>