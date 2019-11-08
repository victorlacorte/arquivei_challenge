import { memo } from 'react';
import styled from 'styled-components';

/**
 * Total footer height:
 * Desktop: 60px
 * Mobile: 40px
 *
 * This information could be in the theme since our Main component makes use of it
 */
const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 -3px 5px ${({ theme }) => theme.palette.grey400.main};
  height: 60px;
  z-index: ${({ theme }) => theme.zIndex.appBar};

  ${({ theme }) => theme.breakpoints.down('sm')`
    height: 40px;
  `}
`;

export default memo(StyledFooter);
