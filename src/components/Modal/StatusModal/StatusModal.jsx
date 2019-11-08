import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';

import {
  MessageContainer,
  SuccessImg,
  StyledButton,
} from './styles';

function StatusModal(props) {
  const {
    message,
    open,
    onClose,
    variant,
  } = props;

  const imageSrc = variant === 'success'
    ? '/images/icons/check-circle-green.png'
    : '/images/icons/no-cross-red.png'

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <SuccessImg
        src={imageSrc}
        alt="Ícone de sucesso"
      />
      <MessageContainer>
        {message}
      </MessageContainer>
      <StyledButton
        color={variant}
        onClick={onClose}
      >
        Continuar
      </StyledButton>
    </Modal>
  );
}

StatusModal.defaultProps = {
  onClose: () => { },
};

StatusModal.propTypes = {
  // Note that the variants correspond to possible button colors
  variant: PropTypes.oneOf(['success', 'error']).isRequired,

  onClose: PropTypes.func,
};

export default StatusModal;
