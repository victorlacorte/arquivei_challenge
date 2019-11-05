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
    consultKeys,
    keyUnitPrice,
    total,
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
            <td>{consultKeys}</td>
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
                {toBRL(total)}
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
            {toBRL(total)}
          </Total>
        )}
    </Receipt>
  );
};

PurchaseSummary.propTypes = {
  consultKeys: PropTypes.number.isRequired,

  keyUnitPrice: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,

  discountedTotal: PropTypes.number.isRequired,

  percentageDiscount: PropTypes.number.isRequired,
};

export default PurchaseSummary;
