import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import Rides from './Rides'
import StyledNavBar from '../styles/NavBar.styled'
import userImage from '../images/user-image.png'

const NavBar = () => {
  return (
      <StyledNavBar>
        <h1><Link to="/" >EDVORA </Link></h1>
        <div>
          <h5>DRHUV SINGH</h5>
          <img src={userImage} alt='user'/>
        </div>
      </StyledNavBar>

      
  )
}

export default NavBar