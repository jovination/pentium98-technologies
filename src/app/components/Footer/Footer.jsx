import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
    <div className='footer_ui'>
        <div className="ui_ft">
        <div className="ui_f_seg seg_l_1" >
            <a className='footer_t'
            href="">
                Pentium98
            </a>
            <div className="social_links">
                <ul className='link_icons'>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-github"></i></a></li>
                </ul>
            </div>
        </div>
        <div className="ui_f_seg seg_l_2">
        <a className='footer_t'
            href="">
                useful links
            </a>
            <div className="useful_links">
                <div className='web_links'>
                <li><a href="">home</a></li>
                <li><a href="">about</a></li>
                <li><a href="">services</a></li>
                <li><a href="">products</a></li>
                <li><a href="">client</a></li>
                </div>
            </div>
        </div>
        <div className="ui_f_seg  seg_l_2">
        <a className='footer_t'
            href="">
                our services
            </a>
            <div className="services_links">
            <div className='web_links'>
                <li><a href="#software-development">Software Development</a></li>
                <li><a href="#mobile-app-development">Mobile App Development</a></li>
                <li><a href="#enterprise-applications">Enterprise Applications</a></li>
                <li><a href="#penetration-testing">Penetration Testing</a></li>
                <li><a href="#it-system-auditing">IT System Auditing</a></li>
            </div>
        </div>
        </div>
        <div className="ui_f_seg seg_l_2">
        <a className='footer_t'
            href="">
                about us
            </a>
            <div className='web_links abt_txt'>
                <li>
                    <a href="">
                    Pentium98 Technology is the software company that helps you build great products. With a focus on innovation and excellence.
                    </a>
                </li>
            </div>
        </div>
        </div>
       <div className="footer_ui_1">
        <div className="copy_right">
            <p>
            &copy; 2024 Pentium98. All rights reserved.
            </p>
        </div>
       </div>
    </div>
  )
}

export default Footer
