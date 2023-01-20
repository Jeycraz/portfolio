import React from 'react'
import './Thesis.css'
import Copyright from '../Footer Group/Copyright Component/Copyright'
import Videohero from './Videohero Component/Videohero'
import Barchart from './Barchart Component/Barchart'
import Thesisproposal from './Thesisproposal Component/Thesisproposal'
import Titlehero from './Titlehero Component/Titlehero'

import Survey from './Survey Component/Survey'

function Thesis() {
    return (
        <>
            <div className='thesis-container'>
                <Videohero />
                <Titlehero />
                <Barchart />
                <Thesisproposal />
                <Survey />
                <Copyright />
            </div>
        </>
    )
}

export default Thesis