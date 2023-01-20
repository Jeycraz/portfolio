import React from 'react';
import './Portfolio.css';
import kitchen from './kitchen recipes.png'
import todo from './To do list.png'
import book from './Book-horizontal.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Title from '../../Title Component/Title';


const Portfolio = () => {
    return (
        <>
            <Title id='portfolio' name='Projects' description='Projects Learn From Youtube' />
            <div className='portfolio-wrapper'>
                <div className='portfolio one'>
                    <div className='portfolio-video'>
                        <p className='reminder'>Swipe right to see more
                            <FontAwesomeIcon icon={faArrowRight} className="arrow-right"></FontAwesomeIcon>
                        </p>
                        <img src={book} className='portfolio_inner_pic' alt='kitchen recipes'></img>
                    </div>
                    <div className='portfolio-description-wrapper'>

                        <ul className='tech-stacks'>
                            <li className='tech-stack'>#HTML</li>
                            <li className='tech-stack'>#Bootstrap</li>
                            <li className='tech-stack'>#Javascript</li>
                        </ul>

                        <div className='portfolio-heading'>
                            <h1>Book Management System</h1>
                        </div>

                        <div className='portfolio-descrption'>
                            <p>Online Library Management System is a system which maintains the information
                                about the books present in the library, their authors, the members of library to
                                whom books are issued, library staff and all.</p>
                        </div>
                        <a href='https://github.com/Jeycraz/book-management' className='source-code'>Source Code</a>
                    </div>
                </div>

                <div className='portfolio two'>
                    <div className='portfolio-video'>
                        <img src={kitchen} className='portfolio_inner_pic' alt='kitchen recipes'></img>
                    </div>
                    <div className='portfolio-description-wrapper'>

                        <ul className='tech-stacks'>
                            <li className='tech-stack'>#HTML</li>
                            <li className='tech-stack'>#CSS</li>
                        </ul>

                        <div className='portfolio-heading'>
                            <h1>Kitchen Recipe </h1>
                        </div>

                        <div className='portfolio-descrption'>
                            <p>
                                A simple kitchen recipe page that displays the details of the recipe. This one is more basic because it is entirely build with pure CSS and HTML only. I learn a lot about flex and grid from this one.
                            </p>
                        </div>
                        <a href='https://github.com/Jeycraz/Kitchen-Recipe' className='source-code'>Source Code</a>
                    </div>
                </div>

                <div className='portfolio three'>
                    <div className='portfolio-video'>
                        <img src={todo} className='portfolio_inner_pic' alt='To-Do list'></img>
                    </div>
                    <div className='portfolio-description-wrapper'>

                        <ul className='tech-stacks'>
                            <li className='tech-stack'>#HTML</li>
                            <li className='tech-stack'>#Bootstrap</li>
                            <li className='tech-stack'>#Javascript</li>
                        </ul>

                        <div className='portfolio-heading'>
                            <h1>To Do List Application</h1>
                        </div>

                        <div className='portfolio-descrption'>
                            <p>It is a simple to-do-list application where you can write down your works inside the input text field. I learn how to push the items on the array and displayed the inputted value </p>
                        </div>
                        <a href='https://github.com/Jeycraz/To-Do-List' className='source-code'>Source Code</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Portfolio