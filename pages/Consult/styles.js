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
    flex-direction: column;
  `}
`;

const ButtonContainer = styled.div`
margin-top: 48px;
text-align: center;
`;

export {
  Title,
  Panel,
  PanelDiv,
  ButtonContainer,
};
