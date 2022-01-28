import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className='top-part-footer'>
                    <img src='./images/logo.svg' alt='logo'/>
                    <div className='social-icons'>
                        <img src='./images/icon-facebook.svg' alt='' />
                        <img src='./images/icon-twitter.svg' alt='' />
                        <img src='./images/icon-pinterest.svg' alt='' />
                        <img src='./images/icon-instagram.svg' alt='' />
                    </div>
                </div>
            <div className='container'>
                
                <div className='footer-line'>
                    <span><a  href='google.com'>Our company</a></span>
                    <p><a href='./'>How we work</a></p>
                    <p><a href='./'>Why Insure</a></p>
                    <p><a href='./'>View Plans</a></p>
                    <p><a href='./'>Reviews</a></p>
                </div>

                <div className='footer-line'>
                <span><a  href='google.com'>Help me</a></span>
                    <p><a href='./'>FAQ</a></p>
                    <p><a href='./'>Terms of use</a></p>
                    <p><a href='./'>Privacy Policy</a></p>
                    <p><a href='./'>Cookies</a></p>
                </div>

                <div className='footer-line'>
                <span><a  href='google.com'>Contact</a></span>
                    <p><a href='./'>Sales</a></p>
                    <p><a href='./'>Support</a></p>
                    <p><a href='./'>Live chat</a></p>
                    <p><a href='./'>Reviews</a></p>
                </div>

                <div className='footer-line'>
                <span><a  href='google.com'>Others</a></span>
                    <p><a href='./'>Careers</a></p>
                    <p><a href='./'>Press</a></p>
                    <p><a href='./'>Licenses</a></p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
