import styled from 'styled-components';

const InvoicePreview = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  padding: 20px;
  font-size: 1.4rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const GenerateBtn = styled.button`
  width: auto;
  background: ${props => props.theme.grey};
  color: white;
  border: 0;
  font-size: 1.4rem;
  font-weight: 600;
  padding-bottom: 0.4rem 0 2rem 0;
  height: 4rem;
  margin: 0.4rem 0.4rem;
  cursor: pointer;
  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

export default InvoicePreview;
export { GenerateBtn };
