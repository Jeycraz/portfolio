import React from 'react'
import './Titlehero.css'
import decline from './arrow-decline.svg'
import partialFill from './people-half-fill.svg'
import people from './people-icon.svg'

function Titlehero() {
  return (
    <div className='titlehero-wrapper'>
      <div className='titlehero-heading'>
        <h3>The reinvention of marketing</h3>
        <p>Every business owners need to rethink about their marketing approach towards Gen Z.</p>
      </div>
      <div className='picture-wrapper'>
        <div className='separation-straight'></div>
        <div className='increase-competition'>
          <div className='increase-competition-paragraph'>
            <p>There was a <span>16.5%</span> decline in US retail sales in April alone</p>
          </div>
          <div className='decline-icon-wrapper'>
            <img src={decline} alt='decline icon' className='decline-icon'></img>
          </div>
        </div>
        <div className='gen-z'>
          <div className='gen-z-text'>
            <p>Meanwhile <span>8%</span> of Gen Z consumer said they believe brands understand them.</p>
          </div>
          <div className='person-icon-wrapper'>
            <img src={partialFill} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
            <img src={people} alt='a partially fill person icon' className='partial-fill-icon'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Titlehero