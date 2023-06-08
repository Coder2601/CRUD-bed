// import React, { Component } from 'react'
import { dryCakes } from "./allData";
export default function DryCake() {
    return (
        <>
            <div className="menubox right-box drycakebg">
                <h2 className="cakeHead">DRY CAKES</h2>
                <table className='table'>
                    <tr>
                        <th>NAMES</th>
                        <th><sup>1</sup>/<sub>2 </sub> KG</th>
                        <th>1 KG</th>
                    </tr>
                    {dryCakes.map((item, index) => {
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
