import "./Main.css"

import React from "react"

//Ela vai ficar mudando, por isso a importância  de unir 
import Header from "./Header"

export default props => 
    <React.Fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>

