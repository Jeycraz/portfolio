import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import badminton from './badminton.jpg'
import coding from './coding.jpg'
import gym from './gym.jpg'

import './image.css'
import Images from './Images'
import Dots from './Dots'

export default class Image extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            dotStyle: "dot"
        }
    };


    increment() {
        const isLastSlide = 2
        if (this.state.count !== isLastSlide) {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            })
            )

        } else {
            this.setState({
                count: 0
            })
        }
    }

    decrement() {
        const isFistSlide = 0
        if (this.state.count !== isFistSlide) {
            this.setState((prevState) => ({
                count: prevState.count - 1,
                dotStyle: "dot",
            })
            )

        } else {
            this.setState({
                count: 2
            })
        }
    }

    // highlight(number){
    //     if(this.state.count = number){
    //         this.setState({
    //             dotStyle:"dot active"
    //         })
    //     }else{
    //         this.setState({
    //             dotStyle:"dot"
    //     })
    //     }
    // }

    render() {
        const images = [
            {
                id: 0,
                src: badminton,
                alt: "badminton",
                description: "Badminton is my favourite sport."
            },
            {
                id: 1,
                src: coding,
                alt: "coding",
                description: "Coding is hard as hell."
            },
            {
                id: 2,
                src: gym,
                alt: "gym",
                description: "Gainz Bruh."
            }]

        return (
            <div className='image-wrapper'>
                <div className='inside-wrapper'>
                    <Images imageSlide={images[this.state.count].src} header={images[this.state.count].alt} description={images[this.state.count].description} />
                    <button className="increment-button" onClick={() => this.increment()}><FontAwesomeIcon icon={faArrowRight} className="arrow-right"></FontAwesomeIcon></button>
                    <button className="decrement-button" onClick={() => this.decrement()}><FontAwesomeIcon icon={faArrowLeft} className="arrow-left"></FontAwesomeIcon></button>
                    <Dots value={this.state.count} />
                </div>
            </div>
        )
    }
}