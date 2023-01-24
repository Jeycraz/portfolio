import React from 'react'
import './Copyright.css'


function Copyright() {
    return (
        <div className='copyright-wrapper' id='copyright'>
            <div className='copyright-inner-wraps'>
                <div className='copyright-wrap'>
                    <p className='copyright-description'>
                        copyright all rights reserved

                        <a href='#About-me' className='copyright-reserved'>jeremy.com</a>
                    </p>
                </div>

                <div className='copyright-wrap quick-links'>
                    <div className='social-media-links'>
                        <a href='https://instagram.com/xjeremyx1?igshid=ZDdkNTZiNTM=' className='social-media-link instagram'></a>
                        <a href='https://www.linkedin.com/in/jeremy-chee-yuan-chong-2234371a0' className='social-media-link linkedin'></a>
                        <a href='https://github.com/Jeycraz' className='social-media-link github'></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Copyright