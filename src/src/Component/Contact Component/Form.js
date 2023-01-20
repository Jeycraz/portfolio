import React from 'react'
import './Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Copyright from '../Footer Group/Copyright Component/Copyright'

function Form() {
    return (
        <>
            <div className='form-outer-outer-wrapper'>
                <div className='form-outer-wrapper'>
                    <div className='caption-wrapper'>
                        <h1 className='caption-heading'>Let's chat.<br />
                            Tell me about your project.
                        </h1>
                        <p className='mini-caption'>
                            Let's create something together
                        </p>
                        <div className='email'>
                            <div className='email-icon-wrapper'>
                                <FontAwesomeIcon icon={faEnvelope} className='email-icon'></FontAwesomeIcon>
                            </div>
                            <p className='email-caption'>
                                Mail me at <br /><span className='email-link'>jeremyccy2001@gmail.com</span>
                            </p>
                        </div>
                    </div>

                    <div className='form-inner-wrapper'>
                        <form className='form-inner' action="https://formsubmit.co/jeremyccy2001@gmail.com" method="POST">
                            <h1 className='form-text'>Send me a message</h1>
                            <div className='input-field name'>
                                <input type="text" name="name" required></input>
                                <label for="Name">Name*</label>
                            </div>

                            <div className='input-field email'>
                                <input type="text" name="Email" required></input>
                                <label for="Email">Email*</label>
                            </div>

                            <p>Tell us more about your project*</p>
                            <textarea name='project-detail'></textarea>
                            <button type='submit' value="Send message">Send message</button>
                        </form>
                    </div>
                </div>

            </div>
            <Copyright />
        </>
    )
}

export default Form

