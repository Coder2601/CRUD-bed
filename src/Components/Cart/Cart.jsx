import React, { useContext, useEffect, useState } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData'
import { cartContext } from '../context/CartContext'
import CartItems from './CartItems'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const nav = useNavigate();
    const { cartItems, getTotalCartAmount } = useContext(cartContext);
    const[cartData, setCartData] = useState([]);

    useEffect(() => {
        let tempArr = []
        cakesGallery.map((i) => {
            if (cartItems[i.id] !== 0) {
                tempArr.push(i)
                // console.log(tempArr);
                return i
            }
            else { return null };
        })
        // console.log(cartItems);
        let orderDate = JSON.stringify(new Date())
        let orderActualDate = orderDate.slice(1, 11)
        localStorage.setItem('CartValue', JSON.stringify(cartData));
        localStorage.setItem('orderDate', JSON.stringify(orderActualDate));
        localStorage.setItem('totalAmount',JSON.stringify(getTotalCartAmount()));
        // return tempArr;
    }, [cartData])


    const handleCheckout = () => {
        nav('/checkout');
    }

    const handleFlavrChange = (flavor,id, halfP) => {
        let tempArr = []
        cakesGallery.map((i) => {
            if (cartItems[i.id] !== 0) {
                let hlfkg = i.price.halfKg
                let onkg = i.price.oneKg
                if (i.id === id) {
                    if (halfP) {
                        i['itemPrice'] = hlfkg
                        i['weight'] = 'Half Kg'
                    } else if(!halfP){
                        console.log(onkg, cartItems[i.id]);
                        i['itemPrice'] = onkg
                        i['weight'] = 'One Kg'
                    }
                    else{
                        alert('Select cake quantity')
                    }
                    i['flavour'] = flavor;
                    i['quantity'] = cartItems[i.id];
                }
                tempArr.push(i);
                setCartData(()=>(tempArr));
                console.log(cartData);

                return i
            }
            else { return null };
        })
    }
    return (
        <>
            <img className='galleryimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
            <h1 className='carthead gallery-logo'>Your cart Items</h1>
            <br /> <br /> <br />

            <table className='cart' style={{ marginTop: '150px', border: '1px solid black' }}>
                <button onClick={handleCheckout}>CheckOut</button>
                <br />
                <tbody style={{ border: '1px solid black' }}>
                    <div className='CartItems'>
                        <tr style={{ border: '1px solid black' }}>
                            <th style={{ border: '1px solid black' }}>Product</th>
                            <th style={{ border: '1px solid black' }}>Product name</th>
                            <th style={{ border: '1px solid black' }}>Flavour</th>
                            <th style={{ border: '1px solid black' }}>Price</th>
                            <th style={{ border: '1px solid black' }}>Quantity</th>
                            <th style={{ border: '1px solid black' }}>Close</th>
                        </tr>
                        {cakesGallery.map((product,mapIndex) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItems data={product} key={product.id} handleFlavrChange={handleFlavrChange} mapIndex={mapIndex} />
                            }
                        })}
                        <div>
                            <p><b>Sub Total ={getTotalCartAmount()}</b></p>
                            {/* {console.log(getTotalCartAmount())} */}
                        </div>
                    </div>
                </tbody>
            </table>

        </>
    )
}

export default Cart
