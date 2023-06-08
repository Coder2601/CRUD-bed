import React, { Component } from 'react'

export default function Contactus() {
    return (
        <>
            <section className='main-Container-Contact'>
                <img className='contactusimg' src='/images/pink4.jpg' alt="gallery" height={400} width={400} />
                <h1 className='contactusheading contactus-logo'>CONTACT US</h1>
                <span className='item-container-contact'>
                    <div className='left-Container'>
                        <h3 className='font'>Quick Contact</h3>
                        <p className='para-contact'>If you have any questions simply use the following contact details.</p>
                        <h6> <i class="fa-solid fa-location-dot" style={{ color: "#a13050" }}></i>ADDRESS</h6>
                        <p className='para-contact'>Phase 2,Urban Estate Dugri,near Maharaja Plazzo,Ludhiana</p>
                        <h6> <i class="fa-solid fa-envelope" style={{ color: "#a13050" }}></i> EMAIL</h6>
                        <p className='para-contact'> ms.cakeaholic08@gmail.com</p>
                        <h6> <i class="fa-solid fa-phone" style={{ color: "#a13050" }}></i> PHONE NO.</h6>
                        <p className='para-contact'>+91 98144-41***</p>
                        <h1><i class="fa-brands fa-facebook contacticon" style={{ color: "#a13050" }}></i><i class="fa-brands fa-instagram contacticon" style={{ color: "#a13050" }}></i><i class="fa-brands fa-pinterest contacticon" style={{ color: "#a13050" }}></i><i class="fa-brands fa-google-plus contacticon" style={{ color: "#a13050" }}></i></h1>
                    </div>
                    <div className='middle-Container'>
                        <h3 className='font'>Send Message Us</h3>
                        <form>
                            <input type="text" className='inputbox' placeholder='Enter Your Name' /><br /><br />
                            <input type='email' className='inputbox' placeholder='Your Email Id' /><br /><br />
                            <textarea className='inputbox' placeholder='Your Message...' rows={9} cols={30}></textarea><br /><br />
                            <button className='contactbutton'>SUBMIT</button>
                        </form>
                    </div>
                    <div className='right-Container'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27399.08018534724!2d75.81966768930431!3d30.861893919387946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a825c68178efd%3A0xfb8c32b09b399!2sDuggri%2C%20Ludhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1682614630625!5m2!1sen!2sin" width="400" height="530" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </span>
            </section>
        </>
    )
}
