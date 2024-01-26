import styled from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'
import { defaultTheme } from '../../styles/theme/defaultTheme'

interface CheckboxProps {
  checked: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  gap: 0.5rem;

  label {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors.gray100};
  }

  margin-bottom: 0.75rem;
`

export const CheckboxRoot = styled(Checkbox.Root)<CheckboxProps>`
  background-color: ${(props) =>
    props.checked === true
      ? defaultTheme.colors.blue300
      : defaultTheme.colors.gray800};
  width: 25px;
  height: 25px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 2px 10px var(--black-a7);

  border: 2px solid ${(props) => props.theme.colors.gray300};
`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`
