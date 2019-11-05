import React from 'react';

import Button from 'components/Button';
import PurchaseSummary from 'components/PurchaseSummary';

// const Consults = () => ['primary', 'success', 'error', 'alert', 'dark', 'extraDark', 'grey100', 'grey200', 'grey300', 'grey400'].map((color) => (
//   ['contained', 'outlined'].map((variant) => (
//     <Button color={color} variant={variant}>Comprar</Button>
//   ))));


// TODO design the components structure; should be done already
function Consults(props) {
  const {
    totalKeys,
    keyUnitPrice,
    originalTotal,
    discountedTotal,
    percentageDiscount,
  } = props;

  return (
    <>
      <PurchaseSummary
        totalKeys={totalKeys}
        keyUnitPrice={keyUnitPrice}
        originalTotal={originalTotal}
        discountedTotal={discountedTotal}
        percentageDiscount={percentageDiscount}
      />

      <Button>Comprar</Button>
    </>
  );
}

export default Consults;
