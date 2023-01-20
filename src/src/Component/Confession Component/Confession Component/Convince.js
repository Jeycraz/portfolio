import React, { useEffect } from 'react'
import './Convince.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const Convince = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, []);

  return (
    <div className='convince-outer-wrapper'>
      <div className='convince-inner-wrapper'>
        <div className='box' >
          <div className='box-text 1' data-aos="fade-up">
            I have no computer science degree
          </div>
        </div>
        <div className='box'>
          <div className='box-text 2' data-aos="fade-up">
            But these are the mini project i've followed along from Youtube Tutorials.
          </div>
        </div>
        <div className='box'>
          <div className='box-text 3' data-aos="fade-up">
            Feel free to check out the source code.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Convince