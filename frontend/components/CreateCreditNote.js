import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Toggle } from './TogglePaid';

const CREDIT_NOTE_MUTATION = gql`
  mutation CREDIT_NOTE_MUTATION($items: Item!, $currency: String!, $invoiceId: ID!) {
    createCreditnote(items: $items, currency: $currency, invoiceId: $invoiceId) {
      id
      descriptions
      prices
    }
  }
`;

const CreditNote = ({ invoice: { items, id, currency, status }, children }) => {
  return (
    <Mutation mutation={CREDIT_NOTE_MUTATION} variables={{ items, invoiceId: id, currency }}>
      {(createCreditnote, { error, loading }) => {
        return (
          <Toggle
            disabled={status === 'CREDITED' || loading}
            onClick={async () => {
              await createCreditnote();
            }}
          >
            {children}
          </Toggle>
        );
      }}
    </Mutation>
  );
};

export default CreditNote;
