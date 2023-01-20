import React, { useEffect, useState } from 'react'
import './hero.css'
const Hero = () => {
    const description = ["Student", "Sport-Fan", "Gym-Lad", "Aspiring Web Developer"]
    const [descriptionIndex, setDescriptionIndex] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDescriptionIndex(descriptionIndex =>
                descriptionIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (descriptionIndex === description.length) {
            setDescriptionIndex(0);
        }
    }, [descriptionIndex, description.length])

    return (
        <section className='wrapper'>
            <div className='wrapper-inner'>
                <div className='hero-wrapper'>
                    <div className='hero-title'>
                        <h3>I'm a</h3>
                        <div className='hero-main-title-wrapper'>
                            <h1>{`{`}</h1>
                            <h1 className='hero-main-title'>{`${description[descriptionIndex]}`}</h1>
                            <h1>{`}`}</h1>
                        </div>
                        <p className='hero-title-caption'>Overview of my skills and experience.</p>
                        <a href="#portfolio" className="hero-title-button" >My Portfolio </a>
                    </div>
                </div>
                <div className='image-carousel' onClick={toggleActive}>
                    <div className={isActive ? 'portrait-pic active' : 'portrait-pic'}>
                        <div className='picture-circle'>
                            <li className='circle-icon'></li>
                            <li className='circle-icon'></li>
                            <li className='circle-icon'></li>
                            <li className='circle-icon'></li>
                        </div>
                        <div className='picture'></div>
                    </div>
                    {/* <Image /> */}
                </div>
            </div>
        </section>

    )
}

export default Hero

