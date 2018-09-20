import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Add from './Add'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/add' component={Add} />
        </Switch>
    </main>
)

export default Main
