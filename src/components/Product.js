import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { AiOutlineShoppingCart, AiOutlineDelete } from 'react-icons/ai'

import { GlobalContext } from '../context/GlobalContext'

function Product(props) {
    const { addToCart, deleteFromCart } = useContext(GlobalContext)
    const item = props.item
    const rootUrl = props.rootUrl
    const cart = props.cart
    return (
        <div className="col-md-3 col-sm-6">
            <div className="product-grid3">
                <div className="product-image3">
                    <Link to={`/${rootUrl}/${item.name}`} itemdetail={item} >
                        <img className="pic-1"
                            src={item.picone} />
                        <img className="pic-2"
                            src={item.pictwo} />
                    </Link>
                    <ul className="social">
                        <li>
                            <a>
                                {cart ? <AiOutlineDelete onClick={() => { deleteFromCart(item.id) }} /> : <AiOutlineShoppingCart onClick={() => { addToCart(item) }} />}
                            </a>
                        </li>
                    </ul>
                </div>
                {item.New === true ? <span className="product-new-label">New</span> : ""}
                <div className="product-content">
                    <h3 className="title"><a >{item.name}</a></h3>
                    <div className="price">
                        ${item.price}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Product
