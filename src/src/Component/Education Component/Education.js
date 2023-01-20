import React from 'react'
import './Education.css'

function Education() {
    return (
        <section className='education_wrapper'>
            <h2>Experience</h2>
            <h1>My Working Experience</h1>
            <div className='straight-line-wrapper'>
                <div className='education_inner_outer_wrapper'>
                    <div className='straight-line'>
                        <div className='education_dots primary'>01</div>
                        <div className='education_dots highschool'>02</div>
                    </div>
                    <div className='education_inner_wrapper'>
                        <div className='education_point primary'>
                            <p className='education_level'>OZB Group - E-commerce Intern</p>
                            <h5 className='workspace'>August 2021 - Present</h5>
                            <h5 className='time_working'>I am currently employed at OZB Group as a E-Commerce intern. As an intern, my major emphasis is learn how to  utillize various data sources to perform qualitative research via specific marketplace web data scrapping software to gather my data analytic reports to the procurement teams. </h5>
                        </div>
                        <div className='education_point primary icon ozb'>
                            <div className='icon ozb'>

                            </div>
                        </div>
                    </div>

                    <div className='education_inner_wrapper'>
                        <div className='education_point primary'>
                            <p className='education_level'>Side: Social Media Copywriter</p>
                            <h5 className='workspace'>July 2021 - Present</h5>
                            <h5 className='time_working'>I am part of Walnut Group social media management team. My core resposibility is to write out eye-popping and catchy caption for social media posts.</h5>
                        </div>
                        <div className='education_point primary icon '>
                            <div className='icon walnut'>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='straight-line'>
                    <div className='education_dots primary'>01</div>
                    <div className='education_dots highschool'>02</div>
                    <div className='education_dots university'>03</div>
                </div> */}

            </div>
        </section>
    )
}

export default Education