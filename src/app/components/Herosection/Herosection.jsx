import React from 'react'
import './Herosection.css'
import Image from 'next/image';


function Herosection() {
  return (
    <div className='container'>
        <div className="section_one">
            <div className="left_col">
             <h1 className='h-main'>
                Where innovation meet <span>Security</span>
             </h1>
             <p className="p-main">
             We collaborate with innovative companies, startups, and individuals across Africa to create impactful solutions.             </p>
             <div className="btn_wrap">

            <div className='get-btn'>
                <a href="">
                Get Started 
                </a>
                <img className='arrow_icon' src='./assets/right.svg' alt="" />

                </div>

              <div className="learn_more">
                <a href="">
                    Learn More
                </a>
                <img className='arrow_icon' src='./assets/right_1.svg' alt="" />

              </div>
            

             </div>
            </div>
            <div className="right_col">

            </div>
        </div>
      
    </div>
  )
}

export default Herosection
