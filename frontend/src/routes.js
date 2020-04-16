import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import SubmitRecipe from './pages/SubmitRecipe'

//switch garante que apenas uma rota sera chamada por momento
//exact faz com que entre no rota só se for exatamente essa a url
//...assim uma rota que começa com o mesmo texto não será ignorada.
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/recipes" component={SubmitRecipe}></Route>
            </Switch>
        </BrowserRouter>
    )
}