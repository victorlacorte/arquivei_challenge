import { memo } from 'react';
import styled, { css } from 'styled-components';

// TODO add proptype validation? Also needs to be tested
const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
  disabled: props.disabled || false,
  variant: props.variant || 'contained',
  color: props.color || 'primary',
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

  ${({ disabled, variant, color }) => !disabled && variant === 'contained' && css`
    background-color: ${({ theme }) => theme.palette[color].main};

    :hover {
      background-color: ${({ theme }) => theme.palette[color].dark};
    }
  `}

  ${({ disabled, variant, color }) => !disabled && variant === 'outlined' && css`
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
    background-color: ${({ theme }) => theme.palette.grey400.main};
  `}
`;

export default memo(StyledButton);
