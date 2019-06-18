import React, { Component } from 'react';
import styled from 'styled-components';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { UpdateButton } from './styles/Button';
import CreateItem from './CreateItem';
import UpdateInvoice from './UpdateInvoice';
import InvoicePreview from './InvoicePreview';
import CreditInvoice from './CreditInvoice';
import TogglePaid from './TogglePaid';

const CURRENT_INVOICE_QUERY = gql`
  query CURRENT_INVOICE_QUERY($id: ID!) {
    invoice(where: { id: $id }) {
      id
      name {
        id
        sfx
        yearIssued
      }
      items {
        id
        description
        price
      }
      currency
      status
      isPaid
      createdAt
    }
  }
`;

const StyledInvoice = styled.div`
  margin: 5px;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const InvoiceOptions = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
  }
`;

class Invoice extends Component {
  state = {
    showUpdateForm: false,
    showCreateItemForm: true,
    totalPrice: 0
  };

  render() {
    const id = this.props.id,
      { showUpdateForm: showUpdate, showCreateItemForm, totalPrice } = this.state;

    return (
      <Query query={CURRENT_INVOICE_QUERY} variables={{ id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading data...</p>;
          if (error) return <Error error={error} />;
          const { id, name, items, currency, status, createdAt, isPaid } = data.invoice;

          return (
            <StyledInvoice>
              <InvoiceOptions>
                <p>
                  INV-{name.yearIssued}-{name.sfx}
                </p>
                <p>Status: {status}</p>

                <div>
                  <UpdateButton
                    disabled={status !== 'DRAFT'}
                    onClick={() => {
                      this.setState(() => ({ showUpdateForm: !showUpdate, showCreateItemForm: !showCreateItemForm }));
                    }}
                  >
                    {!showUpdate ? 'Update' : 'Cancel'}
                  </UpdateButton>
                  <CreditInvoice status={status} id={id}>
                    Credit
                  </CreditInvoice>
                  <TogglePaid vars={data.invoice} />
                </div>
                {showCreateItemForm && <CreateItem invoice={data.invoice} />}
                {showUpdate && <UpdateInvoice invoice={data.invoice} />}
              </InvoiceOptions>
              <InvoicePreview invoice={data.invoice} />
            </StyledInvoice>
          );
        }}
      </Query>
    );
  }
}

export default Invoice;
export { CURRENT_INVOICE_QUERY };
