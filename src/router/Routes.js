import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Mens from '../pages/Mens'
import Womens from '../pages/Womens'
import ProductDetails from '../pages/ProductDetails'
import { GlobalProvider } from '../context/GlobalContext'

function Routes() {
    return (
        <GlobalProvider>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Cart' component={Cart} />
                    <Route exact path='/Mens' component={Mens} />
                    <Route exact path='/Womens' component={Womens} />
                    <Route exact path='/:slug/:id' component={ProductDetails} />
                    <Route path="*" component={() => { <h1>Not found</h1> }} />
                </Switch>
            </Router>
        </GlobalProvider>
    )
}

export default Routes
