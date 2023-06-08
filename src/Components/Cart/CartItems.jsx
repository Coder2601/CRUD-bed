import React, { useContext, useState } from 'react'
import { cartContext } from '../context/CartContext'
import './Cart.css'

const CartItems = (props) => {
    const{cartItems, addToCart,removeFromCart, updateCartItemCount, handlePrice,removeItem} = useContext(cartContext)

    const{id, src, divData, price}=props.data

    const{handleFlavrChange}=props
    const[halfP,setHalfP] = useState(null);

    const pp=(x)=>{
      setHalfP(x);
      const res = handlePrice(id,x)
    }

  return (
    <>
    <tr style={{border:'1px solid black'}}>
        <td style={{border:'1px solid black'}}><img src={src} alt="" width='200px' height='200px' /></td>
        <td style={{border:'1px solid black'}}><b>{divData}</b></td>
        <td style={{border:'1px solid black'}}>
        <input onChange={(event)=>handleFlavrChange(event.target.value,id,halfP)} type="text" list="Flavours" placeholder="Choose Your Flavours" />
                 <datalist id="Flavours">
                    <option value="VANILLA CAKE">VANILLA CAKE</option>
                    <option value="MARBLE CAKE">MARBLE CAKE</option>
                    <option value="CARROT CAKE">CARROT CAKE</option>
                    <option value="BANANA CAKE">BANANA CAKE</option>
                    <option value="DRY FRUIT CAKE">DRY FRUIT CAKE</option>
                    <option value="TUTTI FRUTTI CAKE">TUTTI FRUTTI CAKE</option>
                    <option value="CHOCOLATE CAKE">CHOCOLATE CAKE</option>
                    <option value="PINEAPPLE UPSIDE DOWN">PINEAPPLE UPSIDE DOWN</option>
                    <option value="OATS DATE CAKE">OATS DATE CAKE</option>
                    <option value="WHOLE WHEAT JAGGREY">WHOLE WHEAT JAGGREY</option>
                    <option value="FRUIT CAKE">FRUIT CAKE</option>
                    <option value="STRAWBERRY CAKE">STRAWBERRY CAKE</option>
                    <option value="BLUEBERRY CAKE">BLUEBERRY CAKE</option>
                    <option value="PINEAPPLE CAKE">PINEAPPLE CAKE</option>
                    <option value="BUTTERSCOTCH CAKE">BUTTERSCOTCH CAKE</option>
                    <option value="CHOCOLATE CAKE">CHOCOLATE CAKE</option>
                    <option value="OREO CAKE">OREO CAKE</option>
                    <option value="KITKAT CAKE">KITKAT CAKE</option>
                    <option value="FERRERO ROCHER CAKE">FERRERO ROCHER CAKE</option>
                    <option value="RASMALAI CAKE">RASMALAI CAKE</option>
                    <option value="GULAB JAMUN CAKE">GULAB JAMUN CAKE</option>
                    <option value="PHOTO CAKE">PHOTO CAKE</option>
                    <option value="BISCOFF CAKE">BISCOFF CAKE</option>
                    <option value="BLACK FOREST CAKE">BLACK FOREST CAKE</option>
                    <option value="WHITE FOREST CAKE">WHITE FOREST CAKE</option>
                    <option value="RED VELVET CAKE">RED VELVET CAKE</option>
                    <option value="CHOCO TRUFFLE CAKE">CHOCO TRUFFLE CAKE</option>
                    <option value="BANOFEE CAKE">BANOFEE CAKE</option>
                    <option value="NUTELLA HAZELNUT CAKE">NUTELLA HAZELNUT CAKE</option>
                    <option value="CHOCOLATE CARAMEL CRUNCH CAKE">CHOCOLATE CARAMEL CRUNCH CAKE</option>
                    <option value="VANILLA CUPCAKE">VANILLA CUPCAKE</option>
                    <option value="CHOCOLATE CUPCAKE">CHOCOLATE CUPCAKE</option>
                    <option value="CARROT CUPCAKE">CARROT CUPCAKE</option>
                    <option value="BANANA CUPCAKE">BANANA CUPCAKE</option>
                    <option value="RED VELVET CUPCAKE">RED VELVET CUPCAKE</option>
                    <option value="LOTUS BISCOFF CUPCAKE">LOTUS BISCOFF CUPCAKE</option>
                    <option value="STRAWBERRY CUPCAKE">STRAWBERRY CUPCAKE</option>
                    <option value="BLUEBERRY CUPCAKE">BLUEBERRY CUPCAKE</option>
                    <option value="FRUIT CUPCAKE">FRUIT CUPCAKE</option>
                    <option value="NUTELLA CUPCAKE">NUTELLA CUPCAKE</option>
                    <option value="NO BAKE LEMON CHEESECAKE">NO BAKE LEMON CHEESECAKE</option>
                    <option value="NO BAKE BLUEBERRY CHEESECAKE">NO BAKE BLUEBERRY CHEESECAKE</option>
                    <option value="NO BAKE STRAWBERRY CHEESECAKE">NO BAKE STRAWBERRY CHEESECAKE</option>
                    <option value="NO BAKE MANGO CHEESECAKE">NO BAKE MANGO CHEESECAKE</option>
                    <option value="LOTUS BISCOFF CHEESECAKE">LOTUS BISCOFF CHEESECAKE</option>
                    <option value="CLASSIC NUTELLA CHEESECAKE">CLASSIC NUTELLA CHEESECAKE</option>
                    <option value="OREO 3 LAYERED CHEESECAKE">OREO 3 LAYERED CHEESECAKE</option>
                    <option value="PINATA CAKE">PINATA CAKE</option>
                    <option value="BOUQUET OF CUPCKAES">BOUQUET OF CUPCKAES</option>
                    <option value="TROUSSEAU">TROUSSEAU</option>
                    <option value="HAMPERS">HAMPERS</option>
                    <option value="JAR CAKES">JAR CAKES</option>
                    <option value="HEART MONOGRAM">HEART MONOGRAM</option>
                    <option value="A MONOGRAM">A MONOGRAM</option>
                    <option value="BOUQUET">BOUQUET</option>
                    <option value="J MONOGRAM">J MONOGRAM</option>
                    <option value="O MONOGRAM">O MONOGRAM</option>
                </datalist>

        </td>
        <td style={{border:'1px solid black'}}>
        <button onClick={()=>pp(true)}>1/2Kg</button> 
        <button onClick={()=>pp(false)}>1Kg</button>
        {halfP ?<><p><b>Half Kg :</b></p>Rs.{price.halfKg}</>:<><p><b>One Kg:</b></p>Rs.{price.oneKg}</>}
        </td>
        <td style={{border:'1px solid black'}}>
            <button onClick={()=>removeFromCart(id)}>-</button>

            <input type="text" style={{display:'inline'}} value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value), id)} />
            
            <button onClick={()=>addToCart(id)}>+</button>
        </td>
        <td style={{border:'1px solid black'}}><button type='close' onClick={()=>{removeItem(id)}}>x</button></td>
    </tr>
    </>
  )
}

export default CartItems