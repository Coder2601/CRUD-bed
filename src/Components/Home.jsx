import React from 'react'
import "./style.css"
import Menu from './Menu'
import Contactus from './Contactus'
import Carousel from './GalleryContent/Carousel'
import CarouselCollection from './GalleryContent/DemoAllGalleryContext'
import WhyChoose from './WhyChoose'
import Footer from './Footer'
import "./Shop/Reviews.css"
import { useNavigate } from 'react-router-dom'

export const Home =()=>{
    const nav = useNavigate()
    
    return (
      <>
       <section className="sctn">
        <div className="hdng">
            <h1 className="heading">WELCOME TO MS_CAKEAHOLIC !!</h1>
            <p className="para">"The Secret Ingredient in Baking is Always Love."</p>
        </div>
    </section>
    <section className="mySlides">
        {/* <!-- slideshow on front page --> */}
        <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/images/bg1.jpeg" className="d-block w-100 home" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src="/images/bg7.jpg" className="d-block w-100 home" alt="background" />
                </div>
                <div className="carousel-item">
                    <img src="images/bg8.jpg" className="d-block w-100 home" alt="background" />
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
    <Menu />
    {/* <Gallery /> */}
    <Carousel />
    <CarouselCollection />
    <div className="relative">
            <div className="additional--wrapper home-page">
                <section className="additional-main">
                    <div id="testimonial_section_1" className="testimonial-main-container">
                        <div id="section_title" className="black section-title tc">
                            <h2 className='headreview' >CUSTOMER'S LOVE</h2>
                            <span className="fw6 customersay">What do our Customers say? </span>
                        </div>
                        <div id="users_list" className="flex flex-wrap list-card-main-container">
                            <div id="li_0" className="list-card w-100-l flex flex-column justify-between relative">
                                <p id="li_0_feedback" className="mt0 mb4 f6">Thankyou cake bohut zyaada yummy c🥰..Again everyone like the cake it was really very delicious..😋</p>
                                <div className="flex items-center">
                                    <img id="li_0_image" src="https://cdn.dotpe.in/longtail/addpages/user-dummy-image.svg" className="card-image" />
                                    <div>
                                        <div id="li_0_name" className="f5 b pb1">Harveen</div>
                                    </div>
                                </div>
                            </div>
                            <div id="li_1" className="list-card w-100-l flex flex-column justify-between relative">
                                <p id="li_1_feedback" className="mt0 mb4 f6">Decoration bohat Achi c.🥰..btw tasty c..tysm for beautiful cake.🥳
                                </p>
                                <div className="flex items-center">
                                    <img id="li_1_image" src="https://cdn.dotpe.in/longtail/addpages/user-dummy-image.svg" className="card-image" />
                                    <div>
                                        <div id="li_1_name" className="f5 b pb1">Jashanpreet</div>
                                    </div>
                                </div>
                            </div>
                            <div id="li_2" className="list-card w-100-l flex flex-column justify-between relative">
                                <p id="li_2_feedback" className="mt0 mb4 f6"> Thankyou so much💕It was an absolute masterpiece...not only did it look stunning with its meticulos design and flawless presentation,🤩 but the taste was out of this world.</p>
                                <div className="flex items-center">
                                    <img id="li_2_image" src="https://cdn.dotpe.in/longtail/addpages/user-dummy-image.svg" className="card-image" />
                                    <div>
                                        <div id="li_2_name" className="f5 b pb1">Abhishek Gupta</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className="flex justify-center items-center view-more-btn--container">
                            <button className="view-more-btn">
                                <span className="w-100 tc" onClick={()=>nav('/reviews')}>View More</span>
                            </button>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    <WhyChoose />
    <Contactus />
    <Footer />

    
    
    </>
    )

}
export default Home;