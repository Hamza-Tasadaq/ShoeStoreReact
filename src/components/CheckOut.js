import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

function CheckOut() {
    const { state, checkOut } = useContext(GlobalContext)
    const cart = state.Cart
    const price = cart.map((item) => { return +item.price })
    const total = price.reduce(function (a, b) {
        return a + b;
    }, 0);
    return (
        <div className="text-center">
            <h4>Total: ${total}</h4>
            <div className="action">
                <button className="add-to-cart btn btn-default" onClick={() => checkOut()} type="button">Check Out</button>
            </div>
        </div>
    )
}

export default CheckOut
