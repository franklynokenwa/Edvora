import React from 'react'
import {Link} from 'react-router-dom'
import StyledNavBar from '../styles/NavBar.styled'
import userImage from '../images/user-image.png'

const NavBar = () => {
  return (
      <StyledNavBar>
        <h1><Link to='/' style={{color: 'white', textDecoration: 'none'}}>EDVORA</Link> </h1>
        <div>
          <h5>DRHUV SINGH</h5>
          <img src={userImage} alt='user'/>
        </div>
      </StyledNavBar>
      
  )
}

export default NavBar