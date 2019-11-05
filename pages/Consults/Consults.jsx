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
    consultKeys,
    keyUnitPrice,
    total,
    discountedTotal,
    percentageDiscount,
  } = props;

  return (
    <>
      <PurchaseSummary
        consultKeys={consultKeys}

        keyUnitPrice={keyUnitPrice}
        total={120}
        discountedTotal={100}
        percentageDiscount={10}

        // keyUnitPrice={0.24}
        // total={240}
        // discountedTotal={136}
        // percentageDiscount={7}
      />

      <Button>Comprar</Button>
    </>
  );
}

export default Consults;
