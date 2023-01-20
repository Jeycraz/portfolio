import React from 'react'
import './Survey.css'

function Survey() {
  return (
    <div className='survey-wrapper' id='survey'>
      <div className='survey'>
        <h2>Join Survey</h2>
        <p>Innovation in marketing can't comes without your honest opinion towards marketing campaigns.
          <br /><br />
          This is a once-in-a-lifetime oppurtunity for you to be part my thesis {`(there wont be another paper already please...)`}.
        </p>
        <a href='https://www.youtube.com/watch?v=lvwZQTB4iv4&ab_channel=CogDat' className='survey-button'>Survey Now</a>
      </div>
    </div>
  )
}

export default Survey