import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin-bottom: 2rem;
  border: 1px solid ${props => props.theme.lightgrey};
  border-radius: 4px;
  & > * {
    margin: 0;
    padding: 10px 20px;
    border-right: 1px solid ${props => props.theme.lightgrey};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none; 
  }
`;

export default PaginationStyles;