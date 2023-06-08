import React, { useContext, useEffect, useState } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData'
import { cartContext } from '../context/CartContext'
import OrderSummaryCart from './OrderSummaryCart'
import './Cart.css'

const OrderSummaryComponent = ({marginClass}) => {

    const { cartItems, getTotalCartAmount } = useContext(cartContext)
    const[getCakes, setGetCakes] = useState(false)
    const[cartCakes, setCartCakes] = useState([]);
    const[total,setTotal] = useState();
    
    useEffect(()=>{
        //get all cart value from localstorage
        let cakesArr = JSON.parse(localStorage.getItem('CartValue'))
        setCartCakes(()=>(cakesArr));

        //get total amount from  localstorage
        setTotal(JSON.parse(localStorage.getItem("totalAmount")))
        console.log(cakesArr);
        setGetCakes(true)
    },[getCakes])

    return (
        <>
            <section className={marginClass}>
                <div>
                    <h1>Your Order Summary</h1>
                </div>
                <div className='cartItems'>
                    
                    {cartCakes.map((product) => {
                        return < OrderSummaryCart data={product} />
                    })}

                    <div>
                        <p><b>Sub Total = {total}</b></p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OrderSummaryComponent



