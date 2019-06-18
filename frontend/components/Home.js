import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { LOCAL_STATE_QUERY } from './Header';
import InvoiceList from './InvoiceList';
import CreateInvoice from './CreateInvoice';
import Search from './Search';
import Select from './styles/Select';
import Filter from './Filter';

const HomeStyles = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

class Home extends Component {
  state = {};

  filtersHandler = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const { currency, status } = this.state;

    return (
      <HomeStyles>
        <Search />
        <Filter>
          <Select name="currency" value={currency} onChange={this.filtersHandler}>
            <option value="" hidden>
              currency
            </option>
            <option value="usd">$ (USD)</option>
            <option value="eur">€ (EUR)</option>
            <option value="cad">$‎ (CAD)</option>
            <option value="jpy">¥‎ (JPY)</option>
          </Select>
          <Select name="status" value={status} onChange={this.filtersHandler}>
            <option value="" hidden>
              status
            </option>
            <option value="draft">draft</option>
            <option value="real">real</option>
            <option value="credited">credited</option>
          </Select>
        </Filter>
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => {
            return data.showCreateForm ? (
              <CreateInvoice />
            ) : (
              <InvoiceList status={status} currency={currency} page={this.props.page} />
            );
          }}
        </Query>
      </HomeStyles>
    );
  }
}

export default Home;
