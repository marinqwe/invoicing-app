import styled from 'styled-components';

const SelectStyles = styled.select`
  display: flex;
  width: 8.5rem;
  height: 3rem;
  background: white;
  color: gray;
  padding-left: 3px;
  font-size: 1.6rem;
  border: none;
  margin: 1.3rem 0.3rem;
  cursor: pointer;
  &:hover{
    color: black;
    border-bottom: 2px solid ${props => props.theme.lightgrey};
  };
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default SelectStyles;
