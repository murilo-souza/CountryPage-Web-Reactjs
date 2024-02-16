import { SelectHTMLAttributes } from 'react'
import { Container, SelectItem } from './styles'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function FilterSelect({ ...rest }: SelectProps) {
  return (
    <Container {...rest}>
      <SelectItem label="Population" value="Population">
        Population
      </SelectItem>
      <SelectItem label="Area" value="Area">
        Area
      </SelectItem>
      <SelectItem label="Alphabetical" value="Alphabetical">
        Alphabetical order
      </SelectItem>
    </Container>
  )
}
