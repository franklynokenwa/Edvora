import React from 'react';
import StyledFilter from '../styles/Filter.styled';
import ApiDataContext from './DataContext'


const Filter = (props) => {
  const {filterDisplay} = props;
  return (
    <StyledFilter style={{visibility: filterDisplay}}>
        <p>Filters</p>
        <hr/>
        <form>
            <select>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
            </select>
            <select>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
                <option value="lagos">Lagos</option>
            </select>
        </form>
    </StyledFilter>
  )
}

export default Filter