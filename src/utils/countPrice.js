export default function Price(cards) {
  const prices = [];

  cards.map((card) => {
    const price = card.actual_price;
    return prices.push(price * card.quantity);
  });

  const totalPrice = prices.reduce((sum, price) => sum + price, 0);

  return totalPrice.toFixed(2);
}
