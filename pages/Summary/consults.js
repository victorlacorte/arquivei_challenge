// This _must_ be migrated to the backend

const discounts = [
  {
    max: 1000,
    price: 0.09,
  },
  {
    max: 1000,
    price: 0.16,
  },
  {
    max: Infinity,
    price: 0.24,
  },
];

/**
 *
 * @param {*} numberConsults
 * @param {*} discounts
 */
function price(numberConsults) {
  let total = 0;

  for (let i = 0; i < discounts.length; i += 1) {
    if (numberConsults > discounts[i].max) {
      total += discounts[i].max * discounts[i].price;
      numberConsults -= discounts[i].max;
    } else {
      return total + numberConsults * discounts[i].price;
    }
  }
}

export default price;
