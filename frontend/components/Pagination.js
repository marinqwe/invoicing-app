import React from 'react';
import PaginationStyles from './styles/Pagination';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';

//pull "data about data" - invoicesConnection/itemsConnection/etc
//returns info about the data, in this case the amount of invoices in db
const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    invoicesConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = props => {
  return (
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error }) => {
        if (loading) return loading;
        const count = data.invoicesConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        return (
          <PaginationStyles>
            <Head>
              <title>
                Invoice list - page {page} of {pages}
              </title>
            </Head>
            <Link
              prefetch
              href={{
                pathname: '',
                query: { page: page - 1 }
              }}
            >
              <a className="prev" aria-disabled={page <= 1}>
                ⬅ Prev
              </a>
            </Link>
            <p>
              Page {page} of {pages}
            </p>
            <p>{count} invoices total!</p>
            <Link
              prefetch
              href={{
                pathname: '',
                query: { page: page + 1 }
              }}
            >
              <a className="prev" aria-disabled={page >= pages}>
                Next ➡
              </a>
            </Link>
          </PaginationStyles>
        );
      }}
    </Query>
  );
};

export default Pagination;
