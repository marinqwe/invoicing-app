import React from 'react';
import styled from 'styled-components';
import DeleteItem from './DeleteItem';
import formatMoney, { formatCurrency } from '../lib/FormatMoney';

const ItemListStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 0;
`;

const ItemStyles = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemList = ({ items, invoiceId, currency }) => {
  return (
    <ItemListStyles>
      {items.map(item => (
        <ItemStyles key={item.id}>
          <DeleteItem invoiceId={invoiceId} itemId={item.id}>
            <p>{item.description}{' '}{formatCurrency(currency)}{' '}{formatMoney(item.price)}</p>
          </DeleteItem>
        </ItemStyles>
      ))}
    </ItemListStyles>
  );
};

export default ItemList;
