export default function(items) {
  let totalPrice = 0;
  items.forEach(item => {
    totalPrice += item.price;
  });
  return totalPrice;
}
