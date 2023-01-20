import React from 'react'
import './Extradetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// ***** Introduction Icons *****
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// ***** Interests Icons *****
import { faTableTennis } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faDrum } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'


const Extradetail = (props) => {
    const introductions = [
        { icon: faLocationPin, name: 'Kota Kinabalu, Sabah' },
        { icon: faBirthdayCake, name: 'February 1st,2001' },
        { icon: faEnvelope, name: 'Jeremyccy2001@gmail.com' },
        { icon: faPhone, name: '+6011-3314-5334' }
    ]

    const interests = [
        { icon: faDrum, name: 'Drumming' },
        { icon: faTableTennis, name: 'Badminton' },
        { icon: faDumbbell, name: 'Gym' },
        { icon: faCamera, name: 'Photography' }
    ]
    const listInterests = interests.map(interest =>
        <li className='interest_box'>
            <FontAwesomeIcon icon={interest.icon} className='interest_icon'>
            </FontAwesomeIcon>
            <p className='interest_name'> {interest.name}</p>
        </li>
    )

    const listIntroductions = introductions.map(introduction =>
        <li className='introduction_list'>
            <FontAwesomeIcon icon={introduction.icon} className='introduction_icon'>
            </FontAwesomeIcon>
            <p className='introduction_name'> {introduction.name}</p>
        </li>
    );

    const cancelIsClick = () => {
        props.closeButtonClick(false)
    }

    return (
        <section className='extradetail_wrapper'>
            <div className='extradetail_personal'>
                <h3 className='intro_heading'>Introduction</h3>
                <ul className='introduction'>
                    {listIntroductions}
                </ul>
            </div>
            <div className='extradetail_interest'>
                <h3 className='interest_heading'>Interests</h3>
                <ul className='interests'>
                    {listInterests}
                </ul>
            </div>
            <div className='cancel_button'>
                <FontAwesomeIcon icon={faX} className='cancel' onClick={cancelIsClick}></FontAwesomeIcon>
            </div>
        </section>
    )
}

export default Extradetail