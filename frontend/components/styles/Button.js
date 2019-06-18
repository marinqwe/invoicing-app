import styled from 'styled-components';

const Button = styled.button`
  width: auto;
  background: ${props => props.theme.blue};
  color: white;
  border: 0;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  height: 4rem;
  margin: 0.4rem 0.4rem 0.2rem 0;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;

const CreditButton = styled.button`
  width: auto;
  background: ${props => props.theme.black};
  color: white;
  border: 0;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem 0.6rem;
  height: 4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
  &:hover{
    background: ${props => props.theme.blue}
  }
`;

const DeleteButton = styled.button`
  width: auto;
  background: ${props => props.theme.grey};
  color: white;
  border: 0;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem 0.6rem;
  height: 4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
`;


const UpdateButton = styled.button`
  width: auto;
  background: ${props => props.theme.black};
  color: white;
  border: 0;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0.5rem 0.6rem;
  height: 4rem;
  margin: 0.2rem 0.4rem 0.2rem 0;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
  }
  &:hover{
    background: ${props => props.theme.blue}
  }
`;

export default Button;
export { DeleteButton, UpdateButton, CreditButton };