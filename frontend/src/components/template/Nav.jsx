import './Nav.css'

import React from 'react'

//React Router
import { Link } from 'react-router-dom'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className={`fa fa-${props.homeIcon}`}>Início</i>
            </Link>
            <Link to="/users">
                <i className={`fa fa-${props.userIcon}`}>Usuários</i>
            </Link>
        </nav>
    </aside>