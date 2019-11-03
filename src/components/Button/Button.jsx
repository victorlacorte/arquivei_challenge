import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/* eslint-disable react/button-has-type */
function Button(props) {
  const {
    className,
    type,
    disabled,
    children,
  } = props;

  return (
    <button
      className={className}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',

  disabled: false,
};

Button.propTypes = {
  className: PropTypes.string.isRequired,

  type: PropTypes.oneOf(['button', 'submit']),

  disabled: PropTypes.bool,

  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

const StyledButton = styled(Button).attrs(({ variant, color }) => ({
  variant: variant || 'contained',
  color: color || 'primary',
}))`
  box-sizing: border-box;
  min-height: 40px;
  padding: 0px 32px;
  border: none;
  border-radius: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  color: white;

  ${({ theme }) => css`
    ${theme.typography.button};
  `}

  ${({ variant, color }) => variant === 'contained' && css`
    background-color: ${({ theme }) => theme.palette[color].main};

    :hover {
      background-color: ${({ theme }) => theme.palette[color].dark};
    }
  `}

  ${({ variant, color }) => variant === 'outlined' && css`
    background-color: white;
    border: 2px solid ${({ theme }) => theme.palette[color].main};
    color: ${({ theme }) => theme.palette[color].main};

    :hover {
      background-color: ${({ theme }) => theme.palette[color].light};
    }
  `}

  ${({ disabled }) => disabled && css`
    pointer-events: none;
    cursor: default;
    background-color: ${({ theme }) => theme.palette.grey[400]};
  `}
`;

export default StyledButton;
