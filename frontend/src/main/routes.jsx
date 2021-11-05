import React from "react";

//Dependências do React Router
//Redirect redireciona para a página inicial
import {Switch, Route, Redirect} from 'react-router'

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/*URL DE REDIRECIONAMENTO */}
        <Redirect from='*' to='/' />
    </Switch>