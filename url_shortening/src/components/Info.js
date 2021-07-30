import React from 'react'
import BrandRecognition from '../images/icon-brand-recognition.svg'
import DetailRecords from '../images/icon-detailed-records.svg'
import FullyCustomizable from '../images/icon-fully-customizable.svg'

const Info = () => {
    return (
        <div className='Info'>
            <div className="info_desc">
                <div className="title">Advanced Statistics</div>
                <div className="desc">
                Track how your links are performing across the web with
                our advance statistics dashboard.
                </div>
            </div>
            <div className="info_charts">
                <div className="items">
                    <div className="item">
                        <img src={BrandRecognition} alt="" />
                        <div className="title">Brand Recognition</div>
                        <div className="desc">
                        Boost you brand recognition with each click. Generic links don't mean
                        a thing. Branded links help instill confidence in your content.
                        </div>
                    </div>
                    <div className="item">
                        <img src={DetailRecords} alt="" />
                        <div className="title">Detail Records</div>
                        <div className="desc">
                        Gain insights into who is clicking your links. Knowing when and where people
                        engage with your content helps inform better decisions.
                        </div>
                    </div>
                    <div className="item">
                        <img src={FullyCustomizable} alt="" />
                        <div className="title">Fully Customizable</div>
                        <div className="desc">
                        Improve brand awareness and content discoverability through customizable links,
                        supercharging audience engagement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
