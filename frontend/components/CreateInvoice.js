import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import Error from './ErrorMessage';
import Router from 'next/router';
import Form from './styles/Form';
import styled from 'styled-components';
import { QUERY_ALL_INVOICES } from './InvoiceList';

//crazy good css
const CreateInvoiceStyles = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
  label {
    display: flex;
    justify-content: flex-start;
    height: 30px;
    input {
      position: absolute;
    }
    select {
      width: 70px;
      margin: 5px 5px 0 5px;
    }
  }
`;

const CREATE_INVOICE_MUTATION = gql`
  mutation CREATE_INVOICE_MUTATION($currency: String!, $status: String!, $isPaid: Boolean!) {
    createInvoice(currency: $currency, status: $status, isPaid: $isPaid) {
      id
    }
  }
`;

const LAST_CREATED_INVOICE_QUERY = gql`
  query LAST_CREATED_INVOICE_QUERY {
    invoices(last: 1) {
      id
      status
      currency
      isPaid
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
    }
  }
`;

class CreateInvoice extends Component {
  state = {
    status: 'DRAFT',
    currency: 'eur',
    isPaid: false
  };

  togglePaidHandler = () => {
    this.setState(prevState => ({
      isPaid: !prevState.isPaid
    }));
  };

  selectCurrencyHandler = e => {
    const value = e.target.value;

    this.setState(() => ({
      currency: value
    }));
  };

  changeStatusHandler = e => {
    const value = e.target.value;

    this.setState(() => ({
      status: value
    }));
  };

  render() {
    const { isPaid, currency, status } = this.state;

    return (
      <Mutation
        mutation={CREATE_INVOICE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: QUERY_ALL_INVOICES }]}
      >
        {(createInvoice, { error, loading }) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const res = await createInvoice();
                Router.push({
                  pathname: '/invoice',
                  query: { id: res.data.createInvoice.id }
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="name">New Invoice</label>
                <CreateInvoiceStyles>
                  <label htmlFor="currency">
                    <p>Currency: </p>
                    <select name="currency" value={currency} onChange={this.selectCurrencyHandler}>
                      <option value="usd">$ (USD)</option>
                      <option value="eur">€ (EUR)</option>
                      <option value="cad">$‎ (CAD)</option>
                      <option value="jpy">¥‎ (JPY)</option>
                    </select>
                  </label>
                  <label htmlFor="status">
                    <p>Status: </p>
                    <select name="status" value={status} onChange={this.changeStatusHandler}>
                      <option value="DRAFT">Draft</option>
                      <option value="CREATED">Created</option>
                    </select>
                  </label>
                  <label htmlFor="isPaid">
                  <div name="isPaid" onClick={this.togglePaidHandler}>
                  {isPaid ? '✔ PAID' : '✘ NOT PAID'}
                  </div>
                  </label>

                  <button type="submit">Create</button>
                </CreateInvoiceStyles>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}
export default CreateInvoice;
export { CREATE_INVOICE_MUTATION, LAST_CREATED_INVOICE_QUERY };
