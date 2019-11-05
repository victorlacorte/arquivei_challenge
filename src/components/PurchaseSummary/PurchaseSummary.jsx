import React from 'react';
import PropTypes from 'prop-types';

import { toBRL } from 'commons/utils/formatting';

import {
  DiscountedTotal,
  Hr,
  OriginalTotal,
  Receipt,
  Table,
  Title,
  Total,
} from './styles';

const PurchaseSummary = (props) => {
  const {
    totalKeys,
    keyUnitPrice,
    originalTotal,
    discountedTotal,
    percentageDiscount,
  } = props;

  return (
    <Receipt>
      <Title>
        Detalhes da compra
      </Title>

      <Table>
        <thead>
          <tr>
            <th># Chaves</th>
            <th>Valor unitário</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{totalKeys}</td>
            <td>
              {toBRL(keyUnitPrice)}
            </td>
          </tr>
        </tbody>
      </Table>

      <Hr />

      <Title>
        Total
      </Title>

      {discountedTotal
        ? (
          <>
            <OriginalTotal>
              De:
              <span>
                {toBRL(originalTotal)}
              </span>
            </OriginalTotal>

            <DiscountedTotal>
              <span>
                {toBRL(discountedTotal)}
              </span>

              <span>
                (
                {Number(percentageDiscount).toFixed(0)}
                % off)
              </span>
            </DiscountedTotal>
          </>
        )
        : (
          <Total>
            {toBRL(originalTotal)}
          </Total>
        )}
    </Receipt>
  );
};

PurchaseSummary.propTypes = {
  totalKeys: PropTypes.number.isRequired,

  keyUnitPrice: PropTypes.number.isRequired,

  originalTotal: PropTypes.number.isRequired,

  discountedTotal: PropTypes.number.isRequired,

  percentageDiscount: PropTypes.number.isRequired,
};

export default PurchaseSummary;
