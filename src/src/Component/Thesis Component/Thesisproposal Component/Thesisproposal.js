import React from 'react'
import './Thesisproposal.css'
import people from './people-icon.svg'
import halfpeople from './people-half-fill.svg'

function Thesisproposal() {
    return (
        <div className='thesisprop-wrapper'>
            <div className='thesisprop-heading'>
                <p>Planning for the next step</p>
                <h3>The next normal in marketing experience</h3>
            </div>
            <div className='thesisprop-text-wrapper'>
                <h4 className='thesisprops-text-heading'>
                    An end to 'normal' marketing approach
                </h4>
                <div className='thesisprop-description-wrapper'>
                    <div className='thesisprop-description'>
                        <div className='thesisprop-text'>
                            <p>
                                Rather than sticking to the famlliar patterns and brands, consumers have embraced changed their approach towards marketing due to Gen Z inherent behavior of more likely to filter out " the cringy advertisement".
                            </p>
                        </div>
                        <div className='thesisprops-icon-wrapper'>
                            <div className='thesisprop-icon-text'>
                                <p> <span>16.5%</span> of brands have switched brands or retailers</p>
                                <div className='thesisprop-people-wrapper'>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                    <img src={people} alt='people icon' className='thesisprops-people-icon'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thesisproposal