import styled from 'styled-components';

const SuccessImg = styled.img`
  width: auto;
  height: 30%;

  ${({ theme }) => theme.breakpoints.up('sm')`
    height: 50%;
  `}
`;

const MessageContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 70%

  ${({ theme }) => theme.breakpoints.up('sm')`
    height: 50%;
  `}
`;

export {
  SuccessImg,
  MessageContainer,
}
