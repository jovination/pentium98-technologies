import React from 'react'
import './SectionOne.css'
import Image from 'next/image';

function SectionOne() {
  return (
    <div className='section_01'>
     <div className="upper_row">
        <div className="s_wraper">
        <p className='p-section-1'>Services</p>
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
                    <p className='p_ui_cx'>
                    Software Development
                    </p>
                    <p className='p_ui_p'>
                    We help tackle changing tech challenges by creating and designing applications that meet our community's needs                     </p>
                </div>
                <div className="wrap_ui_cx wrap_security">
                    <div className="icon_ui i_security">
                        <img className='icon-security' src="./assets/icon_security.svg" alt="" />
                    </div>
                    <p className='p_ui_cx'>
                    Cyber Security
                    </p>
                    <p className='p_ui_p'>
                    We provide comprehensive cybersecurity services, including penetration testing, vulnerability assessment, malware analysis, and cryptography                       </p>
                </div>
                <div className="wrap_ui_cx wrap_ai">
                    <div className="icon_ui i_ai">
                        <img className='icon-ai' src="./assets/icon_ai.svg" alt="" />
                    </div>
                    <p className='p_ui_cx'>
                    Ai, Big Data & Machine Learning              
                     </p>
                     <p className='p_ui_p'>
                     Our AI and Big Data teams are experts in the field of Artificial Intelligence, Machine Learning, and Natural Language Processing.
                     </p>
                    
                </div>
    </div>
      
    </div>
  )
}

export default SectionOne
