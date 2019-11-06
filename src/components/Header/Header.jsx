import React, { memo } from 'react';

import { StyledHeader, StyledImg } from './styles';

const Header = () => (
  <StyledHeader>
    <StyledImg src="/images/arquivei-lite.gif" alt="Arquivei Lite logo" />
  </StyledHeader>
);

export default memo(Header);
