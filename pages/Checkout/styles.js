import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.h1};
  `}

  text-align: center;
  margin-bottom: 32px;
`;

const PanelDiv = styled.div`
  min-width: 50%;
`;

const Panel = styled.div`
  display: flex;

  ${({ theme }) => theme.breakpoints.down('md')`
    flex-direction: column-reverse;

    & > ${PanelDiv}:last-child {
      margin-bottom: 24px;
    }
  `}
`;

const ButtonContainer = styled.div`
  margin: 24px 0;
  text-align: center;

  ${({ theme }) => theme.breakpoints.up('md')`
    & > * {
      width: 200px;
    };

    & > *:not(:last-child) {
      margin-right: 8px
    };
  `}

  ${({ theme }) => theme.breakpoints.down('md')`
    & > *:not(:last-child) {
      margin-bottom: 8px
    }
  `}
`;

export {
  Title,
  Panel,
  PanelDiv,
  ButtonContainer,
};
