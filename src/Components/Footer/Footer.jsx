import React from 'react'

import './Footer.css'
import footer_logo from '../Assets/logo-img.jpg'
import Whatsapp_icon from '../Assets/Whatsapp-icon.png'
import Instagram_icon from '../Assets/Instagram-icon.png'
import telegram_icon from '../Assets/telegram_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <a class="whatsapp" href="https://wa.me/+919852514744" target="_blank"><img src={Whatsapp_icon} alt="" /></a>
                </div>
                <div className="footer-icon-container">
                   <a class="instagram" href="https://www.instagram.com/prakash_bhardvaj?utm_source=qr&igsh=MTNua2x6ZjRuZ3Q3Mg== " target="_blank"> <img src={Instagram_icon} alt="" /> </a>
                </div>
                <div className="footer-icon-container">
                   <a class="telegram" href="https://t.me/Om_prakas1" target="_blank"> <img src={telegram_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-copy-right">
                <hr />
                <p>Copyright @ 2023 - All Reserved</p>
            </div>

        </div>
    )
}

export default Footer
