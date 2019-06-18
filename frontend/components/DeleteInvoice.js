import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { QUERY_ALL_INVOICES } from './InvoiceList';
import { DeleteButton } from './styles/Button';

const DELETE_INVOICE_MUTATION = gql`
  mutation DELETE_INVOICE_MUTATION($id: ID!) {
    deleteInvoice(id: $id) {
      id
    }
  }
`;

class DeleteInvoice extends Component {
  // APOLLO MANUAL UPDATE AFTER MUTATION
  update = (cache, payload) => {
    //Manually update the cache on the client, so it matches the server
    //read cache for the items we want
    const data = cache.readQuery({ query: QUERY_ALL_INVOICES });
    //filter the deleted item out
    data.invoices = data.invoices.filter(invoice => invoice.id !== payload.data.deleteInvoice.id);
    //put the items back
    cache.writeQuery({ query: QUERY_ALL_INVOICES, data });
  };

  render() {
    return (
      <Mutation mutation={DELETE_INVOICE_MUTATION} variables={{ id: this.props.id }} update={this.update}>
        {deleteInvoice => (
          <DeleteButton
            onClick={() => {
              if (confirm('Are you sure you want to delete this invoice?')) {
                deleteInvoice().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </DeleteButton>
        )}
      </Mutation>
    );
  }
}

export default DeleteInvoice;
