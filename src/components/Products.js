import React from 'react'
import Product from './Product'


function Products(props) {
    const product = props.product
    const root = props.root
    const cart = props.cart
    return (
        <>
            {product.map((productItem, index) => {
                return (
                    <Product key={index} rootUrl={root} item={productItem} cart={cart} />
                )
            })}
        </>
    )

}

export default Products
