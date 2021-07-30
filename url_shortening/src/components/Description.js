import React from 'react'
import workingPersonImg from '../images/illustration-working.svg'
const Description = () => {
    return (
        <div className='Description'>
            <div className="container-wrapper">
                <div className="description-container">
                    <div className="descriptionTitle">More than just shorter links</div>
                    <div className="descriptionText">
                        Build your brand's recognition and get detailed insights on how your links are performing
                    </div>
                    <div className="getStartedBtn">
                        <input type="button" value='Get Started'/>
                    </div>
                </div>
                <div className="image-container">
                    <img src={workingPersonImg} alt="" />
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Description
