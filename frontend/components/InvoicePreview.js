import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import InvoicePreviewStyles, { GenerateBtn } from './styles/Invoice';
import ItemList from './ItemList';
import generatePdf from '../lib/GeneratePdf';
import TotalPrice from '../lib/CalcPrice';
import formatMoney, { formatCurrency } from '../lib/FormatMoney';

const Preview = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

const InvoicePreview = ({ invoice, invoice: { id, name, items, currency, status, createdAt } }) => {
  const totalPrice = TotalPrice(items);
  
  return (
    <Preview>
      <GenerateBtn
        onClick={() => {
          generatePdf(invoice);
          console.log('Generated invoice');
        }}
        disabled={(status === 'CREDITED') || (totalPrice === 0)}
      >
        Generate PDF
      </GenerateBtn>
      <InvoicePreviewStyles>
        {' '}
        <div>
          ` ` `<br />
          [INV-{name.yearIssued}-{name.sfx}]<br />
          -----------------------------
          <br />
          Created on: {moment(createdAt).format('MMMM Do YYYY')}
          <br />
          {items.length > 0 ? (
            <>
              <ItemList items={items} invoiceId={id} currency={currency} />
              <br />
            </>
          ) : (
            <p>No items added.</p>
          )}
          -----------------------------
          <br />
          <p>
            TOTAL: {formatCurrency(currency)} {formatMoney(totalPrice)}
          </p>
          <br />` ` `
        </div>
      </InvoicePreviewStyles>
    </Preview>
  );
};

export default InvoicePreview;
