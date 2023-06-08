import React, { useState } from 'react'
import { createContext } from 'react'
import Cart from '../Cart';
export const cartContextMain = createContext();

const CartContext = () => {
    const [cake,setCake] = useState('Oreo Choco');
    const [cakePrice, setCakePrice] = useState(500);
    
    const [cartItems,setCartItems] = useState([
        {
            id:'1',
            name:'Mango Cake',
            price:'$ 500'
        },
        {
            id:'2',
            name:'Mango Cake',
            price:'$ 500'
        },
        {
            id:'3',
            name:'Mango Cake',
            price:'$ 500'
        }
    ])
    const handleInc=()=>{
        setCakePrice(cakePrice+100);
    }
  return (
    <div>
        <cartContextMain.Provider value={{cake, cakePrice, handleInc, cartItems}}>
            <Cart />
        </cartContextMain.Provider>
    </div>
  )
}

export default CartContext