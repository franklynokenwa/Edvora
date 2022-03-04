import React,{useContext} from 'react';
import StyledFilter from '../styles/Filter.styled';
import ApiDataContext from './DataContext'


const Filter = (props) => {
  const {filterDisplay} = props;
  const rideData = useContext(ApiDataContext)
  console.log(rideData);


  return (
    <StyledFilter style={{visibility: filterDisplay}}>
        <p>Filters</p>
        <hr/>
        <form>
            <select>
              {rideData.map((items) => {
                const {state} = items
                return(
                  <option value={state}>{state}</option>
                )
              })}
            </select>
            <select>
              {rideData.map((items) => {
                const {city} = items
                return(
                  <option value={city}>{city}</option>
                )
              })}
            </select>
        </form>
    </StyledFilter>
  )
}

export default Filter