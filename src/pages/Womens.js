import React,{useContext} from 'react'
import Navbar from '../components/Navbar'
import Headings from '../components/Headings'
import Products from '../components/Products'
import Footer from '../components/Footer'

import { GlobalContext } from '../context/GlobalContext'

function Womens() {
    const { state } = useContext(GlobalContext)
    const womens = state.Womens
    return (
        <>
            <Navbar />
            <Headings title="Womens Collection" />
            <div className="container">
                <div className="row">
                <Products product={womens} root={"Womens"} />
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default Womens
