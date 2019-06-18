import React, { Component } from 'react';
import Form from './styles/Form';
import Error from './ErrorMessage';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { CURRENT_INVOICE_QUERY } from './Invoice';
import { formatCurrency } from '../lib/FormatMoney';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION($description: String!, $price: Float!, $invoiceId: ID!) {
    createItem(description: $description, price: $price, invoiceId: $invoiceId) {
      id
      description
      price
    }
  }
`;

class CreateItem extends Component {
  state = {
    createSuccess: false,
    description: '',
    price: ''
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState(() => ({ [name]: val }));
  };

  render() {
    const invoiceId = this.props.invoice.id;
    const { description, price } = this.state;

    return (
      <Mutation mutation={CREATE_ITEM_MUTATION}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();

              await createItem({
                variables: { invoiceId, description, price },
                refetchQueries: () => [{ query: CURRENT_INVOICE_QUERY, variables: { id: invoiceId } }]
              });
              this.setState(() => ({
                description: '',
                price: ''
              }));
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
            <div>Add an item to invoice</div>
              <label htmlFor="price">
                Item price ({formatCurrency(this.props.invoice.currency)})
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  id="price"
                  name="price"
                  placeholder="price"
                  required
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="description"
                  required
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
