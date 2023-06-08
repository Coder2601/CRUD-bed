import React from 'react'

const Footer = () => {
    return (
        <>
            <div class="my-5 ">

                <footer class=" text-center text-lg-start FooterMain">
                    <div class="container p-4">
                        <div class="row mt-4">
                            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">About Us</h5>

                                <p style={{fontSize:"15px"}}>
                                Welcome to our home bakery, where our passion for baking comes to life. As home bakers, we have turned our love for creating sweet delights into a business that brings joy to our customers. 
                                </p>

                                <p  style={{fontSize:"15px"}}>
                                Quality is at the heart of everything we do. We carefully select the finest ingredients, sourcing locally whenever possible, to guarantee the freshness and flavor of our products.
                                </p>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <ul class="fa-ul" style={{ marginLeft: "7.65em", marginTop: "26px" }}>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Phase 2,Urban Estate Dugri,near Maharaja Plazzo,Ludhiana</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">ms.cakeaholic08@gmail.com</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+91 98144-4****</span>
                                    </li>
                                    <li class="mb-3">
                                        <span class="fa-li"><i class="fa-brands fa-instagram" style={{color: "#161718"}}></i></span><span class="ms-2">Ms_Cakeaholic</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                                <h5 class="text-uppercase mb-4">Opening hours</h5>

                                <table class="table text-center">
                                    <tbody class="font-weight-normal">
                                        <tr>
                                            <td>Mon - Fri:</td>
                                            <td>9am - 9pm</td>
                                        </tr>
                                        <tr>
                                            <td>Sat - Sun:</td>
                                            <td>10am - 8am</td>
                                        </tr>
                                        <tr>
                                            <td>Order 2-3 Days Prior....</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="text-center p-3">

                    </div>
                </footer>

            </div>
        </>
    )
}

export default Footer
