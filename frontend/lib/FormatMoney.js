export function formatCurrency(currency) {
  if (currency === 'USD') return '$';
  if (currency === 'JPY') return '¥';
  if (currency === 'CAD') return '$';
  return '€';
}

export default function(amount) {
  return amount.toFixed(2);
}
