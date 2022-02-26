import React from 'react'
import {Link} from 'react-router-dom'
import hamburger from '../images/hamburger.png'
import StyledNavLinks from '../styles/NavLinks.styled'
import Filter from './Filter'

const NavLinks = (props) => {
  const {numberOfPastRides, numberOfUpComingRides} = props;
  const displayFilter = () => {
    return <Filter/>
  }
  return (
      <StyledNavLinks>
        <section>
          <p><Link to="/nearest-rides">Nearest rides</Link></p>
          <p><Link to="/upcoming-rides">Upcoming rides ({numberOfUpComingRides}) </Link></p>
          <p><Link to="/past-rides">Past rides ({numberOfPastRides}) </Link></p>
        </section>

        <aside>
          <img src={hamburger} alt='hamburger' img onClick={displayFilter}/><p>filters</p>
        </aside>

      </StyledNavLinks>      
  )
}

NavLinks.defaultProps = ({
  numberOfPastRides : '0',
  numberOfUpComingRides : '0'
})

export default NavLinks