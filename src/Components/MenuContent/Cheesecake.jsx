// import React, { Component } from 'react'
import { cheesecake } from './allData'
export default function Cheesecake() {
    return (
        <>
            <div className="menubox right-box cheesecakebg">
                <h2 className="cakeHead">CHEESECAKES</h2>
                <table className='table'>

                    <tr>
                        <th>NAMES</th>
                        <th><sup>1</sup>/<sub>2 </sub> KG</th>
                        <th>1 KG</th>
                    </tr>
                    {cheesecake.map((item, index) => {
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
