import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Pagination from './Pagination';
import InvoiceListItem from './InvoiceListItem';
import { perPage } from '../config';

const QUERY_ALL_INVOICES = gql`
  query QUERY_ALL_INVOICES($skip: Int = 0, $first: Int = ${perPage}, $currency: String, $status: String) {
    invoices(orderBy: createdAt_DESC, first: $first, skip: $skip, where: { currency: $currency, status: $status }) {
      id
      status
      currency
      isPaid
      createdAt
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
      creditnote {
        id 
        name
        prices
        descriptions
      }
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InvoiceList = ({ page, currency, status }) => (
  <Center>
    <Pagination page={page} />
    <Query
      query={QUERY_ALL_INVOICES}
      variables={{
        status,
        currency,
        skip: page * perPage - perPage
      }}
    >
      {({ data, error, loading }) => {

        if (loading) return <p>Loading...</p>;
        if (error) return <Error error={error} />;
        if (!data.invoices.length)
          return (
            <div>
              <p>CLICK CREATE NEW OR THE BEAR GETS IT</p>
              <h1>(⌐■_■)--︻╦╤─ ʕ⊙ᴥ⊙ʔ</h1>
            </div>
          );

        return (
          <StyledList>
            {data.invoices.map(invoice => (
              <InvoiceListItem key={invoice.id} invoice={invoice} />
            ))}
          </StyledList>
        );
      }}
    </Query>
    <Pagination page={page} />
  </Center>
);

export default InvoiceList;
export { QUERY_ALL_INVOICES };
