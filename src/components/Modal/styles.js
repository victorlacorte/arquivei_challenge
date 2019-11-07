import styled, { css } from 'styled-components';

const Modal = styled.div`
  display: none;

  ${({ open }) => open && css`
    display: block;
  `}

  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.modal};
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
`;

const ModalContent = styled.div`
  position: relative;
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.palette.grey100.main};
  // padding: 24px;
`;

const ModalTitle = styled.div`
  position: relative;
  height: 40px;
  padding: 16px 24px 0;
`;

const ModalCloseIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  padding: inherit;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.grey400.main};

  &:hover {
    color: ${({ theme }) => theme.palette.grey400.light};
  }
`;

// Height: discount Title's height and padding (40 + 16 == 56px), and the body's padding (32px)
const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 32px;
  height: calc(100% - 56px - 32px);
`;

export {
  Modal as StyledModal,
  ModalTitle,
  ModalCloseIcon,
  ModalContent,
  ModalBody,
};
