import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledContainer,
  StyledInput,
  StyledP,
  StyledTitle,
} from './styles';

// Input abstraction, mainly utilized as redux-form's component prop
function Input(props) {
  const {
    input: inputProps,
    type,
    label,
    placeholder,
    meta: {
      touched,
      error,
      warning,
    },
  } = props;

  return (
    <StyledContainer>
      <StyledTitle>{label}</StyledTitle>
      <div>
        <StyledInput {...inputProps} placeholder={placeholder} type={type} error={error} />
        {touched && (
          (error && <StyledP>{error}</StyledP>) || (warning && <StyledP>{warning}</StyledP>)
        )}
      </div>
    </StyledContainer>
  );
}

Input.defaultProps = {
  input: {},
};

Input.propTypes = {
  // `input` is generic enough that we only need to ensure that is destructurable
  // eslint-disable-next-line react/forbid-prop-types
  input: PropTypes.object,
};

export default Input;
