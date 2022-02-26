import React from 'react';
import StyledFilter from '../styles/Filter.styled';

const Filter = () => {
  return (
    <StyledFilter>
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