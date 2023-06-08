import React from 'react'
import CakeCarousel from './CakeCarousels'

const CakeContainer = ({ allData }) => {
    return (
        <div style={{maxWidth: 1280, marginLeft: "auto", marginRight: "auto", marginTop: 64 }}>
            <CakeCarousel data ={allData} />
        </div>
    )
}

export default CakeContainer