import React, { useState } from 'react'
import "./style.css"
import DryCake from './MenuContent/DryCake';
import Cakes from './MenuContent/Cakes';
import Cupcake from './MenuContent/Cupcake';
import Cheesecake from './MenuContent/Cheesecake';
function Menu() {
    const[showDrycakes, setShowDrycakes] = useState(true)
    const[showCakes, setShowCakes] = useState(false)
    const[showCupcakes, setShowCupcakes] = useState(false)
    const[showCheesecakes, setShowCheesecakes] = useState(false)
    const handleDrycakes = () => {
        setShowDrycakes(true);
        setShowCakes(false);
        setShowCupcakes(false);
        setShowCheesecakes(false);
    }
    const handleCakes = () => {
        setShowDrycakes(false);
        setShowCakes(true);
        setShowCupcakes(false);
        setShowCheesecakes(false);
    }
    const handleCupcakes = () => {
        setShowDrycakes(false);
        setShowCakes(false);
        setShowCupcakes(true);
        setShowCheesecakes(false);
    }
    const handleCheesecakes = () => {
        setShowDrycakes(false);
        setShowCakes(false);
        setShowCupcakes(false);
        setShowCheesecakes(true);
    }

    return (
        <>
            <section className="flex">
                <div className="menuIcon-container">
                    <img className='menuimg' src='/images/pink4.jpg' alt="menu" height={400} width={300} />
                    <h2 className='menu-logo'>MENU</h2>
                </div>
            </section>
            <section className="mainContainer">
                <span className="itemContainer">
                    <div className="menubox">
                        <div className="box">
                            <img className="cake-img" src="/images/heart-cake.png" alt="drycake" onClick={handleDrycakes} />
                            DRY CAKES
                        </div>
                        <div className="box">
                            <img className="cake-img" src="/images/cake.png" alt="cake" onClick={handleCakes} />
                            CAKES
                        </div>
                        <div className="box">
                            <img className="cake-img" src="/images/cupcake2.png" alt="cupcake" onClick={handleCupcakes} />
                            CUPCAKES
                        </div>
                        <div className="box">
                            <img className="cake-img" src="/images/cheesecake.png" alt="cheesecake" onClick={handleCheesecakes} />
                            CHEESECAKES
                        </div>
                    </div>

                    {showDrycakes?<DryCake />:null}
                    {showCakes?<Cakes />:null}
                    {showCupcakes?<Cupcake />:null}
                    {showCheesecakes?<Cheesecake />:null}
                </span>
            </section>

        </>

    )
}

export default Menu;