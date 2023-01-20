import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper' id='footer'>
            <div className='footer-inner-wraps'>
                <div className='footer-wrap about-me'>
                    <h1 className='footer-heading about'>About Jeremy</h1>
                    <p className='about-description'>
                        Hi.I'm Jeremy Chong! I am driven by a learning desire to learn new things. I am currently pursuing an International Business degree at HangZhou Normal University Alibaba Business School.
                    </p>
                    <a href='#About-me' className='read-more'>read more</a>
                </div>

                <div className='footer-wrap quick-links'>
                    <h1 className='footer-heading quicklink'>Quick Links</h1>
                    <ul className='quick-link-lists'>
                        <li ><a href='#About-me' className='quick-link-list'>about me</a></li>
                        <li><a href='#contact' className='quick-link-list'>contact me</a></li>
                        <li><a href='#thesis' className='quick-link-list'>thesis</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer