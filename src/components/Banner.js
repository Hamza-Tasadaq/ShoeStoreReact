import React from 'react'

function Banner() {
    return (
        <div className="container">
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval={10000}>
                        <img src="https://cdn.shopify.com/s/files/1/0016/0074/9623/files/Web-Banner-Men-1348x472-_2_1512x.jpg?v=1604664681" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
