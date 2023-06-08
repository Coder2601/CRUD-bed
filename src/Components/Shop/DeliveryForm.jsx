import React, { useState } from 'react'

const DeliveryForm = ({handlePlaceOrder}) => {
  const [isSaved, setSaved] = useState(false);
  const handleSaveAddress = () => {
    setSaved(true);
  }
  const[deliveryData,setdeliveryData] = useState({
    recipientName:'',
    houseNo:'',
    pinCode:'',
    city:'',
    state:'',
    landmark:'',
    emailId:'',
    mobile:'',
    addressType:'',
    orderInstructions:""
  })
  return (
    <div className='MainDeliveryContainer'>
      <div class="CheckoutAdditionalInfoTabContainer-sc-c6d27f61-1 dcdPcn]">
        <div class="CheckoutInfoTabContainer-sc-dd3ab1d3-0 jHvnQM">
          <div class="CheckoutInfoTabLeftContainer-sc-dd3ab1d3-1 kjcilV">
            <div class="CheckoutInfoTabLeftIcon-sc-dd3ab1d3-4 lpknxZ">
              <i class="fa-solid fa-gift" style={{ color: "#b9276e" }}></i>
            </div>
            <div class="CheckoutInfoTabMiddleContainer-sc-dd3ab1d3-2 fopzZj">
              <div class="PromoHeading-sc-fe95f2e-3 hJKFpS">Coupon/ Bank or Wallet Offer
              </div>
              <div class="PromoNameContainer-sc-fe95f2e-0 dOoTVa">
                <div class="PromoName-sc-fe95f2e-1 eJOibD">
                </div>
              </div>
            </div>
          </div>
          <div class="CheckoutInfoTabRightContainer-sc-dd3ab1d3-3 bdqFYL">
            <div color="#0D0E0F" class="PromoApplyRemoveCta-sc-fe95f2e-2 iApjDB">Apply</div>
          </div>
        </div>
        <div class="AddressFormContainer-sc-cf4b784f-0 iUupQc">
          <div class="AddressTabContainer-sc-cf4b784f-2 btFOlx">
            <div class="CheckoutInfoTabLeftContainer-sc-dd3ab1d3-1 kjcilV">
              <div class="AddressTabLeftIcon-sc-cf4b784f-3 dPYchk">
                <i class="fa-solid fa-car-side" style={{ color: "#b9276e" }}></i>
              </div>
              <div class="CheckoutInfoTabMiddleContainer-sc-dd3ab1d3-2 fopzZj">
                <div class="flex f14px">Add New Address</div>
              </div>
            </div>
            <div class="CheckoutInfoTabRightContainer-sc-dd3ab1d3-3 bdqFYL">
              <div color="#0D0E0F" class="AddressCtaText-sc-cf4b784f-1 iUdnUr">
              </div>
            </div>
          </div>
          <div class="premium-add-delivery-page">
            <article class="premium-address-container">
              <div class="premium-address-container__wrap premium-wrapper-around">
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text" placeholder="Enter Recipient Name *" id="userNameInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text" placeholder="Enter Flat/ House No. / Floor *" id="address1Input" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <article class="premium-form-flex-row">
                  <div class="DSInput-sc-ace265ae-0 ddgCkn">
                    <input type="text" placeholder="Pincode *" id="pincodeInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                  </div>
                  <div class="DSInput-sc-ace265ae-0 ddgCkn">
                    <input type="text" placeholder="City *" id="cityInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                  </div>
                </article>
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text " placeholder=" State *" id="stateInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text" placeholder="Landmark (optional)" id="landmarkInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text" placeholder=" Email ID (optional)" id="emailIdInput" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <div class="DSInput-sc-ace265ae-0 ddgCkn">
                  <input type="text" placeholder="Mobile Number *" id="alternatePhone" class="FormControl-sc-ace265ae-1 eoLDu" />
                </div>
                <div class="flex flex-row">

                </div>
              </div>
              <div class="premium-address-container__typewrap premium-wrapper-around">
                <div class="form-group btn-group">
                  <button class="pointer" type="button" style={{ color: "rgb(13, 14, 15)", border: "1px solid rgb(13, 14, 15)" }}>
                    <div class="flex justify-center items-center mr6px">
                      <i class="fa-solid fa-house-chimney" style={{ color: "#b9276e", padding: "3px" }}></i>
                    </div>Home
                  </button>
                  <button class="pointer" type="button">
                    <div class="flex justify-center items-center mr6px">
                      <i class="fa-solid fa-briefcase" style={{ color: "#b9276e", padding: "3px" }} ></i>
                    </div>Work</button>
                  <button class="pointer" type="button">
                    <div class="flex justify-center items-center mr6px">
                      <i class="fa-solid fa-location-dot" style={{ color: "#b9276e", padding: "3px" }} ></i>
                    </div>
                    Others
                  </button>
                </div>
              </div>
            </article><br />
            <b>Order Instructions:</b>
            <input type="text" placeholder='Order Instructions' class="CheckoutInfoTabMiddleContainer-sc-dd3ab1d3-2 jHvnQM"></input>
            <div class="SaveAddressCtaContainer-sc-2db1aee1-0 iMHhfY">
              <button class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" onClick={() => handleSaveAddress()}>Save Address</button>
              {!isSaved ? <button disabled='true' class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" style={{ background: '#047300' }}>Place Order</button>
                :
                <button class="SaveAddressCta-sc-2db1aee1-1 iqMCfr" style={{ background: '#047300' }} onClick={()=>handlePlaceOrder(deliveryData)}>Place Order</button>
              }
            </div>
            
          </div>
        </div>
        <div class="rodal rodal-fade-leave bottom-modal-deliveryList" tabindex="-1" style={{ display: "none", animationDuration: "300ms" }}>
          <div class="rodal-mask">
          </div>
          <div class="rodal-dialog rodal-slideUp-leave" style={{ width: "100%", minHeight: "300px", animationDuration: "300ms" }}>
            <div class="flex justify-center">
              <section class="premium-delivery-list-page">
                <main class="main-body">
                  <div class="premium-heading premium-wrapper-around">Select delivery Address
                  </div>
                  <div class="mb4 ">
                  </div>
                  <div class="mb4 ">
                  </div>
                  <div class="mb4 o-40">
                  </div>
                </main>
                <footer>
                  <button font-size="14" class="ButtonBody-sc-989935d2-0 lkPsSF">Add New Address</button>
                </footer>
              </section>
            </div>
          </div>
        </div>
        <div>
        </div>
        
      </div>

    </div>
  )
}

export default DeliveryForm