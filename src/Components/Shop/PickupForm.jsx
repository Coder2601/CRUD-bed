import React, { useState } from 'react'

const PickupForm = ({handlePlaceOrder}) => {
    const [isSaved, setSaved] = useState(false);
    const handleSaveAddress = () => {
        setSaved(true);
    }

    const[pickupData, setPikupData] = useState({
        pickupTime:'',
        orderInstructions:''
    })
    const handleChange=(e)=>{
        setPikupData((prev)=>({...prev,[e.target.id]:e.target.value}));
    }

    return (
        <div className='MainDeliveryContainer'>
            <input id='pickupTime' type='text' placeholder='Pickup Time' class="jHvnQM" onChange={handleChange} required></input>
            <input id='orderInstructions' type="text" placeholder='Order Instructions' class="jHvnQM" onChange={handleChange} required></input>
            <div class="SaveAddressCtaContainer-sc-2db1aee1-0 iMHhfY">
                <button class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" onClick={() => handleSaveAddress()}>Save Details</button>
                <br />
                {!isSaved ? <button disabled='true' class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" style={{ background: '#047300' }}>Place Order</button>
                    :
                    <button class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" style={{ background: '#047300' }}onClick={()=>handlePlaceOrder(pickupData)}>Place Order</button>
                }
            </div>

        </div>

    )
}

export default PickupForm