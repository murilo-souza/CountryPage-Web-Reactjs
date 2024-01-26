import styled, { css } from 'styled-components'

interface ButtonProps {
  selected: boolean
}

export const Container = styled.button<ButtonProps>`
  padding: 0.5rem 0.75rem;
  border: none;

  border-radius: 10px;

  font-size: 0.875rem;
  font-weight: 400;
  ${({ selected }) =>
    selected === true &&
    css`
      background-color: ${({ theme }) => theme.colors.gray700};
      color: ${({ theme }) => theme.colors.gray100};
    `}

  ${({ selected }) =>
    selected === false &&
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors.gray300};
    `}
`
