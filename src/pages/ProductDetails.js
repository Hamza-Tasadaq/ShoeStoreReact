import React from 'react'
import Navbar from '../components/Navbar'
import Headings from '../components/Headings'
import ProductDetail from '../components/ProductDetail'
import Footer from '../components/Footer'

function ProductDetails() {
    return (
        <>
            <Navbar />
            <Headings title="Products Detail" />
            <ProductDetail />
            <Footer />
        </>
    )
}

export default ProductDetails
