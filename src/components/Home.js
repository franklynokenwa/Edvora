import React from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import Rides from './Rides'
import StyledHome from '../styles/Home.styled'
import Filter from './Filter'

const Home = () => {
  return (
    <StyledHome>
      <NavBar/>
      <NavLinks/>
    </StyledHome>
  )
}

export default Home