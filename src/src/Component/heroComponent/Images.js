import './images.css'

import React from 'react'

const Images= (images)=>{
    return(
    <div className='carousel-container'>   
        <h3 className='hobby_heading'>My Hobby</h3>
        <img src={images.imageSlide} alt={images.alt} className="carousel"></img>
        <h3 className='header'>{images.header}</h3>
        <p className='description'>{images.description}</p>
    </div>
)
}


export default Images