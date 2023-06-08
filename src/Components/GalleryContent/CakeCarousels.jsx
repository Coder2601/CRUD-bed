import React, { useContext, useEffect } from 'react'
import { cartContext } from '../context/CartContext'
import Carousel from './Carousel'
import { cakesGallery } from './GalleryData'

const CakeCarousel = ({ data }) => {
    const { cartItems, addToCart } = useContext(cartContext)
    // console.log(data)

    return (
        <Carousel show={4}>
            {data.map((product,index) =>
                <div className='drycakecontainer' key={index}>
                    {/* {console.log(product)} */}
                    <div style={{ padding: '8px' }}>
                        <img src={product.src} alt="placeholder" style={{ width: "100%" }} />
                        <div className="overlay">
                            {product.divData}
                            {cartItems[product.id]>0 && <>({cartItems[product.id]})</>}
                            
                            <i class="fa-solid fa-square-plus like" onClick={() => addToCart(product.id)}></i>
                            <i class="fa-solid fa-heart like"></i>
                            
                        </div>
                    </div>
                </div>
            )}
        </Carousel >
    )
}

export default CakeCarousel