import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Headings from '../components/Headings'
import Products from '../components/Products'
import Footer from '../components/Footer'

import { GlobalContext } from '../context/GlobalContext'


function Home() {
    const { state } = useContext(GlobalContext)
    const latest = state.Latest
    const trending = state.Trending
    return (
        <>
            <Navbar />
            <Banner />
            <Headings title="Latest Collection" />
            <div className="container">
                <div className="row">
                    <Products product={latest} root={"Latest"} />
                </div>
                <hr />
            </div>
            <Headings title="Trending Now" />
            <div className="container">
                <div className="row">
                    <Products product={trending} root={"Trending"} />
                </div>
                <hr />
            </div>
            <Footer />
        </>
    )
}

export default Home