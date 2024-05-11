import React from 'react'
import './SectionOne.css'
import Image from 'next/image';

function SectionOne() {
  return (
    <div className='section_01'>
     <div className="upper_row">
        <div className="s_wraper">
        <p className='p-section-1'>Our Services</p>
        <h1 className='h-section-1'>
            Stay true to Our Core Values
        </h1>
         <p className='p-section-1-a'>
         We specialize in delivering high-quality, scalable, and secure solutions tailored to meet your business objectives. 
        </p>
     </div>
     <div className="explore-svc-btn">
         <a  href="">Explore Services</a>
         <img className='arrow_icon' src='./assets/right_1.svg' alt="" />

     </div>
     </div>
     <div className="lower_row">
                <div className="wrap_ui_cx wrap_software">
                    <div className="icon_ui i_software">
                        <img className='icon-soft' src="./assets/icon_soft.svg" alt="" />
                    </div>
                </div>
                <div className="wrap_ui_cx wrap_security">
                    <div className="icon_ui i_security">
                        <img className='icon-security' src="./assets/icon_security.svg" alt="" />
                    </div>
                </div>
                <div className="wrap_ui_cx wrap_ai">
                    <div className="icon_ui i_ai">
                        <img className='icon-ai' src="./assets/icon_ai.svg" alt="" />
                    </div>
                </div>
    </div>
      
    </div>
  )
}

export default SectionOne
