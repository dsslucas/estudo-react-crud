import "./Main.css"

import React from "react"

//Ela vai ficar mudando, por isso a importância  de unir 
import Header from "./Header"

export default props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>

