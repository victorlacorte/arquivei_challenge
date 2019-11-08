import styled, { css } from 'styled-components';

import Button from 'components/Button';

const SuccessImg = styled.img`
  width: auto;
  height: 30%;

  ${({ theme }) => theme.breakpoints.up('sm')`
    height: 40%;
  `}
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60%;

  ${({ theme }) => css`
    ${theme.typography.body2};
  `}


  ${({ theme }) => theme.breakpoints.up('sm')`
    font-size: 22px;
    height: 60%;
  `}
`;

const StyledButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.up('sm')`
    width: 50%;
    max-width: 192px;
  `}
`;

export {
  SuccessImg,
  MessageContainer,
  StyledButton,
};
