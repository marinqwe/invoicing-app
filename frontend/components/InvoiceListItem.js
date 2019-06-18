import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteInvoice from './DeleteInvoice';
import Link from 'next/link';
import Button from './styles/Button';
import { formatCurrency } from '../lib/FormatMoney';
import AddCreditNote from './CreateCreditNote';

const StyledInvoice = styled.div`
  margin: 5px;
  border: 1px solid black;
  border-radius: 2px;
  display: flex;
  width: 25%;
  height: 20rem;
  flex-direction: column;
  justify-content: space-around;
  div{
    margin-bottom: 4px;
  }
`;

export default class InvoiceListItem extends Component {
  static propTypes = {
    invoice: PropTypes.object.isRequired
  };

  render() {
    const { invoice: { id, name, currency, items, status, creditnote } } = this.props;
    return (
      <StyledInvoice>
        <p>
          Invoice INV-{name.yearIssued}-{name.sfx}
        </p>
        <div>
          Number of items: {items.length}<br />
          Currency: {formatCurrency(currency)}
        </div>
        <div>
          <Link
            href={{
              pathname: '/invoice',
              query: { id }
            }}
          >
            <a>
              <Button>Details</Button>
            </a>
          </Link>
          <DeleteInvoice id={id}>Remove</DeleteInvoice>
          {/* TODO: AddCreditNote */}
        </div>
      </StyledInvoice>
    );
  }
}
