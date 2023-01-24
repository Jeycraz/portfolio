import React, { useState } from 'react'
import './Aboutme.css'
import personal_picture from './Personal_picture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Extradetail from './Extradetail'
import resume from './Resume.pdf'


function Aboutme() {
    const [isShow, setIsShow] = useState(false)

    const detailButtonClick = () => {
        setIsShow(true)
    }

    const closeButtonClick = (input) => {
        if (input === false) {
            setIsShow(false)
        }
    }

    return (
        <>
            {!isShow ?
                <section className='Aboutme_section' id='About-me'>
                    <div className='Aboutme_wrapper'>
                        <div className='personal_picture_frame'>
                            <img src={personal_picture} className='personal_picture' alt="jeremy is smiling at the camera" />
                        </div>
                        <div className='Aboutme_words'>
                            <div className='Aboutme_heading_parent'>
                                <h1 className='Aboutme_heading'>About Me</h1>
                            </div>
                            <span className='question-wrapper'>
                                <FontAwesomeIcon icon={faQuestionCircle} className="question_circle" onClick={detailButtonClick}></FontAwesomeIcon>
                                <div className='question_description'>Please click to know more about me.</div>
                            </span>

                            <p className='Aboutme_description'>
                                Hi.I'm Jeremy Chong! I am driven by a learning desire to learn new things. I am currently pursuing an International Business degree at HangZhou Normal University Alibaba Business School. <br /><br></br>
                                Eager to join an internship as an E-commerce digital marketing to help establish strong branding images to increase sales conversion rate in assisting in developing and implemeneting marketing campaign and E-commerce website operation. Strong actual real-life experience background in Facebook marketing campaign.
                            </p>
                            <a href={resume} download="resume" className='redirect_CV_Button'>Download Resume</a>

                        </div>
                    </div>
                </section>
                :
                <Extradetail closeButtonClick={closeButtonClick} />
            }
        </>
    )
}

export default Aboutme