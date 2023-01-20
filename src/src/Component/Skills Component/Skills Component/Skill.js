import React from 'react'
import './Skill.css'
import canva from './Canva_icon.png'
import html from './html-5.png'
import css from './css-3.png'
import javascript from './js.png'
import react from './react.png'
import photoshop from './photoshop.png'
import lightroom from './photoshop-lightroom.png'
import Title from '../../Title Component/Title'


const Skill = () => {
    return (
        <>
            <Title id='skills' name='Skills' description='Skills I Have Developed' />
            <div className='skill-main-container'>
                <div className='skill-wrapper'>
                    <div className='skill-inner-wrapper'>
                        <h1 className='skill-heading design'> Design</h1>
                        <ul className='icon-lists design'>
                            <li className='icon-list design canva'>
                                <img src={canva} alt='canva-icon' className='canva-icon'></img>
                                <p className='icon-name'>Canva</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Expert</p>
                                </div>

                            </li>
                            <li className='icon-list design photoshop'>
                                <img src={photoshop} alt='canva-icon' className='canva-icon'></img>
                                <p className='icon-name'>Photoshop</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Proficient</p>
                                </div>

                            </li>
                            <li className='icon-list design lightroom'>
                                <img src={lightroom} alt='canva-icon' className='canva-icon'></img>
                                <p className='icon-name'>Lightroom</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Proficient</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='skill-inner-wrapper'>
                        <h1 className='skill-heading webdev'> Front-End Development</h1>

                        <ul className='icon-lists webdev'>
                            <li className='icon-list webdev html'>
                                <img src={html} alt='canva-icon' className='canva-icon'></img>
                                <p className='icon-name'>HTML</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Proficient</p>
                                </div>

                            </li>
                            <li className='icon-list webdev css'>
                                <img src={css} alt='canva-icon' className='canva-icon'></img>
                                <p className='icon-name'>CSS</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Expert</p>
                                </div>
                            </li>
                            <li className='icon-list webdev javascript'>
                                <img src={javascript} alt='canva-icon' className='canva-icon'></img>

                                <p className='icon-name'>Javascript</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Novice</p>
                                </div>

                            </li>
                            <li className='icon-list webdev react'>
                                <img src={react} alt='canva-icon' className='canva-icon react'></img>
                                <p className='icon-name'>React</p>

                                <div className='level'>
                                    <p className='level-label'>Level</p>
                                    <p className='level-description'>Novice</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill