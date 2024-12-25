// import React from 'react'
// import './Footer.css'
// import Footer_logo from '../Assets/logo_big.png'
// import Insta_logo from '../Assets/instagram_icon.png'
// import pin_logo from '../Assets/pintester_icon.png'
// import what_logo from '../Assets/whatsapp_icon.png'
// const Footer = () => {
//   return (
//     <div className='footer'>
//         <div className="footer-logo">
//             <img src={Footer_logo} alt="footer logo img" />
//             <p>Shopper</p>
//         </div>
//         <ul className="footer-link">
//             <li>Company</li>
//             <li>Offices</li>
//             <li>Products</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//         <div className="footer-social-icon">
//             <div className="footer-icon-container">
//                 <img src={Insta_logo} alt="insta logo" />
//             </div>
//             <div className="footer-icon-container">
//                 <img src={pin_logo} alt="pintester logo" />
//             </div>
//             <div className="footer-icon-container">
//                 <img src={what_logo} alt="whatsapp logo " />
//             </div>
            
//         </div>

      
//     </div>
//   )
// }

// export default Footer



// Footer.js
import React from 'react';
import './Footer.css';
import Footer_logo from '../Assets/logo_big.png';
import Insta_logo from '../Assets/instagram_icon.png';
import pin_logo from '../Assets/pintester_icon.png';
import what_logo from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={Footer_logo} alt="footer logo" />
            <p>Shopper</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Offices</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={Insta_logo} alt="Instagram" />
            </div>
            <div className="footer-icon-container">
                <img src={pin_logo} alt="Pinterest" />
            </div>
            <div className="footer-icon-container">
                <img src={what_logo} alt="WhatsApp" />
            </div>
        </div>
        <hr className="footer-line" />
        <div className="footer-copyright">
            <p>ALL RIGHTS RESERVED 2024</p>
        </div>
    </div>
  );
}

export default Footer;
