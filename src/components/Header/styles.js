import styled from 'styled-components';

/**
 * Total header height:
 * Desktop: 60 + 16 * 2 == 92px
 * Mobile: 40 + 8 * 2 = 56px
 *
 * This information could be in the theme since our Main component makes use of it
 */
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.palette.primary.main};
  box-shadow: 0 3px 5px ${({ theme }) => theme.palette.grey400.main};
  height: 60px;
  padding: 16px;
  z-index: ${({ theme }) => theme.zIndex.appBar};

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
  max-width: 352px;
  height: auto;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down('sm')`
    width: 50%;
  `}
`;

export {
  StyledHeader,
  StyledImg,
};
