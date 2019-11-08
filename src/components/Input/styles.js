import styled, { css } from 'styled-components';

const StyledContainer = styled.div`
  height: 104px;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.palette.grey100.main};
  padding: 12px 32px;
  border: none;
  border-radius: 24px;
  line-height: 1.5;

  ${({ theme }) => css`
    ${theme.typography.body2};
  `}

  &:focus {
    outline: none;
  }

  ${({ error }) => error && css`
    &:focus {
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.palette.error.main};
    }
  `}
`;

const StyledTitle = styled.h2`
  ${({ theme }) => css`
    ${theme.typography.h2};
  `}

  margin-bottom: 8px;
  font-size: 18px;
`;

const StyledP = styled.p`
  ${({ theme }) => css`
    ${theme.typography.body2};
  `}

  color: ${({ theme }) => theme.palette.error.main};
  font-size: 14px;
`;

export {
  StyledContainer,
  StyledInput,
  StyledP,
  StyledTitle,
};
