import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Headings from '../components/Headings'
import Products from '../components/Products'
import Footer from '../components/Footer'
import EmptyCart from '../components/EmptyCart'
import CheckOut from '../components/CheckOut'

import { GlobalContext } from '../context/GlobalContext'

function Cart() {
    const { state } = useContext(GlobalContext)
    const cart = state.Cart
    return (
        <>
            <Navbar />
            <Headings title="Cart" />
            <div className="container">
                <div className="row">
                    {cart.length === 0 ?
                        <EmptyCart /> :
                        <>
                            <Products product={cart} root={"Cart"} cart={true} />
                            <CheckOut />
                        </>
                    }
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default Cart
