import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { GlobalContext } from '../context/GlobalContext'

function Navbar() {
    const { state } = useContext(GlobalContext)
    const cart = state.Cart
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand">ShoeStore.</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav  justify-content-end ml-auto">
                            <li className="nav-item">
                                <Link to='/Mens' className="nav-link" aria-current="page" >Mens</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Womens' className="nav-link" >Womens</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Cart' className="nav-link" >Cart[{cart.length}]</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


