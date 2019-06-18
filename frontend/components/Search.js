import React from 'react';
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/Dropdown';

function routeToInvoice(invoice) {
  Router.push({
    pathname: '/invoice',
    query: {
      id: invoice.id
    }
  });
}

const SEARCH_INVOICES_QUERY = gql`
  query SEARCH_INVOICES_QUERY($searchTerm: String!) {
    invoices(
      where: {
        OR: [
          { status_contains: $searchTerm }
          { currency_contains: $searchTerm }
          { name: { OR: [{ sfx_contains: $searchTerm }, { yearIssued_contains: $searchTerm }] } }
        ]
      }
    ) {
      id
      name {
        id
        sfx
        yearIssued
      }
      currency
      status
    }
  }
`;

class AutoComplete extends React.Component {
  state = {
    invoices: [],
    loading: false
  };

  onChange = debounce(async (e, client) => {
    console.log('Searching....');
    const search = e.target.value;

    this.setState(() => ({ loading: true }));

    if (search.length) {
      const res = await client.query({
        query: SEARCH_INVOICES_QUERY,
        variables: {
          searchTerm: search
        }
      });
      this.setState(() => ({
        invoices: res.data.invoices,
        loading: false
      }));
    } else {
      this.setState(() => ({
        loading: false
      }));
    }
  }, 350);

  render() {
    resetIdCounter();
    return (
      <SearchStyles>
        <Downshift
          itemToString={item => (item === null ? '' : `INV-${item.name.yearIssued}-${item.name.sfx}`)}
          onChange={routeToInvoice}
        >
          {//render prop that exposes useful props for dropdown
          ({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
            <div>
              <ApolloConsumer>
                {client => (
                  <input
                    {...getInputProps({
                      type: 'search',
                      placeholder: 'Search for invoices...',
                      id: 'search',
                      className: this.state.loading ? 'loading' : '',
                      onChange: e => {
                        e.persist();
                        this.onChange(e, client);
                      }
                    })}
                  />
                )}
              </ApolloConsumer>
              {isOpen && (
                <DropDown>
                  {this.state.invoices.map((item, index) => (
                    <DropDownItem {...getItemProps({ item })} key={item.id} highlighted={index === highlightedIndex}>
                      <p>
                        INV-{item.name.yearIssued}-{item.name.sfx} -- Status: {item.status}
                      </p>
                    </DropDownItem>
                  ))}
                  {!this.state.invoices.length && !this.state.loading && (
                    <DropDownItem>No invoices found.</DropDownItem> //inputValue can be added to show users search input
                  )}
                </DropDown>
              )}
            </div>
          )}
        </Downshift>
      </SearchStyles>
    );
  }
}

export default AutoComplete;
