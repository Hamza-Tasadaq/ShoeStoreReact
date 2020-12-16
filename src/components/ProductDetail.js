import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'


import { GlobalContext } from '../context/GlobalContext'

function ProductDetail() {
    const { state, addToCart } = useContext(GlobalContext)
    const { slug } = useParams()
    const { id } = useParams()
    const arr = state[slug]
    let detail = arr.filter((product) => {
        return product.name === id
    })
    detail = detail[0]
    console.log(detail)
    return (
        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active"><img src={detail.picthree} /></div>
                            </div>
                        </div>
                        <div className="details col-md-6">
                            <h3 className="product-title">{detail.name}</h3>
                            <p className="product-description">The {detail.name} continues the legacy of a cultural icon. Light, responsive and sculpted with aerodynamic precision, combines boldly unconventional midsole.</p>
                            <h4 className="price">price: <span>${detail.price}</span></h4>
                            <div className="action">
                                <button className="add-to-cart btn btn-default" onClick={() => addToCart(detail)} type="button">add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
