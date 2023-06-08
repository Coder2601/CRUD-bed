// import React, { Component } from 'react'
import { cupcake } from './allData'
export default function Cupcake() {
    return (
        <>
            <div className="menubox right-box cupcakebg">
                <h2 className="cakeHead">CUPCAKES</h2>
                <table className='table'>
                    <tr>
                        <th>NAMES</th>
                        <th>SET OF 6</th>
                        <th>SET OF 12</th>
                    </tr>
                    {cupcake.map((item, index) => {
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
