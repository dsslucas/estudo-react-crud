import "./Main.css"

import React from "react"

//Ela vai ficar mudando, por isso a importância  de unir 
import Header from "./Header"

export default props => 
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>

