import React, { memo } from 'react';
import styled from 'styled-components';

// TODO sticky position is possible
const StyledHeader = styled.header`
  position: relative;
  background-color: ${({ theme }) => theme.palette.primary.main};
  height: 60px;
  padding: 16px;

  ${({ theme }) => theme.breakpoints.down('sm')`
    height: 40px;
    padding: 8px;
  `}
`;

const StyledImg = styled.img`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 30%;
  max-width: 368px;
  height: auto;

  ${({ theme }) => theme.breakpoints.down('sm')`
    width: 50%;
  `}
`;

const Header = () => (
  <StyledHeader>
    <StyledImg src="/images/arquivei-lite.gif" alt="Arquivei Lite logo" />
  </StyledHeader>
);

export default memo(Header);
