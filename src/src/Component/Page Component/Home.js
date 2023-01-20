import React from 'react'
import Hero from '../heroComponent/Hero'
import Aboutme from '../AboutMe Component/Aboutme'
import Education from '../Education Component/Education'
import Skill from '../Skills Component/Skills Component/Skill'
import Convince from '../Confession Component/Confession Component/Convince'
import Portfolio from '../Portfolio Component/Portfolio Component/Portfolio'
import Message from '../Footer Group/Message Component/Message'
import Footer from '../Footer Group/Footer Component/Footer'
import Copyright from '../Footer Group/Copyright Component/Copyright'

// import Aboutme from './src/Component/AboutMe Component/Aboutme';
// import Hero from './src/Component/heroComponent/Hero';
// import Education from './src/Component/Education Component/Education';
// import Convince from './src/Component/Confession Component/Confession Component/Convince';
// import Portfolio from './src/Component/Portfolio Component/Portfolio Component/Portfolio';
// import Skill from './src/Component/Skills Component/Skills Component/Skill';
// import Message from './src/Component/Footer Group/Message Component/Message';
// import Footer from './src/Component/Footer Group/Footer Component/Footer';
// import Copyright from './src/Component/Footer Group/Copyright Component/Copyright';

function Home() {
    return (
        <div className='home-style'>
            <Hero />
            <Aboutme />
            <Education />
            <Skill />
            <Convince />
            <Portfolio />
            <Message />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Home