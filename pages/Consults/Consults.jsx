import React from 'react';

import Button from 'components/Button';

import PurchaseSummary from './components/PurchaseSummary';

// const Consults = () => ['primary', 'success', 'error', 'alert', 'dark', 'extraDark', 'grey100', 'grey200', 'grey300', 'grey400'].map((color) => (
//   ['contained', 'outlined'].map((variant) => (
//     <Button color={color} variant={variant}>Comprar</Button>
//   ))));

const Consults = () => (
  <>
    <PurchaseSummary
      totalKeys={10}
      keyUnitPrice={0.24}
      originalTotal={2.40}
      discountedTotal={2.00}
      percentageDiscount={17.50}
    />

    <Button>Comprar</Button>
  </>
);

export default Consults;
