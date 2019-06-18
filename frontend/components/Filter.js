import React from 'react';
import styled from 'styled-components';

const FilterStyles = styled.div`
  display: flex;
  justify-content: center;
`;

const Filters = (props) => (
  <FilterStyles>
    <p>Filter by: </p>
    {props.children}
  </FilterStyles>
);

export default Filters;
