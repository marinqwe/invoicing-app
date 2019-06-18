import moment from 'moment';
import TotalPrice from './CalcPrice';
import { formatCurrency } from './FormatMoney';

export default function({ items, name, currency, createdAt }) {
  const jsPDF = require('jspdf');
  const doc = new jsPDF();

  let text = [
    '```',
    `[INV-${name.yearIssued}-${name.sfx}]`,
    '----------------------------------',
    `Created on: ${moment(createdAt).format('MMMM Do YYYY')}`,
    '----------------------------------',
    `TOTAL: ${currency} ${TotalPrice(items)}`,
    '```'
  ];

  if(items.length > 0){
    items.forEach(item => {
      totalPrice += item.price;
      text.splice(4, 0, `${item.description}      ${formatCurrency(currency)}${item.price}`);
    });
  } else {
    text.splice(4, 0, 'No items added.');
  }

  doc.setFontSize(14);
  doc.text(text, 20, 20);

  doc.save(`INV-${name.yearIssued}-${name.sfx}.pdf`);
}
