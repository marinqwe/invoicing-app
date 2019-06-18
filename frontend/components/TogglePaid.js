import React from 'react';
import { Mutation } from 'react-apollo';
import { UPDATE_INVOICE_MUTATION } from './UpdateInvoice';
import styled from 'styled-components';


const Toggle = styled.div`
  cursor: pointer;
  font-size: 18px;
`;

const TogglePaid = ({ vars }) => (
  <Mutation mutation={UPDATE_INVOICE_MUTATION} variables={{ ...vars, isPaid: !vars.isPaid }}>
    {(updateInvoice, { error, loading }) => {
      return (
        <Toggle
          onClick={async () => {
            if(vars.creditnote) return null;
            await updateInvoice();
          }}
        >
          {vars.isPaid ? '✔ PAID' : '✘ NOT PAID'}
        </Toggle>
      );
    }}
  </Mutation>
);

export default TogglePaid;
export { Toggle };