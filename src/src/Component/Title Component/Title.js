import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
        <div className='title-heading' id={props.id}>
            <h1>{props.name}</h1>
            <h2>{props.description}</h2>
        </div>
    )
}

export default Title