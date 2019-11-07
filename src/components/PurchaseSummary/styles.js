import styled, { css } from 'styled-components';

const Receipt = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.palette.grey100.main};
  border-style: solid;
  border-width: 0 0 10px 0;
  border-image-source: url("/images/receipt-border.png");
  border-image-slice: 30;
  border-image-width: 1;
  border-image-outset: 0;
  border-image-repeat: stretch;
  max-height: 304px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 32px;

  ${({ theme }) => css`
      ${theme.typography.h2};
  `}
`;

const Hr = styled.hr`
  border-style: dashed;
  border-color: ${({ theme }) => theme.palette.grey100.dark};
  margin-bottom: 24px;
  width: 100%;
`;

// TODO set Table's max-width
const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  margin-bottom: 24px;

  & th {
    color: ${({ theme }) => theme.palette.grey400.main};
    font-family: ${({ theme }) => theme.typography.fontFamily.Rubik};
  }

  & td {
    font-family: ${({ theme }) => theme.typography.fontFamily.Roboto};
    text-align: center;
  }
`;

const OriginalTotal = styled.div`
  color: ${({ theme }) => theme.palette.grey400.main};
  font-family: ${({ theme }) => theme.typography.fontFamily.Roboto};

  & span {
    margin-left: 8px;
    text-decoration: line-through;
  }
`;

const DiscountedTotal = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.Roboto};
  font-size: 20px;
  font-weight: 900;
  color: ${({ theme }) => theme.palette.success.main};

  & span:not(:first-child) {
    margin-left: 8px;
  }
`;

const Total = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily.Roboto};
  font-size: 20px;
  font-weight: 900;
`;

export {
  Receipt,
  Title,
  Hr,
  Table,
  OriginalTotal,
  DiscountedTotal,
  Total,
};
