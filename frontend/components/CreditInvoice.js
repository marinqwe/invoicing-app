import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CreditButton } from './styles/Button';

const CREDIT_INVOICE_MUTATION = gql`
  mutation CREDIT_INVOICE_MUTATION($id: ID!, $status: String!) {
    updateInvoice(id: $id, status: $status) {
      id
      status
    }
  }
`;

const CreditInvoice = props => (
  <Mutation mutation={CREDIT_INVOICE_MUTATION} variables={{ status: 'CREDITED', id: props.id }}>
    {(updateInvoice, { error, loading }) => {
      return (
        <CreditButton
          disabled={props.status === 'CREDITED' || loading}
          onClick={async () => {
            await updateInvoice();
          }}
        >
          {props.children}
        </CreditButton>
      );
    }}
  </Mutation>
);

export default CreditInvoice;
