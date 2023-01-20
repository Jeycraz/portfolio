import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Headeredit.css'
import burgermenu from './menu-burger.svg'
import thesis from './book-open-reader.svg'
import portfolio from './user.svg'
import contact from './envelope.svg'
import home from './home.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'



export default class Headeredit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isActive: false,
    }
  }

  onOpenActive() {
    this.setState({
      isActive: true
    })
  }

  onCloseActive() {
    this.setState({
      isActive: false
    })
  }

  render() {
    return (
      <>
        <nav className='header-container'>
          <NavLink to='/' className='logo'></NavLink>
          <ul className='header-list'>
            <NavLink to='/' className='list'>Home</NavLink>
            <NavLink to='/portfolio' className='list'>Portfolio</NavLink>
            <NavLink to='/thesis' className='list'>Thesis</NavLink>
            <NavLink to='/contact' className='list'>Contact Us</NavLink>
          </ul>
          <button className="menu-wrapper" onClick={() => this.onOpenActive()}>
            <img className="menu-icon" src={burgermenu} alt='burger-menu icon'></img>
          </button>

        </nav>
        <div className={this.state.isActive ? "header-popup-wrapper active" : "header-popup-wrapper"}>
          <div className='header-popup-inner-wrapper'>
            <h1 className='header-popup-title'>Menu</h1>
            <ul className='header-popup-list'>
              <NavLink to='/' onClick={() => this.onCloseActive()} className='list'>Home<img src={home} alt='home icon' className='img-icon' /></NavLink>
              <NavLink to='/portfolio' onClick={() => this.onCloseActive()} className='list'>Portfolio<img src={portfolio} alt='portfolio icon' className='img-icon' /></NavLink>
              <NavLink to='/thesis' onClick={() => this.onCloseActive()} className='list'>Thesis<img src={thesis} alt='thesis icon' className='img-icon' /></NavLink>
              <NavLink to='/contact' onClick={() => this.onCloseActive()} className='list'>Contact<img src={contact} alt='home icon' className='img-icon' /></NavLink>
            </ul>
            <button onClick={() => this.onCloseActive()}><FontAwesomeIcon icon={faXmark} className="cancel-icon"></FontAwesomeIcon></button>
          </div>
        </div>
      </>
    )
  }
}
