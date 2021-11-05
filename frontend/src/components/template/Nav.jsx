import './Nav.css'

import React from 'react'

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className={`fa fa-${props.homeIcon}`}>Início</i>
            </a>
            <a href="#/users">
                <i className={`fa fa-${props.userIcon}`}>Usuários</i>
            </a>
        </nav>
    </aside>