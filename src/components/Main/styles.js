import { memo } from 'react';
import styled from 'styled-components';

/**
 * Defines the application's max-widths and paddings.
 * The height is calculated taking into account Header and Footer total heights
 */
const StyledMain = styled.main`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  min-height: calc(100vh - 92px - 60px);
  min-width: 320px;
  overflow: hidden;
  padding: 24px;

  ${({ theme }) => theme.breakpoints.down('sm')`
    min-height: calc(100vh - 56px - 40px);
    padding: 12px;
  `}

  ${({ theme }) => theme.breakpoints.up('sm')`
    max-width: ${theme.breakpoints.sm}px;
  `}

  ${({ theme }) => theme.breakpoints.up('md')`
    max-width: ${theme.breakpoints.md}px;
  `}

  ${({ theme }) => theme.breakpoints.up('lg')`
    max-width: ${theme.breakpoints.lg}px;
  `}

  ${({ theme }) => theme.breakpoints.up('xl')`
    max-width: ${theme.breakpoints.xl}px;
  `}
`;

export default memo(StyledMain);
