import React from 'react'

const WhyChoose = () => {
    return (
        <>
            <div>
                <div>
                    <span><h3 className='wchead'>Why Choose</h3></span>
                    <span><h2 className='wchead1'>Ms_Cakeaholic ?</h2></span>
                </div>
                <div className="visible-mobile-flex wc1">
                    <div className="wc2">
                        <img style={{width: "70px"}} src="./images/food-delivery.png"/>
                        <h4 className="wc3">
                            <strong>Fast <br />Delivery</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="https://cdn.dotpe.in/kiranaStatic/custom_website/FreshlyBakedVarshui20122022.png" />
                        <h4 className='wc3'>
                            <strong>Freshly<br /> Baked</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="./images/cakeas.png" />
                        <h4 className='wc3'>
                            <strong> On-Demand <br />Customization</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="./images/medal.png" />
                        <h4 className='wc3'>
                            <strong>Premium <br />Quality</strong>
                        </h4>
                    </div>
                </div>
                <div className="visible-mobile-flex wc1">
                    <div className="wc2">
                        <img style={{width: "70px"}} src="./images/price.png"/>
                        <h4 className="wc3">
                            <strong>Value<br />For Money</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="./images/hygiene.png" />
                        <h4 className='wc3'>
                            <strong>Proper<br />Hygiene</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="./images/calendar.png" />
                        <h4 className='wc3'>
                            <strong> Pre-Orders<br />Only</strong>
                        </h4>
                    </div>
                    <div className='wc2'>
                        <img style={{width: "70px"}} src="./images/house.png" />
                        <h4 className='wc3'>
                            <strong> Home<br />Baker</strong>
                        </h4>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyChoose