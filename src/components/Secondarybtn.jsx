import React from 'react'
import rightArrow from "@/app/(web)/assets/images/right-arrow.png"
import Image from 'next/image'
const Secondarybtn = () => {
    return (
        <>
            <div className="btn-wrapper">
                <div className="btn-fill"></div>
                <div className="btn-content">
                    <div className="left-icon">
                        <Image src={rightArrow} className='img-fluid' alt="" />
                    </div>
                    <div className="btn-text">GET STARTED</div>
                </div>
            </div>
        </>
    )
}

export default Secondarybtn
