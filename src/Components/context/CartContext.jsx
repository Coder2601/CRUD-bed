import React, { createContext, useState } from 'react'
import { cakesGallery } from '../GalleryContent/GalleryData';
export const cartContext = createContext();

const CartContext = (props) => {
    const getDefaultCartItem = () => {
        let cart = {}
        for (let i = 1; i <= cakesGallery.length; i++) {
            cart[i] = 0
        }
        return cart;
    }
    const getDefaultPriceItem = () => {
        let p = []
        for (let i = 0; i < cakesGallery.length; i++) {
            p[i] = 0
        }
        return p;
    }
    const [cartItems, setCartItems] = useState(getDefaultCartItem)
    const [priceItems, setPriceItems] = useState(getDefaultPriceItem)

    const getTotalItems = () => {
        let itemCount = 0;
        for (let id in cartItems) {
            if (cartItems[id] !== 0) {
                itemCount++;
            }
        }
        return itemCount
    }
    const x = getTotalItems()
    // console.log(cartItems);

    const [finalP, setFinal] = useState([])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            totalAmount += cartItems[item] * priceItems[parseInt(item)-1]
        }
        return totalAmount;
    }

    const handlePrice = (itemId, halfPrice) => {

        if (halfPrice) {
            priceItems[itemId-1] = cakesGallery[itemId-1].price.halfKg;
            setPriceItems(priceItems=>[...priceItems])
        }
        else{
            priceItems[itemId-1] = cakesGallery[itemId-1].price.oneKg;
            setPriceItems(priceItems=>[...priceItems])
        }
    }
    const removeItem=(itemId)=>{
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
    }
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        handlePrice,
        removeItem
    }

    return (
        <cartContext.Provider value={contextValue}>
            {props.children}
        </cartContext.Provider>
    )
}

export default CartContext