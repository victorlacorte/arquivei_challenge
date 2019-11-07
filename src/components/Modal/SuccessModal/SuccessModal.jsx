import React from 'react';

import Modal from '../Modal';

import { SuccessImg } from './styles';

function SuccessModal(props) {
  const {
    message,
    open,
    onClose
  } = props;

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <SuccessImg src='/images/icons/check-circle-green.png' />
      {message}
    </Modal>
  );
}

export default SuccessModal;
