import React, { Component, useState } from 'react'
import { cakes } from './allData';

export default function Cakes() {
    const [isHidden, setHidden] = useState(false)

    const handleShow = () => {
        console.log("show");
        setHidden(false)
    }
    const handleHide = () => {
        setHidden(true)
    }
    return (
        <>
            <div className="menubox right-box cakebg">
                <h2 className="cakeHead">CAKES</h2>
                <table className='table'>

                    <tr>
                        <th>NAMES</th>
                        <th><sup>1</sup>/<sub>2 </sub> KG</th>
                        <th>1 KG</th>
                    </tr>
                    {cakes.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.halfP}</td>
                                <td>{item.oneP}</td>
                            </tr>
                        )
                    })}

                </table>
            </div>
        </>
    )

}






{/* <tr>
                            <td>FRUIT CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1000/-</td>
                        </tr>
                        <tr>
                            <td>STRAWBERRY CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1200/-</td>
                        </tr>
                        <tr>
                            <td>BLUEBERRY CAKE</td>
                            <td>Rs 700/-</td>
                            <td>Rs 1300/-</td>
                        </tr>
                        <tr>
                            <td>PINEAPPLE CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1000/-</td>
                        </tr>
                        <tr>
                            <td>BUTTERSCOTCH CAKE</td>
                            <td>Rs 500/-</td>
                            <td>Rs 900/-</td>
                        </tr>
                        <tr>
                            <td>CHOCOLATE CAKE</td>
                            <td>Rs 550/-</td>
                            <td>Rs 950/-</td>
                        </tr>
                        <tr>
                            <td>OREO CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1100/-</td>
                        </tr>
                        <tr>
                            <td>KITKAT CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1100/-</td>
                        </tr>
                        <tr>
                            <td>FERRERO ROCHER CAKE</td>
                            <td>Rs 800/-</td>
                            <td>Rs 1500/-</td>
                        </tr>
                        <tr>
                            <td>RASMALAI CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1200/-</td>
                        </tr> */}
{/* </table>
                    <button className="button" onClick={handleShow}>View More</button>
                    <table id="cake">
                        <tr>
                            <td>GULAB JAMUN CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1200/-</td>
                        </tr>
                        <tr>
                            <td>PHOTO CAKE</td>
                            <td>Rs 700/-</td>
                            <td>Rs 1200/-</td>
                        </tr>
                        <tr>
                            <td>BISCOFF CAKE</td>
                            <td>Rs 700/-</td>
                            <td>Rs 1300/-</td>
                        </tr>
                        <tr>
                            <td>BLACK FOREST CAKE</td>
                            <td>Rs 450/-</td>
                            <td>Rs 900/-</td>
                        </tr>
                        <tr>
                            <td>WHITE FOREST CAKE</td>
                            <td>Rs 500/-</td>
                            <td>Rs 950/-</td>
                        </tr>
                        <tr>
                            <td>RED VELVET CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1200/-</td>
                        </tr>
                        <tr>
                            <td>CHOCO TRUFFLE CAKE</td>
                            <td>Rs 700/-</td>
                            <td>Rs 1400/-</td>
                        </tr>
                        <tr>
                            <td>BANOFEE CAKE</td>
                            <td>Rs 600/-</td>
                            <td>Rs 1200/-</td>
                        </tr>
                        <tr>
                            <td>COFFEE CARAMEL CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1250/-</td>
                        </tr>
                        <tr>
                            <td>NUTELLA HAZELNUT CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1300/-</td>
                        </tr>
                        <tr>
                            <td>CHOCOLATE CARAMEL CRUNCH CAKE</td>
                            <td>Rs 650/-</td>
                            <td>Rs 1300/-</td>
                        </tr>

                    </table>
                    <button id="viewless" className="button" onClick={handleHide}>View Less</button>
                    {this.state.isHidden ? null: <h2>Welcome to the channel</h2>} */}