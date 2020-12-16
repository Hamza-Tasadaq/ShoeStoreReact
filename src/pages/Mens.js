import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Headings from '../components/Headings'
import Products from '../components/Products'
import Footer from '../components/Footer'

import { GlobalContext } from '../context/GlobalContext'

function Mens() {
    const { state } = useContext(GlobalContext)
    const mens = state.Mens
    return (
        <>
            <Navbar />
            <Headings title="Mens Collection" />
            <div className="container">
                <div className="row">
                <Products product={mens} root={"Mens"} />
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default Mens
