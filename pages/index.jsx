import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${({ theme }) => theme.typography.font.Rubik};
`;

export default () => <Title>My page</Title>;
