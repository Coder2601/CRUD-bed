import React, { useEffect, useState } from 'react'
import DeliveryForm from './DeliveryForm';
import OrderSummaryComponent from '../Cart/OrderSummaryComponent';
import PickupForm from './PickupForm';
import '../Cart/Cart.css'

const Checkout = () => {
  const[pickup, setPickup] = useState(false);
  const[DbtnStyle,setDBtnStyle] = useState('selected');
  const[PbtnStyle,setPBtnStyle] = useState('normal');

  useEffect(()=>{
    if(pickup){
      setDBtnStyle('normal');
      setPBtnStyle('selected')
    }else{
      setDBtnStyle('selected');
      setPBtnStyle('normal')
    }

  },[pickup]);

  const handlePlaceOrder=(data)=>{
    console.log(data);
  }

  return (
    <>
      <div class="CheckoutMain">
        <div class="CheckoutHeader">
          <article class="CartOption-sc-f0c42edb-9 lmidHi">
            <span class="CheckOutHead">Checkout</span>
            <div style={{position: "relative"}}>
              <div font-size="14" class="SwitchContainer">
                <div type="left" class={`SwitchLabel ${DbtnStyle}`} onClick={()=>setPickup(false)}>Delivery</div>
                <div type="right" class={`SwitchLabel2 ${PbtnStyle}`} onClick={()=>setPickup(true)}>Pick Up</div>
              </div>
            </div>
          </article>
        </div>
        
      </div>
      <div>
        <span>
        {!pickup?<DeliveryForm handlePlaceOrder={handlePlaceOrder} />:<><PickupForm handlePlaceOrder={handlePlaceOrder}/></>}
        </span>
        <span>
          {!pickup?<OrderSummaryComponent marginClass='cart'/>:<OrderSummaryComponent marginClass='pickupCart'/>}
        </span>
      </div>

    </>
  )
}
export default Checkout
