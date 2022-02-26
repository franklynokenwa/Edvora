import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import hamburger from '../images/hamburger.png'
import Rides from './Rides'
import Filter from './Filter'
import StyledNavLinks from '../styles/NavLinks.styled'

const NavLinks = () => {
  return (
      <StyledNavLinks>
        
        <section>
          <p><Link to="/nearest-rides">Nearest rides</Link></p>
          <p><Link to="/upcoming-rides">Upcoming rides (4) </Link></p>
          <p><Link to="/past-rides">Past rides (2) </Link></p>
        </section>

        <aside>
          <a href='/'><img src={hamburger} alt='hamburger' img/></a> <p>filters</p>
        </aside>

      </StyledNavLinks>      
  )
}

export default NavLinks