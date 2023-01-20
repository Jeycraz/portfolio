import React from 'react'
import './Message.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Message = () => {
    return (
        <div className='message-wrapper' id='contact'>
            <div className='message-roles'>
                <div className='role-container'>
                    <FontAwesomeIcon icon={faEnvelope} className="envelope"></FontAwesomeIcon>
                    <img></img>
                    <h2 className='contact-header'>Have any projects in mind ?</h2>
                    <p className='contact-words'>send me a message and I will get back to you as soon as possible.</p>
                    <Link to='/contact' className='action-button'>contact me</Link>
                </div>
            </div>
        </div>
    )
}

export default Message