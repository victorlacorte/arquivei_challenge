import React, { memo } from 'react';
import Router from 'next/router';

import { StyledHeader, StyledImg } from './styles';

const Header = () => (
  <StyledHeader>
    <StyledImg
      src="/images/arquivei-lite.gif"
      alt="Arquivei Lite logo"
      onClick={() => {
        Router.push('/');
      }}
    />
  </StyledHeader>
);

export default memo(Header);
