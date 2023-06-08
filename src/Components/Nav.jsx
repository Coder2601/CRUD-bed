import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
    const nav = useNavigate();

    return (
        <>
            <section>
                <nav className="myNav">
                    <ul className='ul'>
                        <li><a href="admin" onClick={() => nav('/admin')}><i class="fa-solid fa-user"></i></a></li>
                        <Link to={'/'} className='linkstyle'><li><a href="#">HOME</a></li></Link>
                        <Link to={'/menu'} className='linkstyle'><li><a href="#menu">OUR MENU</a></li></Link>
                        <div className="btn-group" role="group">
                            <li onClick={() => nav('/gallery')} >
                                <a href="#">GALLERY</a>
                            </li>
                        </div>
                        <img className="logo" src="/images/ms cakeaholic2.jpg" width="110px" height="110px" />
                        <div className="btn-group">
                            <li data-bs-toggle="dropdown">
                                <a href="#shop">SHOP<span> <i className="fa-solid fa-caret-down"></i></span></a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-items" onClick={() => nav('/cart')}>Cart</li>
                                    <li className="dropdown-items" onClick={() => nav('/wishlist')}>Wishlist</li>
                                    <li className="dropdown-items" onClick={() => nav('/reviews')}>Reviews</li>
                                </ul>
                            </li>
                        </div>
                        <li><a href="#contact us" onClick={() => nav('/contact')}>CONTACT US</a></li>
                        <li><a href="login" onClick={() => nav('/login')}>LOG IN</a></li>
                        <li><a href="#" onClick={() => nav('/cart')} ><i class="fa-solid fa-cart-arrow-down"></i></a></li>

                    </ul>
                </nav>

            </section>

        </>
    )

}
