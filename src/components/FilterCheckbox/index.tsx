import { CheckboxIndicator, CheckboxRoot, Container } from './styles'
import Check from '../../assets/Done_round.svg'

interface FilterCheckboxProps {
  title: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function FilterCheckbox({
  title,
  checked,
  onChange,
}: FilterCheckboxProps) {
  return (
    <Container>
      <CheckboxRoot checked={checked} onCheckedChange={onChange}>
        <CheckboxIndicator>
          <img src={Check} alt="checked" />
        </CheckboxIndicator>
      </CheckboxRoot>
      <label>{title}</label>
    </Container>
  )
}
