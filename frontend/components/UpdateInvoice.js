import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import Form from './styles/Form';
import Error from './ErrorMessage';
import { UpdateButton } from './styles/Button';

const UPDATE_INVOICE_MUTATION = gql`
  mutation UPDATE_INVOICE_MUTATION($id: ID!, $currency: String, $status: String, $isPaid: Boolean) {
    updateInvoice(id: $id, currency: $currency, status: $status, isPaid: $isPaid) {
      id
      currency
      status
      isPaid
    }
  }
`;

class UpdateInvoice extends Component {
  state = {};

  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const vars = this.state;
    const { id, currency, isPaid, status, name } = this.props.invoice;
    vars.id = id;

    return (
      <Mutation mutation={UPDATE_INVOICE_MUTATION} variables={vars}>
        {(updateInvoice, { error, loading }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                await updateInvoice();
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="name">
                  INV-{name.yearIssued}-{name.sfx}
                </label>
                <div>
                  <label htmlFor="currency">
                    <p>Currency: </p>
                    <select name="currency" defaultValue={currency} onChange={this.handleChange}>
                      <option value="USD">$ (USD)</option>
                      <option value="EUR">€ (EUR)</option>
                      <option value="CAD">$‎ (CAD)</option>
                      <option value="JPY">¥‎ (JPY)</option>
                    </select>
                  </label>
                  <label htmlFor="status">
                    <p>Status(Default: DRAFT): </p>
                    <select name="status" defaultValue={status} onChange={this.handleChange}>
                      <option value="DRAFT">DRAFT</option>
                      <option value="CREATED">CREATED</option>
                      <option value="CREDITED">CREDITED</option>
                    </select>
                  </label>
                  <UpdateButton type="submit">Update</UpdateButton>
                </div>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default UpdateInvoice;
export { UPDATE_INVOICE_MUTATION };
