import React from 'react'
import './Videohero.css'
import video from './Loopvideo.mp4'

function Videohero() {
  return (
    <div className='videohero-wrapper'>
      <video controls muted autoPlay loop className='video-sizing'>
        <source src={video} type="video/mp4" />
      </video>
      <div className='video-action-wrapper'>
        <h3>A deep dive into my thesis proposal.</h3>
        <a href='#survey'>Join Survey</a>
      </div>
    </div>
  )
}

export default Videohero