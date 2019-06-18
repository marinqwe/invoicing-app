import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const CURRENT_INVOICE_ITEMS_QUERY = gql`
  query CURRENT_INVOICE_ITEMS_QUERY($id: ID!) {
    invoice(where: { id: $id }) {
      id
      items {
        id
        description
        price
      }
    }
  }
`;

const DeleteItemBtn = styled.div`
  width: auto;
  color: black;
  border: 0;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.3rem 0.4rem;
  height: 3rem;
  cursor: pointer;
`;

class DeleteItem extends Component {
  // APOLLO MANUAL UPDATE AFTER MUTATION
  update = (cache, payload) => {
    //Manually update the cache on the client, so it matches the server
    //read cache for the items we want
    const data = cache.readQuery({ query: CURRENT_INVOICE_ITEMS_QUERY, variables: { id: this.props.invoiceId } });

    //filter the deleted item out
    data.invoice.items = data.invoice.items.filter(item => item.id !== payload.data.deleteItem.id);

    //put the items back
    cache.writeQuery({ query: CURRENT_INVOICE_ITEMS_QUERY, data });

    return null;
  };

  render() {
    return (
      <Mutation mutation={DELETE_ITEM_MUTATION} variables={{ id: this.props.itemId }} update={this.update}>
        {deleteItem => (
          <DeleteItemBtn
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteItem().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </DeleteItemBtn>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
