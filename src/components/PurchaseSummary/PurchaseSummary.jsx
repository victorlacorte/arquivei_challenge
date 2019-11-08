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

function PurchaseSummary(props) {
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
            <td>{Number(consultKeys).toFixed(0)}</td>
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
}

PurchaseSummary.defaultProps = {
  consultKeys: 0,

  keyUnitPrice: 0,

  total: 0,

  discountedTotal: undefined,

  percentageDiscount: undefined,
};

PurchaseSummary.propTypes = {
  consultKeys: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  keyUnitPrice: PropTypes.PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  total: PropTypes.PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  discountedTotal: PropTypes.PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),

  percentageDiscount: PropTypes.PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default PurchaseSummary;
