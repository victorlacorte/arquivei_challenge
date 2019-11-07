import React, { useState, useEffect } from 'react';

import {
  StyledModal,
  ModalCloseIcon,
  ModalContent,
  ModalTitle,
  ModalBody,
} from './styles';

function Modal(props) {
  const {
    open,
    children,
    onClose,
  } = props;

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  // console.log('Modal open', isOpen)

  return (
    <StyledModal open={isOpen}>
      <ModalContent>
        <ModalTitle>
          <ModalCloseIcon
            src="/images/icons/clear-24px.svg"
            alt="Fechar modal"
            onClick={(event) => {
              setIsOpen((prev) => !prev);
              onClose(event);
            }}
          />
        </ModalTitle>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </StyledModal>
  );
}

export default Modal;
