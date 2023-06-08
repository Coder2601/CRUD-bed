import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../context/CartContext'

const OrderSummaryCart = ({ data }) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount, handlePrice } = useContext(cartContext)

    const { id, src, divData, category, itemPrice, quantity, weight, flavour } = data
    const [halfP, setHalfP] = useState();

    const pp = (x) => {
        setHalfP(x);
        const res = handlePrice(id, x)
        console.log(res);
    }

    return (
        <>
            <div >
                <table>
                    <tbody>
                        <tr>
                            <td> <img src={src} alt="" width='150px' height='150px' /></td>
                            <td>
                                <b>{divData}</b>
                                <br /><br />
                                <b>Flavour</b>: {flavour}
                                <br />
                            <b>Price: </b>{itemPrice}
                            <br />
                            <b>Items Count: </b>{quantity}
                            <br />
                            <b>Weight: </b>{weight}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />

            </div>

        </>
    )
}

export default OrderSummaryCart