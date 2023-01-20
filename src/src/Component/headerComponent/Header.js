import React, { Component } from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <nav className='header-container'>
        <NavLink to='/' className='logo'>Jeremy Chong</NavLink>
        <ul className='header-list'>
          <NavLink to='/' className='list'>Home</NavLink>
          <NavLink to='/portfolio' className='list'>Portfolio</NavLink>
          <NavLink to='/thesis' className='list'>Thesis</NavLink>
          <NavLink to='/contact' className='list'>Contact Us</NavLink>
        </ul>
      </nav>
    )
  }
}

